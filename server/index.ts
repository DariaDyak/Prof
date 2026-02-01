import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { createApp, registerErrorHandler } from "./app";

const app = createApp();

(async () => {
  try {
    const server = await registerRoutes(app);

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    registerErrorHandler(app);

    const port = parseInt(process.env.PORT || "3000", 10);

    server.listen(port, () => {
      console.log(`🚀 Сервер запущен на http://localhost:${port}`);
      console.log(`📊 API продуктов: http://localhost:${port}/api/products`);
      console.log(`🔍 Health check: http://localhost:${port}/api/health`);
      console.log(`🔄 Инициализация БД: http://localhost:${port}/api/init-db (POST)`);
    });

  } catch (error) {
    console.error("❌ Ошибка запуска сервера:", error);
    process.exit(1);
  }
})();
