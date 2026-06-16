import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import HexagonServices from "@/components/HexagonServices";
import { useEffect } from "react";

export default function CSupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRefs = {
    services: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    comparison: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
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
            badgeText="1С сопровождение"
            title="Превращаем вашу 1С в конкурентное преимущество"
            description="Мы обеспечиваем стабильность и надежность работы ИТ-систем, а также оказываем поддержку на всех этапах использования 1С системы"
            showBackButton={true}
            backButtonText="Назад к главной"
            onLearnMore={() => console.log('Детали IT-решений')}
            titleSize="xl"
            alignment="left"
            minHeight="lg"
          />
          
    

        {/* Hexagon Services */}
        <section ref={sectionRefs.services} className="">
          <HexagonServices />
        </section>
      </main>

      <Footer />
    </div>
  );
}