import { Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Decisions from "@/pages/Decisions";
import AutomationPage from "@/pages/AutomationPage";
import СSupportPage from "@/pages/СSupportPage";
import DevelopmentPage from "@/pages/DevelopmentPage";
import './index.css'
import DataProcessing from '@/pages/DataProcessing';
import ProfitEs from "@/pages/ProfitES"; 
import ProfitLs from "@/pages/ProfitLS";
import ProfitMo from "@/pages/ProfitMO";
import AboutUsPage from "@/pages/AboutUsPage";

// Импортируем компонент логотипа и загрузчика
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect, Suspense, lazy } from "react";

// Опционально: ленивая загрузка страниц для улучшения производительности
const LazyHome = lazy(() => import("@/pages/Home"));
const LazyDecisions = lazy(() => import("@/pages/Decisions"));
const LazyAutomationPage = lazy(() => import("@/pages/AutomationPage"));
const LazyСSupportPage = lazy(() => import("@/pages/СSupportPage"));
const LazyDevelopmentPage = lazy(() => import("@/pages/DevelopmentPage"));
const LazyDataProcessing = lazy(() => import("@/pages/DataProcessing"));
const LazyProfitEs = lazy(() => import("@/pages/ProfitES"));
const LazyProfitLs = lazy(() => import("@/pages/ProfitLS"));
const LazyProfitMo = lazy(() => import("@/pages/ProfitMO"));
const LazyAboutUsPage = lazy(() => import("@/pages/AboutUsPage"));

function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/decisions" element={<LazyDecisions />} />
        <Route path="/automationpage" element={<LazyAutomationPage />} />
        <Route path="/cSupportPage" element={<LazyСSupportPage />} />
        <Route path="/developmentPage" element={<LazyDevelopmentPage />} />
        <Route path="/dataProcessing" element={<LazyDataProcessing />} />
        <Route path="/profitEs" element={<LazyProfitEs />} />
        <Route path="/profitLs" element={<LazyProfitLs />} />
        <Route path="/profitMo" element={<LazyProfitMo />} />
        <Route path="/AboutUsPage" element={<LazyAboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [initialTheme, setInitialTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Определяем начальную тему из localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setInitialTheme(savedTheme);
    } else {
      // Если тема не сохранена, можно использовать медиа-запрос
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setInitialTheme(prefersDark ? 'dark' : 'light');
    }

    // Функция для имитации/реализации фоновой загрузки
    const initializeApp = async () => {
      try {
        // 1. Проверяем, первый ли это визит
        const hasVisitedBefore = localStorage.getItem('app_has_visited');
        const isFirstVisit = !hasVisitedBefore;

        // 2. Имитируем загрузку критически важных ресурсов
        const loadPromises = [
          // Загрузка шрифтов, иконок, базовых данных
          new Promise(resolve => setTimeout(resolve, 800)), // минимальное время показа
          
          // Загрузка реальных ресурсов
          // preloadImages(['/logo.png', '/background.jpg']),
          // loadFonts(),
          // fetchInitialData(),
        ];

        // 3. Ждем загрузки ресурсов
        await Promise.all(loadPromises);

        // 4. Устанавливаем флаг посещения
        if (isFirstVisit) {
          localStorage.setItem('app_has_visited', 'true');
        }

        // 5. Завершаем основную загрузку
        setIsLoading(false);

        // 6. Показываем логотип дополнительное время для первого посещения
        const logoDuration = isFirstVisit ? 2000 : 500;
        setTimeout(() => {
          setShowLogo(false);
        }, logoDuration);

      } catch (error) {
        console.error('Error during app initialization:', error);
        // В случае ошибки все равно скрываем загрузку
        setIsLoading(false);
        setShowLogo(false);
      }
    };

    initializeApp();

    // Очистка таймеров при размонтировании
    return () => {
      // Можно добавить отмену запросов если они используются
    };
  }, []);

  // Показываем экран загрузки с логотипом
  if (showLogo) {
    return (
      // ThemeProvider не принимает defaultTheme и storageKey, оставляем только children
      <ThemeProvider>
        <LoadingScreen isLoading={isLoading} />
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Ваш ThemeProvider принимает только children */}
        <ThemeProvider>
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;