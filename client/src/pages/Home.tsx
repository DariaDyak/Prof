import { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactsSection from '@/components/ContactsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import ScrollToContactFab from '@/components/ScrollToContactFab';
import ContactFormProps from '@/components/ContactFormProps';

export default function Home() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    directions: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
    contactForm: useRef<HTMLDivElement>(null),
    cases: useRef<HTMLDivElement>(null),
    partners: useRef<HTMLDivElement>(null)
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log('Скроллим к секции:', sectionId);
    } else {
      console.log('Секция не найдена:', sectionId);
    }
  };

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  const handleContactClick = () => {
    console.log('Клик по FAB - скроллим к форме');
    scrollToSection('contactForm');
  };

  // Проверяем, что реф контактов существует
  useEffect(() => {
    console.log('Реф контактов:', sectionRefs.contacts.current);
    console.log('Реф формы:', sectionRefs.contactForm.current);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-Montserrat">
      <Header onNavigate={scrollToSection} />

      <main>
        <HeroSection onLearnMore={handleLearnMore} />

        <div ref={sectionRefs.about}>
          <AboutSection />
        </div>

        <div ref={sectionRefs.services}>
          <ServicesSection />
        </div>

        <div ref={sectionRefs.cases}>
          <StatsSection />
        </div>
        
        <div ref={sectionRefs.partners}>
          <PartnersSection />
        </div>

        <div ref={sectionRefs.contacts}>
          <ContactsSection />
        </div>

        {/* Добавляем id для формы */}
        <div 
          id="contact-form" 
          ref={sectionRefs.contactForm}
          data-contact-form="true"
        >
          <ContactFormProps />
        </div>
      </main>

      <Footer />

      {/* FAB компонент с низким порогом появления */}
      <ScrollToContactFab 
        onContactClick={handleContactClick}
        showAfter={100}
      />
    </div>
  );
}