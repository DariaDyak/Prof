import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItDecisions from "@/components/ItDecisions";
import AutomationSection from "@/components/ProcessAutomation/CostOptimization";
import { useEffect } from "react";
import AutomationBenefits from "@/components/ProcessAutomation/AutomationBenefits ";


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
    <div className="min-h-screen bg-background text-foreground font-Montserrat">
      <Header onNavigate={scrollToSection} />

      <main> 
        <ItDecisions 
          badgeText="Автоматизация процессов"
          title="Профессиональная автоматизация процессов"
          description="Анализируем бизнес-процессы и создаем индивидуальные решения для их автоматизации с использованием современных технологий"
          showBackButton={true}
          backgroundImage="U1"
          backButtonText="Назад к главной"
          onLearnMore={() => console.log('Детали IT-решений')}
          titleSize="lg"
          alignment="left"
          minHeight="lg"
        />
        <AutomationBenefits/>
        <AutomationSection/>
      </main>

      <Footer />
    </div>
  );
}