# Docker (backend + PostgreSQL)

## Быстрый старт
1) Настрой переменные окружения:
   - `cp .env.example .env`
   - поменяй минимум `POSTGRES_PASSWORD` / `DB_PASSWORD`
2) Запуск:
   - `docker compose up -d --build`

## Порты
- Backend: `APP_PORT` (по умолчанию `3000`) → контейнер `backend:3000`
- Postgres: `POSTGRES_PORT` (по умолчанию `5433`) → контейнер `db:5432`

## Публичный base path
- `PUBLIC_BASE_PATH=/` (по умолчанию) — фронт открывается на `http://localhost:${APP_PORT}/`
- Если нужен префикс (например `/prof2`), поставь `PUBLIC_BASE_PATH=/prof2` и пересобери образ (`docker compose up -d --build`)

Проверка:
- `curl http://localhost:${APP_PORT}/api/health`

## Данные БД
- Данные Postgres сохраняются в volume `pgdata`
- Первый запуск на пустом volume применяет `db/init.sql`

Сброс (удалит данные БД):
- `docker compose down -v`

## Тесты бэкенда
- `npm test` (интеграционные тесты через Testcontainers, нужен Docker)
