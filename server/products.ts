import { Router } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

// Подключение к PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5433"),
  database: process.env.DB_NAME || "profit_db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
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

export default router;