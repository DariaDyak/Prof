import nodemailer from "nodemailer";

interface ContactNotificationPayload {
  name: string;
  email: string;
  phone: string | null;
  message: string;
  sourcePage: string | null;
  createdAt?: Date | string | null;
}

interface EmailDeliveryResult {
  enabled: boolean;
  sent: boolean;
  messageId?: string;
  error?: string | null;
}

interface EmailTransportConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

function isEnabled(value: string | undefined): boolean {
  if (!value) {
    return false;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

function getEmailConfig(): EmailTransportConfig | null {
  const host = process.env.EMAIL_HOST?.trim();
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim();

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number.parseInt(process.env.EMAIL_PORT || "465", 10);
  if (!Number.isFinite(port) || port <= 0) {
    return null;
  }

  return {
    host,
    port,
    secure: isEnabled(process.env.EMAIL_SECURE),
    auth: {
      user,
      pass,
    },
    from: user,
    to: user,
  };
}

function getTransporter(config: EmailTransportConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });
}

function formatCreatedAt(value: Date | string | null | undefined): string {
  if (!value) {
    return new Date().toISOString();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

export function isEmailDeliveryConfigured(): boolean {
  return Boolean(getEmailConfig());
}

export async function verifyEmailTransport(): Promise<EmailDeliveryResult> {
  if (process.env.NODE_ENV === "test") {
    return {
      enabled: false,
      sent: false,
      error: null,
    };
  }

  const config = getEmailConfig();
  if (!config) {
    return {
      enabled: false,
      sent: false,
      error:
        "Не заданы обязательные EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS",
    };
  }

  try {
    const transport = getTransporter(config);
    await transport.verify();
    return {
      enabled: true,
      sent: true,
      error: null,
    };
  } catch (error) {
    return {
      enabled: true,
      sent: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function sendContactNotification(
  payload: ContactNotificationPayload,
): Promise<EmailDeliveryResult> {
  if (process.env.NODE_ENV === "test") {
    return {
      enabled: false,
      sent: false,
      error: null,
    };
  }

  const config = getEmailConfig();
  if (!config) {
    return {
      enabled: false,
      sent: false,
      error:
        "Не заданы обязательные EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS",
    };
  }

  const phoneText = payload.phone || "Не указан";
  const sourcePageText = payload.sourcePage || "Не указана";
  const createdAtText = formatCreatedAt(payload.createdAt);

  try {
    const transport = getTransporter(config);
    const info = await transport.sendMail({
      from: `"ПРОФ ИТ" <${config.from}>`,
      to: config.to,
      replyTo: payload.email,
      subject: `Новая заявка с сайта от ${payload.name}`,
      text: [
        "Новая заявка с сайта",
        `Имя: ${payload.name}`,
        `Email: ${payload.email}`,
        `Телефон: ${phoneText}`,
        `Страница: ${sourcePageText}`,
        `Время: ${createdAtText}`,
        "",
        "Сообщение:",
        payload.message,
      ].join("\n"),
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Телефон:</strong> ${phoneText}</p>
        <p><strong>Страница:</strong> ${sourcePageText}</p>
        <p><strong>Время:</strong> ${createdAtText}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return {
      enabled: true,
      sent: true,
      messageId: info.messageId,
      error: null,
    };
  } catch (error) {
    return {
      enabled: true,
      sent: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
