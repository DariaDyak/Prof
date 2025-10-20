import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import AutomationSection from "@/components/AutomationSection";
import { useEffect } from "react";
import AutomationBenefits from "@/components/AutomationBenefits ";

export default function AutomationPage() {
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Header onNavigate={scrollToSection} />

      <main className="space-y-20"> {/* Добавлено равномерное расстояние */}
        {/* ItDecisions с кастомным контентом для страницы решений */}
        <ItDecisions 
          badgeText="Автоматизация процессов"
          title="Профессиональная автоматизация процессов"
          description="Анализируем бизнес-процессы и создаем индивидуальные решения для их автоматизации с использованием современных технологий"
          showBackButton={true}
          backButtonText="Назад к главной"
          onLearnMore={() => console.log('Детали IT-решений')}
          titleSize="xl"
          alignment="left"
          minHeight="lg"
        />
        
        <AutomationSection/>
        <AutomationBenefits/>
      
      </main>

      <Footer />
    </div>
  );
}