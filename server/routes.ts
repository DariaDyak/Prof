import type { Express, Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import productsRouter from "../server/products"; // Исправленный путь
import express from "express";
import { requireAdminKey } from "./auth";
import { getDbConfig } from "./dbConfig";
import { sendContactNotification } from "./email";

dotenv.config();

// Подключение к PostgreSQL
export const pool = new Pool({
  ...getDbConfig(),
});

// Типы данных
interface Product {
  id: number;
  title: string;
  description: string;
  short_description: string;
  certificate_image: string | null;
  registration_num: string | null;
  reg_program_num: string | null;
  platform: string;
  created_at: Date;
}

interface CreateProductDTO {
  title: string;
  description: string;
  short_description: string;
  certificate_image?: string;
  registration_num?: string;
  reg_program_num?: string;
  platform: string;
}

interface UpdateProductDTO {
  title?: string;
  description?: string;
  short_description?: string;
  certificate_image?: string;
  registration_num?: string;
  reg_program_num?: string;
  platform?: string;
}

interface ContactRequestRow {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  policy_accepted: boolean;
  source_page: string | null;
  user_agent: string | null;
  ip_address: string | null;
  email_sent_at: Date | null;
  email_error: string | null;
  created_at: Date;
}

interface CookieConsentRow {
  id: number;
  client_id: string;
  consent_status: "accepted" | "declined";
  source_page: string | null;
  user_agent: string | null;
  ip_address: string | null;
  created_at: Date;
  updated_at: Date;
}

interface CreateContactRequestDTO {
  name: string;
  email: string;
  phone?: string;
  message: string;
  policyAccepted: boolean;
  sourcePage?: string;
}

interface CreateCookieConsentDTO {
  clientId: string;
  status: "accepted" | "declined";
  sourcePage?: string;
}

function normalizeText(value: unknown, maxLength?: number): string {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value.trim();
  return maxLength ? normalized.slice(0, maxLength) : normalized;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getRequestIp(req: Request): string | null {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim().slice(0, 64);
  }

  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0].trim().slice(0, 64);
  }

  const ip = req.ip || req.socket.remoteAddress;
  return ip ? ip.slice(0, 64) : null;
}

