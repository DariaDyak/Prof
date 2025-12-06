// PROF/server/server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Подключаемся к PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Для локального PostgreSQL без SSL
  ssl: false
});

// Тестовый запрос к базе
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time');
    res.json({ 
      message: '✅ PostgreSQL подключен!', 
      time: result.rows[0].current_time 
    });
  } catch (error) {
    console.error('❌ Ошибка подключения к PostgreSQL:', error);
    res.status(500).json({ 
      error: 'Не удалось подключиться к базе данных',
      details: error.message 
    });
  }
});

// Получить все продукты
app.get('/api/products', async (req, res) => {
  try {
    console.log('📦 Запрос продуктов из PostgreSQL...');
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    console.log(`✅ Найдено ${result.rowCount} записей`);
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Ошибка запроса к PostgreSQL:', error);
    res.status(500).json({ 
      error: 'Ошибка базы данных',
      details: error.message 
    });
  }
});

// Получить статистику
app.get('/api/products/stats', async (req, res) => {
  try {
    // Всего продуктов
    const totalResult = await pool.query('SELECT COUNT(*) FROM products');
    const total = parseInt(totalResult.rows[0].count);
    
    // С сертификатами
    const certResult = await pool.query(`
      SELECT COUNT(*) FROM products 
      WHERE certificate_image IS NOT NULL 
      AND certificate_image != ''
    `);
    const withCertificates = parseInt(certResult.rows[0].count);
    
    // Зарегистрированные
    const registeredResult = await pool.query(`
      SELECT COUNT(*) FROM products 
      WHERE registration_num IS NOT NULL 
      OR reg_program_num IS NOT NULL
    `);
    const registered = parseInt(registeredResult.rows[0].count);
    
    res.json({ total, withCertificates, registered });
    
  } catch (error) {
    console.error('❌ Ошибка статистики:', error);
    res.status(500).json({ error: error.message });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📞 Тестовый запрос: http://localhost:${PORT}/api/test`);
});