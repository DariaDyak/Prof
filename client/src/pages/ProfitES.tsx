// pages/ProfitEs.tsx
import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import ProfitEsInfo from "@/components/ProfitEsInfo";

export default function ProfitEs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    directions: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-Montserrat">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Header onNavigate={scrollToSection} />

    
      
      <ProfitEsInfo />

      <Footer />
    </div>
  );
}