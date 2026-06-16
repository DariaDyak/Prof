import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Decisions from "@/pages/Decisions";
import AutomationPage from "@/pages/AutomationPage";
import CSupportPage from "@/pages/CSupportPage";
import DevelopmentPage from "@/pages/DevelopmentPage";
import './index.css'
import DataProcessing from '@/pages/DataProcessing';
import Approval from '@/pages/Approval';
import ProfitEs from "@/pages/ProfitES";
import ProfitLs from "@/pages/ProfitLS";
import ProfitMo from "@/pages/ProfitMO";
import AboutUsPage from "@/pages/AboutUsPage";
import CookieBanner from "@/components/CookieBanner";
import PartnersPage from "@/pages/PartnersPage";

import LoadingScreen from "@/components/LoadingScreen";
import { waitForImages } from "@/lib/waitForImages";
import { useState, useEffect, Suspense } from "react";
import { statsSectionCertificateUrls } from "@/components/data/statsSectionCertificates";
import ScrollToContactFab from "@/components/ScrollToContactFab";
import { scrollToElement } from "@/components/ScrollToElement";

function Router() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Сбрасываем скролл при смене страницы для FAB
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  }, [location.pathname]);

  const handleContactClick = () => {
    console.log('FAB clicked - current path:', location.pathname);
    
    // Проверяем, находимся ли мы на главной странице
    if (location.pathname === '/') {
      // Если на главной - скроллим к ContactForm
      setTimeout(() => {
        const success = scrollToElement('contact-form', 80, 'smooth');
        if (!success) {
          console.warn('Contact form not found');
        }
      }, 100);
    } else {
      // Если не на главной - перенаправляем на главную с состоянием
      console.log('Navigating to home page with scroll flag');
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  // Обработка скролла после навигации
  useEffect(() => {
    if (location.state?.scrollToContact) {
      console.log('Scroll to contact after navigation');
      setTimeout(() => {
        scrollToElement('contact-form', 80, 'smooth');
        // Очищаем состояние
        navigate(location.pathname, { replace: true, state: {} });
      }, 500);
    }
  }, [location, navigate]);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decisions" element={<Decisions />} />
          <Route path="/automationpage" element={<AutomationPage />} />
          <Route path="/cSupportPage" element={<CSupportPage />} />
          <Route path="/developmentPage" element={<DevelopmentPage />} />
          <Route path="/dataProcessing" element={<DataProcessing />} />
          <Route path="/profitEs" element={<ProfitEs />} />
          <Route path="/profitLs" element={<ProfitLs />} />
          <Route path="/profitMo" element={<ProfitMo />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/partnersPage" element={<PartnersPage />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* FAB отображается на всех страницах */}
      <ScrollToContactFab onContactClick={handleContactClick} showAfter={100} />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let logoTimer: ReturnType<typeof setTimeout> | null = null;

    const initializeApp = async () => {
      try {
        const hasVisitedBefore = localStorage.getItem('app_has_visited');
        const isFirstVisit = !hasVisitedBefore;

        const loadPromises = [
          new Promise(resolve => setTimeout(resolve, 1200)),
          waitForImages({
            root: document.getElementById('root') ?? document,
            additionalUrls: statsSectionCertificateUrls
          })
        ];

        await Promise.all(loadPromises);

        if (!isMounted) {
          return;
        }

        if (isFirstVisit) {
          localStorage.setItem('app_has_visited', 'true');
        }

        setIsLoading(false);

        const logoDuration = isFirstVisit ? 3000 : 1000;
        logoTimer = setTimeout(() => {
          if (isMounted) {
            setShowLogo(false);
          }
        }, logoDuration);

      } catch (error) {
        console.error('Error during app initialization:', error);
        if (isMounted) {
          setIsLoading(false);
          setShowLogo(false);
        }
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
      if (logoTimer) {
        clearTimeout(logoTimer);
      }
    };
  }, []);

  const shouldShowLoader = isLoading || showLogo;

  // Обработка якоря после загрузки страницы
  useEffect(() => {
    if (!shouldShowLoader && window.location.hash === '#contact-form') {
      setTimeout(() => {
        scrollToElement('contact-form', 80, 'smooth');
      }, 500);
    }
  }, [shouldShowLoader]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router />
          <CookieBanner canShow={!shouldShowLoader} />
          <LoadingScreen isLoading={shouldShowLoader} />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
