const nodemailer = require('nodemailer');

// Создаем транспорт для отправки почты
const transporter = nodemailer.createTransporter({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Функция для проверки подключения
const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email configuration is correct');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error);
    return false;
  }
};

// Шаблон письма
const createEmailTemplate = (formData) => {
  const currentDate = new Date().toLocaleString('ru-RU');
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #475569; }
        .value { color: #1e293b; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Новая заявка с сайта</h1>
          <p>${currentDate}</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">👤 Имя:</span>
            <span class="value">${formData.name || 'Не указано'}</span>
          </div>
          
          <div class="field">
            <span class="label">📞 Телефон:</span>
            <span class="value">${formData.phone || 'Не указан'}</span>
          </div>
          
          <div class="field">
            <span class="label">✉️ Email:</span>
            <span class="value">${formData.email || 'Не указан'}</span>
          </div>
          
          <div class="field">
            <span class="label">💬 Сообщение:</span>
            <div class="value" style="margin-top: 8px; padding: 12px; background: white; border-radius: 4px; border: 1px solid #e2e8f0;">
              ${formData.message || 'Не указано'}
            </div>
          </div>
          
          <div class="field">
            <span class="label">📋 Источник:</span>
            <span class="value">Форма обратной связи на сайте</span>
          </div>
        </div>
        
        <div class="footer">
          <p>Это письмо было отправлено автоматически с сайта ${process.env.COMPANY_NAME}.</p>
          <p>Телефон для связи: ${process.env.COMPANY_PHONE}</p>
          <p>Не отвечайте на это письмо.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = {
  transporter,
  verifyEmailConfig,
  createEmailTemplate,
};