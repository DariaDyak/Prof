import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import ApproachSection from "@/components/ApproachSection";
import BusinessImpactSection from "@/components/BusinessImpactSection";
import { useEffect } from "react";

export default function Decisions() {
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
        {/* ItDecisions с кастомным контентом для страницы решений */}
        <ItDecisions 
          badgeText="IT-консалтинг"
          title="Трансформация бизнеса через инновационные технологии"
          description="Мы создаем масштабируемые, надежные и безопасные IT-решения, которые помогают компаниям автоматизировать процессы, снижать издержки и достигать стратегических целей"
          showBackButton={true}
          backgroundImage="U2"
          backButtonText="Назад к главной"
          onLearnMore={() => console.log('Детали IT-решений')}
          titleSize="lg"
          alignment="left"
          minHeight="lg"
        />

        <ApproachSection />
      </main>
      {/* Новый блок: Бизнес-эффект */}
        <BusinessImpactSection />

      <Footer />
    </div>
  );
}