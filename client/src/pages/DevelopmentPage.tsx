import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import DevelopmentShowcase from "@/components/DevelopmentShowcase";

import DevelopmentProcess from "@/components/DevelopmentProcess";
import { useEffect } from "react";

export default function DevelopmentPage() {
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

      <main>
        <ItDecisions 
          badgeText="Разработка ПО"
          title="Индивидуальная разработка программного обеспечения"
          description="Команда опытных разработчиков создает решения, которые автоматизируют бизнес-процессы и повышают эффективность работы"
          showBackButton={true}
          backgroundImage="U3"
          backButtonText="Назад к главной"
          onLearnMore={() => console.log('Детали разработки')}
          titleSize="xl"
          alignment="left"
          minHeight="lg"
        />
        
        <DevelopmentShowcase />
        
        <DevelopmentProcess />
      </main>

      <Footer />
    </div>
  );
}