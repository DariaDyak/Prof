-- Runs automatically on first database init (empty volume)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

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
);

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
);

CREATE TABLE IF NOT EXISTS cookie_consents (
  id SERIAL PRIMARY KEY,
  client_id VARCHAR(100) NOT NULL UNIQUE,
  consent_status VARCHAR(20) NOT NULL,
  source_page VARCHAR(255),
  user_agent TEXT,
  ip_address VARCHAR(64),
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (title, short_description, platform, registration_num, reg_program_num, certificate_image, description) VALUES
('Автоматизированная информационная система «ПРОФИТ-ЭС»', 
 'Автоматизация и оптимизация процессов купли-продажи электроэнергии для энергосбытовых компаний.', 
 '1С:Предприятие 8.3', 
 '2024686145', 
 '26848', 
 '/attached_assets/generated_images/certificate_1.png',
 'Программное обеспечение для покупки и продажи электроэнергии на розничных и оптовых рынках является важным инструментом для энергосбытовых компаний. Оно не только автоматизирует и оптимизирует процессы, но и способствует повышению эффективности, снижению рисков и улучшению обслуживания клиентов.'),

('Автоматизированная информационная система «ПРОФИТ-ЛС»', 
 'Автоматизация управления подвижным составом и логистики железнодорожных перевозок.', 
 '1С:Предприятие 8.3', 
 '2025660499', 
 NULL, 
 '/attached_assets/generated_images/certificate_2.png',
 'Предназначена для комплексной автоматизации управления подвижным составом и оптимизации логистических процессов в сфере железнодорожных перевозок. Система обеспечивает мониторинг и контроль движения вагонов, управление ремонтами и обслуживанием, а также интеграцию с внешними системами для эффективного взаимодействия между всеми участниками логистической цепочки.'),

('Система «ПРОФИТ-МО»', 
 'Расширение для 1С:Бухгалтерия для автоматизации учёта медицинских осмотров.', 
 '1С:Предприятие 8.3', 
 2025688393, 
 NULL, 
 '/attached_assets/generated_images/certificate_3.png',
 'Система создана как расширение для конфигурации «1С:Бухгалтерия» и служит для автоматизации обмена данными и элементами управления между системой «ЭСМО» и 1С, а также создании среды для сбора, обмена, хранения и обработки информации по медицинским осмотрам.');
