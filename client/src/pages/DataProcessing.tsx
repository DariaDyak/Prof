import { useRef } from 'react';
import Header from '@/components/Header';
import TextPolicy from '@/components/TextPolicy';
import Footer from '@/components/Footer';

export default function DataProcessing() {
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
    <div className="min-h-screen bg-background text-foreground text-foreground font-Montserrat">
      <Header onNavigate={scrollToSection} />

      <main>
        <div ref={sectionRefs.home}>
          <TextPolicy />
        </div>
      </main>

      <Footer />
    </div>
  );
}