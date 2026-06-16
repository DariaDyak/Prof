import { useRef } from 'react';
import Header from '@/components/Header';
import TextApproval from '@/components/Approval/TextApproval';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-background text-foreground text-brown-dark font-Montserrat">
      <Header onNavigate={scrollToSection} />
      
      <main> 
        <div ref={sectionRefs.home}>
          <TextApproval />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}