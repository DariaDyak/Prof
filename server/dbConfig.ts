import type { PoolConfig } from "pg";

function parsePort(...candidates: Array<string | undefined>): number {
  for (const value of candidates) {
    if (!value) {
      continue;
    }

    const port = Number.parseInt(value, 10);
    if (Number.isFinite(port) && port > 0) {
      return port;
    }
  }

  return 5432;
}

export function getDbConfig(): PoolConfig {
  const hasExplicitDbFields = Boolean(
    process.env.DB_HOST ||
      process.env.DB_PORT ||
      process.env.DB_NAME ||
      process.env.DB_USER ||
      process.env.DB_PASSWORD,
  );

  if (!hasExplicitDbFields && process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  }

  return {
    host: process.env.DB_HOST || "localhost",
    port: parsePort(process.env.DB_PORT, process.env.POSTGRES_PORT, "5432"),
    database: process.env.DB_NAME || process.env.POSTGRES_DB || "profit_db",
    user: process.env.DB_USER || process.env.POSTGRES_USER || "postgres",
    password: process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || "postgres",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
}
