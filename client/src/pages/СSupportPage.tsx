import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ItDecisions from "@/components/ItDecisions";
import HexagonServices from "@/components/HexagonServices";
import { useEffect } from "react";
import ModificationServicesSec from "@/components/ModificationServicesSec";
import ResultsSection from "@/components/ResultsSection";

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
    <div className="min-h-screen text-foreground font-Montserrat">
      <Header onNavigate={scrollToSection} />

      <main>
        <ItDecisions
          badgeText="1С сопровождение"
          title="Превращаем вашу 1С в конкурентное преимущество"
          description="Мы обеспечиваем стабильность и надежность работы ИТ-систем, а также оказываем поддержку на всех этапах использования 1С системы"
          showBackButton={true}
          backButtonText="Назад к главной"
          onLearnMore={() => console.log('Детали IT-решений')}
          titleSize="lg"
          alignment="left"
          minHeight="lg"
        />

        <section ref={sectionRefs.services} className="scroll-mt-20">
          <HexagonServices />
        </section>
        <ModificationServicesSec />
        <ResultsSection />
      </main>

      <Footer />
    </div>
  );
}