async function ensureAppTables(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      short_description VARCHAR(500),
      certificate_image VARCHAR(255),
      registration_num VARCHAR(100),
      reg_program_num VARCHAR(100),
      platform VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_requests (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      message TEXT NOT NULL,
      policy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
      source_page VARCHAR(255),
      user_agent TEXT,
      ip_address VARCHAR(64),
      email_sent_at TIMESTAMPTZ,
      email_error TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    ALTER TABLE contact_requests
    ADD COLUMN IF NOT EXISTS email_sent_at TIMESTAMPTZ
  `);

  await pool.query(`
    ALTER TABLE contact_requests
    ADD COLUMN IF NOT EXISTS email_error TEXT
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS cookie_consents (
      id SERIAL PRIMARY KEY,
      client_id VARCHAR(100) NOT NULL UNIQUE,
      consent_status VARCHAR(20) NOT NULL,
      source_page VARCHAR(255),
      user_agent TEXT,
      ip_address VARCHAR(64),
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function registerRoutes(app: Express): Promise<void> {
  await ensureAppTables();

  // Простой вариант - относительные пути
  app.use(express.static('.'));


  // Health check
  app.get("/api/health", async (_req: Request, res: Response) => {
    try {
      await pool.query("SELECT 1");
      res.json({
        success: true,
        status: "healthy",
        database: "connected",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        status: "unhealthy",
        database: "disconnected",
        error: (error as Error).message,
      });
    }
  });

  // Получить все продукты
  app.get("/api/products", async (req: Request, res: Response) => {
    try {
      const result = await pool.query<Product>(`
        SELECT * FROM products 
        ORDER BY id ASC
      `);
      
      res.json({
        success: true,
        data: result.rows,
        count: result.rows.length,
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при получении данных из базы",
      });
    }
  });
  app.use(productsRouter);

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const payload = req.body as CreateContactRequestDTO;
      const name = normalizeText(payload.name, 255);
      const email = normalizeText(payload.email, 255).toLowerCase();
      const phone = normalizeText(payload.phone, 50);
      const message = normalizeText(payload.message);
      const sourcePage = normalizeText(payload.sourcePage, 255) || null;
      const policyAccepted = payload.policyAccepted === true;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "Заполните обязательные поля: имя, email и сообщение",
        });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Укажите корректный email",
        });
      }

      if (!policyAccepted) {
        return res.status(400).json({
          success: false,
          message: "Необходимо согласие на обработку персональных данных",
        });
      }

      const result = await pool.query<ContactRequestRow>(
        `
          INSERT INTO contact_requests (
            name,
            email,
            phone,
            message,
            policy_accepted,
            source_page,
            user_agent,
            ip_address
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *
        `,
        [
          name,
          email,
          phone || null,
          message,
          policyAccepted,
          sourcePage,
          normalizeText(req.get("user-agent"), 1000) || null,
          getRequestIp(req),
        ],
      );

      let contactRequest = result.rows[0];
      const delivery = await sendContactNotification({
        name,
        email,
        phone: phone || null,
        message,
        sourcePage,
        createdAt: contactRequest.created_at,
      });

      if (delivery.sent) {
        const updated = await pool.query<ContactRequestRow>(
          `
            UPDATE contact_requests
            SET email_sent_at = CURRENT_TIMESTAMP,
                email_error = NULL
            WHERE id = $1
            RETURNING *
          `,
          [contactRequest.id],
        );
        contactRequest = updated.rows[0];
      } else if (delivery.enabled && delivery.error) {
        const updated = await pool.query<ContactRequestRow>(
          `
            UPDATE contact_requests
            SET email_error = $2
            WHERE id = $1
            RETURNING *
          `,
          [contactRequest.id, delivery.error],
        );
        contactRequest = updated.rows[0];
      }

      res.status(201).json({
        success: true,
        data: contactRequest,
        message: delivery.sent
          ? "Заявка успешно сохранена и отправлена на почту"
          : "Заявка сохранена",
      });
    } catch (error) {
      console.error("Contact request error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при сохранении заявки",
      });
    }
  });

  app.post("/api/cookie-consent", async (req: Request, res: Response) => {
    try {
      const payload = req.body as CreateCookieConsentDTO;
      const clientId = normalizeText(payload.clientId, 100);
      const status = normalizeText(payload.status, 20) as CreateCookieConsentDTO["status"];
      const sourcePage = normalizeText(payload.sourcePage, 255) || null;

      if (!clientId) {
        return res.status(400).json({
          success: false,
          message: "Не передан clientId для cookie consent",
        });
      }

      if (status !== "accepted" && status !== "declined") {
        return res.status(400).json({
          success: false,
          message: "Некорректный статус cookie consent",
        });
      }

      const result = await pool.query<CookieConsentRow>(
        `
          INSERT INTO cookie_consents (
            client_id,
            consent_status,
            source_page,
            user_agent,
            ip_address
          )
          VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT (client_id) DO UPDATE
          SET
            consent_status = EXCLUDED.consent_status,
            source_page = EXCLUDED.source_page,
            user_agent = EXCLUDED.user_agent,
            ip_address = EXCLUDED.ip_address,
            updated_at = CURRENT_TIMESTAMP
          RETURNING *
        `,
        [
          clientId,
          status,
          sourcePage,
          normalizeText(req.get("user-agent"), 1000) || null,
          getRequestIp(req),
        ],
      );

      res.status(201).json({
        success: true,
        data: result.rows[0],
        message: "Согласие на cookie сохранено",
      });
    } catch (error) {
      console.error("Cookie consent error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при сохранении согласия на cookie",
      });
    }
  });

  // Поиск продуктов
  app.get("/api/products/search", async (req: Request, res: Response) => {
    try {
      const { q } = req.query;

      if (!q || typeof q !== "string") {
        const result = await pool.query<Product>("SELECT * FROM products ORDER BY id ASC");
        return res.json({
          success: true,
          data: result.rows,
          count: result.rows.length,
        });
      }

      const result = await pool.query<Product>(
        `
        SELECT * FROM products 
        WHERE 
          title ILIKE $1 OR 
          description ILIKE $1 OR 
          short_description ILIKE $1 OR
          platform ILIKE $1
        ORDER BY id ASC
      `,
        [`%${q}%`]
      );

      res.json({
        success: true,
        data: result.rows,
        count: result.rows.length,
      });
    } catch (error) {
      console.error("Search error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при поиске продуктов",
      });
    }
  });

  // Получить статистику продуктов
  app.get("/api/products/stats", async (req: Request, res: Response) => {
    try {
      const [totalResult, certificatesResult, registeredResult, platformResult] = await Promise.all([
        pool.query("SELECT COUNT(*) as count FROM products"),
        pool.query("SELECT COUNT(*) as count FROM products WHERE certificate_image IS NOT NULL"),
        pool.query("SELECT COUNT(*) as count FROM products WHERE registration_num IS NOT NULL"),
        pool.query("SELECT platform, COUNT(*) as count FROM products GROUP BY platform"),
      ]);

      const byPlatform: Record<string, number> = {};
      platformResult.rows.forEach((row: any) => {
        byPlatform[row.platform] = parseInt(row.count);
      });

      res.json({
        success: true,
        data: {
          total: parseInt(totalResult.rows[0].count),
          withCertificates: parseInt(certificatesResult.rows[0].count),
          registered: parseInt(registeredResult.rows[0].count),
          byPlatform,
        },
      });
    } catch (error) {
      console.error("Stats error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при получении статистики",
      });
    }
  });

  // Дополнительные маршруты для работы с таблицей products
  app.get("/api/products/platform/:platform", async (req: Request, res: Response) => {
    try {
      const { platform } = req.params;
      const result = await pool.query<Product>(
        "SELECT * FROM products WHERE platform ILIKE $1 ORDER BY id ASC",
        [`%${platform}%`]
      );

      res.json({
        success: true,
        data: result.rows,
        count: result.rows.length,
      });
    } catch (error) {
      console.error("Platform filter error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при фильтрации по платформе",
      });
    }
  });

  // Получить продукты с сертификатами
  app.get("/api/products/with-certificates", async (req: Request, res: Response) => {
    try {
      const result = await pool.query<Product>(
        "SELECT * FROM products WHERE certificate_image IS NOT NULL ORDER BY id ASC"
      );

      res.json({
        success: true,
        data: result.rows,
        count: result.rows.length,
      });
    } catch (error) {
      console.error("Certificates error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при получении продуктов с сертификатами",
      });
    }
  });

  // Получить зарегистрированные продукты
  app.get("/api/products/registered", async (req: Request, res: Response) => {
    try {
      const result = await pool.query<Product>(
        "SELECT * FROM products WHERE registration_num IS NOT NULL ORDER BY id ASC"
      );

      res.json({
        success: true,
        data: result.rows,
        count: result.rows.length,
      });
    } catch (error) {
      console.error("Registered products error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при получении зарегистрированных продуктов",
      });
    }
  });

  // Получить продукт по ID
  app.get("/api/products/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Неверный ID продукта",
        });
      }

      const result = await pool.query<Product>("SELECT * FROM products WHERE id = $1", [id]);

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Продукт не найден",
        });
      }

      res.json({
        success: true,
        data: result.rows[0],
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при получении продукта",
      });
    }
  });

  // Создать продукт
  app.post("/api/products", requireAdminKey(), async (req: Request, res: Response) => {
    try {
      const productData: CreateProductDTO = req.body;

      // Валидация
      if (!productData.title || !productData.description || !productData.short_description || !productData.platform) {
        return res.status(400).json({
          success: false,
          message: "Заполните все обязательные поля: title, description, short_description, platform",
        });
      }

      const result = await pool.query<Product>(
        `
        INSERT INTO products (
          title, description, short_description, 
          certificate_image, registration_num, 
          reg_program_num, platform
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *
      `,
        [
          productData.title,
          productData.description,
          productData.short_description,
          productData.certificate_image || null,
          productData.registration_num || null,
          productData.reg_program_num || null,
          productData.platform,
        ]
      );

      res.status(201).json({
        success: true,
        data: result.rows[0],
        message: "Продукт успешно создан",
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при создании продукта",
      });
    }
  });

  // Обновить продукт
  app.put("/api/products/:id", requireAdminKey(), async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Неверный ID продукта",
        });
      }

      const updateData: UpdateProductDTO = req.body;

      // Проверка существования продукта
      const existingProduct = await pool.query<Product>("SELECT * FROM products WHERE id = $1", [id]);
      if (existingProduct.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Продукт не найден",
        });
      }

      // Формирование запроса на обновление
      const fields: string[] = [];
      const values: any[] = [];
      let paramIndex = 1;

      Object.entries(updateData).forEach(([key, value]) => {
        if (value !== undefined) {
          fields.push(`${key} = $${paramIndex}`);
          values.push(value);
          paramIndex++;
        }
      });

      if (fields.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Нет данных для обновления",
        });
      }

      values.push(id);

      const query = `
        UPDATE products 
        SET ${fields.join(", ")} 
        WHERE id = $${paramIndex} 
        RETURNING *
      `;

      const result = await pool.query<Product>(query, values);

      res.json({
        success: true,
        data: result.rows[0],
        message: "Продукт успешно обновлен",
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при обновлении продукта",
      });
    }
  });

  // Удалить продукт
  app.delete("/api/products/:id", requireAdminKey(), async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Неверный ID продукта",
        });
      }

      const result = await pool.query<Product>("DELETE FROM products WHERE id = $1 RETURNING *", [id]);

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Продукт не найден",
        });
      }

      res.json({
        success: true,
        message: "Продукт успешно удален",
        data: result.rows[0],
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при удалении продукта",
      });
    }
  });

  // Тестовый маршрут для проверки работы базы данных
  app.get("/api/test-db", requireAdminKey(), async (_req: Request, res: Response) => {
    try {
      // Создаем тестовую таблицу, если она не существует
      await pool.query(`
        CREATE TABLE IF NOT EXISTS test_table (
          id SERIAL PRIMARY KEY,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Вставляем тестовые данные
      await pool.query("INSERT INTO test_table (message) VALUES ($1)", [
        "Тестовое подключение к PostgreSQL успешно!",
      ]);

      // Получаем данные
      const result = await pool.query("SELECT * FROM test_table ORDER BY created_at DESC LIMIT 5");

      res.json({
        success: true,
        message: "База данных работает корректно",
        data: result.rows,
      });
    } catch (error) {
      console.error("Test DB error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при работе с базой данных",
        error: (error as Error).message,
      });
    }
  });

  // Инициализация базы данных (для разработки)
  app.post("/api/init-db", requireAdminKey(), async (_req: Request, res: Response) => {
    try {
      await ensureAppTables();

      res.json({
        success: true,
        message: "База данных успешно инициализирована",
        
      });
    } catch (error) {
      console.error("Init DB error:", error);
      res.status(500).json({
        success: false,
        message: "Ошибка при инициализации базы данных",
        error: (error as Error).message,
      });
    }
  });

}
