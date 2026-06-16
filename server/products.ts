import { Router } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import { getDbConfig } from "./dbConfig";

dotenv.config();

const router = Router();

// Подключение к PostgreSQL
const pool = new Pool({
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

export default router;
