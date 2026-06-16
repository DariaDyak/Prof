import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseCard from '@/components/CaseCard';

export default function Projects() {
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

  return (
    <div className="min-h-screen bg-background text-foreground text-brown-dark font-Montserrat">
      <Header onNavigate={scrollToSection} />

      <main>
        <div ref={sectionRefs.home}>
          <CaseCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}