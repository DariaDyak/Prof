import { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function PartnersPage() {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    directions: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null)
  };

  // Прокрутка вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []); // Пустой массив зависимостей = выполняется только при монтировании

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
      
      <main>
        <div ref={sectionRefs.home}>
          <PartnersSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}