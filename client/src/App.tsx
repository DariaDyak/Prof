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


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decisions" element={<Decisions />} />
      <Route path="/automationpage" element={<AutomationPage />} />
      <Route path="/cSupportPage" element={<СSupportPage />} />
      <Route path="/developmentPage" element={<DevelopmentPage />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
