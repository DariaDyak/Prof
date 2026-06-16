import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfitLSInfo from "@/components/ProfitLsInfo";

export default function ProfitLs() {
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
      <ProfitLSInfo />
      <Footer />
    </div>
  );
}