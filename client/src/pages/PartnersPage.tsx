import { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import PartnersSection from '@/components/Home/Partners';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    directions: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

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
      <Header onNavigate={scrollToSection} />

      <main>
        <div ref={sectionRefs.home}>
          <PartnersSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}