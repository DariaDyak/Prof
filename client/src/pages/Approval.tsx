import { useRef } from 'react';
import Header from '@/components/Header';
import TextApproval from '@/components/TextApproval';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Approval() {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    directions: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null)
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    scrollToSection('home');
  };

  return (
    <div className="min-h-screen bg-beige-light text-foreground font-Montserrat">
      {/* Fixed Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
      </div>

      <Header onNavigate={scrollToSection} />
      
      <main> {/* Добавляем отступ для фиксированного header */}
        <div ref={sectionRefs.home}>
          <TextApproval />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}