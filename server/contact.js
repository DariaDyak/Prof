const express = require('express');
const { transporter, createEmailTemplate } = require('../config/email');
const router = express.Router();

// Валидация данных формы
const validateFormData = (formData) => {
  const errors = [];
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Имя должно содержать минимум 2 символа');
  }
  
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.push('Укажите корректный email');
  }
  
  if (!formData.phone || formData.phone.replace(/\D/g, '').length < 11) {
    errors.push('Укажите корректный номер телефона');
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Сообщение должно содержать минимум 10 символов');
  }
  
  return errors;
};

// Отправка заявки
router.post('/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Валидация данных
    const errors = validateFormData(formData);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Ошибки валидации',
        errors: errors
      });
    }
    
    // Подготовка данных для письма
    const emailHtml = createEmailTemplate(formData);
    const emailText = `
      Новая заявка с сайта
      
      Имя: ${formData.name}
      Телефон: ${formData.phone}
      Email: ${formData.email}
      Сообщение: ${formData.message}
      
      Дата: ${new Date().toLocaleString('ru-RU')}
    `;
    
    // Настройки письма
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `📧 Новая заявка от ${formData.name} - ${process.env.COMPANY_NAME}`,
      text: emailText,
      html: emailHtml,
      replyTo: formData.email, // Чтобы ответить клиенту
    };
    
    // Отправка письма
    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Заявка отправлена от: ${formData.name} (${formData.email})`);
    
    res.json({
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    });
    
  } catch (error) {
    console.error('❌ Ошибка отправки заявки:', error);
    
    res.status(500).json({
      success: false,
      message: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;