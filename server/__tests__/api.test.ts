import fs from "node:fs";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import supertest from "supertest";
import { GenericContainer, Wait } from "testcontainers";

const dockerAvailable =
  Boolean(process.env.DOCKER_HOST) || fs.existsSync("/var/run/docker.sock");

if (!dockerAvailable && process.env.REQUIRE_DOCKER === "1") {
  throw new Error(
    "Docker is required for integration tests (set REQUIRE_DOCKER=0 to skip).",
  );
}

const describeIfDocker = dockerAvailable ? describe : describe.skip;

describeIfDocker("API (integration)", () => {
  let request: supertest.SuperTest<supertest.Test>;
  let stopPg: (() => Promise<void>) | undefined;
  let closePool: (() => Promise<void>) | undefined;

  beforeAll(async () => {
    const container = await new GenericContainer("postgres:16-alpine")
      .withEnvironment({
        POSTGRES_DB: "profit_db",
        POSTGRES_USER: "postgres",
        POSTGRES_PASSWORD: "postgres",
      })
      .withExposedPorts(5432)
      .withWaitStrategy(Wait.forLogMessage(/database system is ready to accept connections/i))
      .start();

    stopPg = async () => {
      await container.stop();
    };

    process.env.NODE_ENV = "test";
    process.env.DB_HOST = container.getHost();
    process.env.DB_PORT = container.getMappedPort(5432).toString();
    process.env.DB_NAME = "profit_db";
    process.env.DB_USER = "postgres";
    process.env.DB_PASSWORD = "postgres";
    process.env.ADMIN_API_KEY = "test-admin";

    const { createApp } = await import("../app");
    const { registerRoutes, pool } = await import("../routes");

    const app = createApp();
    await registerRoutes(app);
    request = supertest(app);

    closePool = async () => {
      await pool.end();
    };

    // Ensure DB schema exists
    await request.post("/api/init-db").set("X-Admin-Key", "test-admin").expect(200);
  });

  afterAll(async () => {
    await closePool?.();
    await stopPg?.();
  });

  it("GET /api/health -> healthy", async () => {
    const res = await request.get("/api/health").expect(200);
    expect(res.body.success).toBe(true);
    expect(res.body.status).toBe("healthy");
    expect(res.body.database).toBe("connected");
    expect(typeof res.body.timestamp).toBe("string");
  });

  it("POST /api/products validates required fields", async () => {
    const res = await request
      .post("/api/products")
      .set("X-Admin-Key", "test-admin")
      .send({ title: "x" })
      .expect(400);
    expect(res.body.success).toBe(false);
  });

  it("CRUD /api/products", async () => {
    const payload = {
      title: "Test Product",
      description: "Long description",
      short_description: "Short description",
      platform: "web",
    };

    const created = await request
      .post("/api/products")
      .set("X-Admin-Key", "test-admin")
      .send(payload)
      .expect(201);
    expect(created.body.success).toBe(true);
    expect(created.body.data.title).toBe(payload.title);
    const id = created.body.data.id as number;
    expect(typeof id).toBe("number");

    const list = await request.get("/api/products").expect(200);
    expect(list.body.success).toBe(true);
    expect(Array.isArray(list.body.data)).toBe(true);
    expect(list.body.data.length).toBeGreaterThanOrEqual(1);

    const one = await request.get(`/api/products/${id}`).expect(200);
    expect(one.body.success).toBe(true);
    expect(one.body.data.id).toBe(id);

    const updated = await request
      .put(`/api/products/${id}`)
      .set("X-Admin-Key", "test-admin")
      .send({ title: "Updated" })
      .expect(200);
    expect(updated.body.success).toBe(true);
    expect(updated.body.data.title).toBe("Updated");

    const deleted = await request
      .delete(`/api/products/${id}`)
      .set("X-Admin-Key", "test-admin")
      .expect(200);
    expect(deleted.body.success).toBe(true);
  });

  it("GET /api/products/search returns matches", async () => {
    const payload = {
      title: "Searchable Product",
      description: "Find me",
      short_description: "Search",
      platform: "mobile",
    };

    const created = await request
      .post("/api/products")
      .set("X-Admin-Key", "test-admin")
      .send(payload)
      .expect(201);
    const id = created.body.data.id as number;

    const res = await request.get("/api/products/search?q=Searchable").expect(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.some((p: any) => p.id === id)).toBe(true);
  });

  it("GET /api/products/stats returns aggregated data", async () => {
    const res = await request.get("/api/products/stats").expect(200);
    expect(res.body.success).toBe(true);
    expect(typeof res.body.data.total).toBe("number");
    expect(typeof res.body.data.byPlatform).toBe("object");
  });

  it("POST /api/contact saves contact request to DB", async () => {
    const payload = {
      name: "Иван",
      email: "ivan@example.com",
      phone: "+7 (999) 123-45-67",
      message: "Нужна консультация по продукту",
      policyAccepted: true,
      sourcePage: "/",
    };

    const created = await request.post("/api/contact").send(payload).expect(201);
    expect(created.body.success).toBe(true);
    expect(created.body.data.email).toBe(payload.email);
    expect(created.body.data.policy_accepted).toBe(true);

    const { pool } = await import("../routes");
    const dbRow = await pool.query(
      "SELECT email, policy_accepted, source_page FROM contact_requests WHERE id = $1",
      [created.body.data.id],
    );

    expect(dbRow.rows[0]?.email).toBe(payload.email);
    expect(dbRow.rows[0]?.policy_accepted).toBe(true);
    expect(dbRow.rows[0]?.source_page).toBe(payload.sourcePage);
  });

  it("POST /api/cookie-consent upserts consent in DB", async () => {
    const payload = {
      clientId: "test-cookie-client",
      status: "accepted",
      sourcePage: "/",
    };

    const created = await request.post("/api/cookie-consent").send(payload).expect(201);
    expect(created.body.success).toBe(true);
    expect(created.body.data.client_id).toBe(payload.clientId);
    expect(created.body.data.consent_status).toBe(payload.status);

    const updated = await request
      .post("/api/cookie-consent")
      .send({ ...payload, status: "declined", sourcePage: "/privacy" })
      .expect(201);

    expect(updated.body.success).toBe(true);
    expect(updated.body.data.client_id).toBe(payload.clientId);
    expect(updated.body.data.consent_status).toBe("declined");

    const { pool } = await import("../routes");
    const dbRow = await pool.query(
      "SELECT client_id, consent_status, source_page FROM cookie_consents WHERE client_id = $1",
      [payload.clientId],
    );

    expect(dbRow.rows[0]?.client_id).toBe(payload.clientId);
    expect(dbRow.rows[0]?.consent_status).toBe("declined");
    expect(dbRow.rows[0]?.source_page).toBe("/privacy");
  });
});
