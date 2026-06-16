import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/HomePage";
import NotFound from "@/pages/not-found";
import Decisions from "@/pages/DecisionsPage";
import AutomationPage from "@/pages/AutomationPage";
import CSupportPage from "@/pages/CSupportPage";
import DevelopmentPage from "@/pages/DevelopmentPage";
import './index.css'
import DataProcessing from '@/pages/PdnPage';
import Approval from '@/pages/ApprovalPage';
import ProfitEs from "@/pages/ProfitESPage";
import ProfitLs from "@/pages/ProfitLSPage";
import ProfitMo from "@/pages/ProfitMOPage";
import AboutUsPage from "@/pages/AboutUsPage";
import CookieBanner from "@/components/CookieBanner";
import PartnersPage from "@/pages/PartnersPage";
import ProjectsPage from "@/pages/ProjectsPage";

import LoadingScreen from "@/components/LoadingScreen";
import { waitForImages } from "@/lib/waitForImages";
import { useState, useEffect, Suspense } from "react";
import { statsSectionCertificateUrls } from "@/components/data/statsSectionCertificates";
import ScrollToContactFab from "@/components/ScrollToContactFab";
import { scrollToElement } from "@/components/ScrollToElement";

function Router({ showFab }: { showFab: boolean }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  }, [location.pathname]);

  const handleContactClick = () => {
    if (location.pathname === '/') {
      setTimeout(() => {
        const success = scrollToElement('contact-form', 80, 'smooth');
        if (!success) console.warn('Contact form not found');
      }, 100);
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        scrollToElement('contact-form', 80, 'smooth');
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
          <Route path="/developmentPage" element={<DevelopmentPage />} />
          <Route path="/dataProcessing" element={<DataProcessing />} />
          <Route path="/profitEs" element={<ProfitEs />} />
          <Route path="/profitLs" element={<ProfitLs />} />
          <Route path="/profitMo" element={<ProfitMo />} />
          <Route path="/CSupportPage" element={<CSupportPage />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/partnersPage" element={<PartnersPage />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/projectsPage" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* FAB отображается только после завершения загрузки */}
      <ScrollToContactFab onContactClick={handleContactClick} showAfter={100} showFab={showFab} />
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

        if (!isMounted) return;

        if (isFirstVisit) localStorage.setItem('app_has_visited', 'true');

        setIsLoading(false);

        const logoDuration = isFirstVisit ? 3000 : 1000;
        logoTimer = setTimeout(() => {
          if (isMounted) setShowLogo(false);
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
      if (logoTimer) clearTimeout(logoTimer);
    };
  }, []);

  const shouldShowLoader = isLoading || showLogo;
  const showFab = !shouldShowLoader; // FAB отображается только после завершения загрузки

  // Прокрутка по якорю после завершения загрузки
  useEffect(() => {
    if (!shouldShowLoader && window.location.hash === '#contact-form') {
      setTimeout(() => scrollToElement('contact-form', 80, 'smooth'), 500);
    }
  }, [shouldShowLoader]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router showFab={showFab} />
          <CookieBanner canShow={!shouldShowLoader} />
          <LoadingScreen isLoading={shouldShowLoader} />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;