import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DirectionsSection from '@/components/DirectionsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const sectionRefs = {
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

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Header onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onLearnMore={handleLearnMore} />
        
        <div ref={sectionRefs.about}>
          <AboutSection />
        </div>
        
        <div ref={sectionRefs.services}>
          <ServicesSection />
        </div>
        
        <div ref={sectionRefs.directions}>
          <DirectionsSection />
        </div>
        
        <div ref={sectionRefs.contacts}>
          <ContactsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}