import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@assets/generated_images/Group 4.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { NoOutlineButton } from "@/components/NoOutlineButton";
import { useState, useEffect, useRef } from 'react';

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock,
} from "lucide-react";

export default function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (link: { href: string; type?: string }) => {
    if (link.href.startsWith('/')) {
      navigate(link.href);
    } else if (link.type === 'anchor') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToElement(link.href);
        }, 100);
      } else {
        scrollToElement(link.href);
      }
    }
  };

  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === '/privacy-policy';

  const links = {
    services: [
      {
        name: "Разработка IT-решений",
        href: "/Decisions",
        type: "page"
      },
      {
        name: "Автоматизация бизнес-процессов",
        href: "/AutomationPage",
        type: "page"
      },
      {
        name: "1С сопровождение",
        href: "/CSupportPage",
        type: "page"
      },
      {
        name: "Разработка ПО",
        href: "/DevelopmentPage",
        type: "page"
      },
    ],
    company: [
      {
        name: "Главная",
        href: "about",
        type: "anchor"
      },
      {
        name: "Раскрытие информации",
        href: "/aboutUsPage",
        type: "anchor"
      },
      {
        name: "Услуги",
        href: "services",
        type: "anchor"
      },
      {
        name: "Проекты",
        href: "cases",
        type: "anchor"
      },
      {
        name: "Партнеры",
        href: "partners",
        type: "anchor"
      },
      {
        name: "Контакты",
        href: "contacts",
        type: "anchor"
      },
    ]
  };

  return (
    <footer className="dark:bg-[#1E1915] bg-[#1E1915] text-beige border-brown/30 relative overflow-hidden">
      {/* Декоративный фон - убрана темная тема */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown/20 to-brown-dark/30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                 <div className="relative flex items-center h-full">
          {/* Текстовый логотип */}
          <div className="relative">
            {/* Текст для светлой темы */}
            <span
              className={`font-bold text-2xl lg:text-4xl transition-all duration-300 flex items-center h-full ${
                theme === 'light'
                  ? 'opacity-100 text-beige-light'
                  : 'opacity-0 absolute'
              }`}
            >
              ПРОФ ИТ
            </span>

            
          </div>
              </div>
</div>
              <p className="text-beige/80 leading-relaxed text-base">
                <span className="font-semibold text-beige">ПРОФ ИТ</span> -
                современная IT-компания, создающая инновационные решения для цифровой
                трансформации бизнеса
              </p>
            </div>

            {/* Две колонки для мобильных и планшетов */}
            <div className="grid grid-cols-2 gap-6 lg:col-span-2">
              {/* Services */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-beige text-lg mb-4 pb-2 ">
                    Услуги
                  </h3>
                  <ul className="space-y-3">
                    {links.services.map((link) => (
                      <li key={link.name}>
                        <NoOutlineButton
                          onClick={() => handleNavigation(link)}
                          className="group flex items-center gap-2 text-beige/70 hover:text-beige transition-all duration-300 px-2 py-1 rounded-md -ml-2 w-full text-left"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-beige opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                        </NoOutlineButton>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-beige text-lg mb-4 pb-2">
                    Компания
                  </h3>
                  <ul className="space-y-3">
                    {links.company.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleNavigation(link)}
                          className="group flex items-center gap-2 text-beige/70 hover:text-beige transition-all duration-300 px-2 py-1 rounded-md -ml-2 w-full text-left outline-none focus:outline-none focus-visible:outline-none"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-beige opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель - убраны темные стили */}
        <Separator className="bg-beige/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-beige/70 order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-center sm:text-left">
                © 2025 ООО "ПРОФ ИТ". Все права защищены.
              </span>
              <div className="hidden sm:block w-px h-4 bg-beige/20" />
              <button
                onClick={() => {
                  if (location.pathname === '/dataProcessing') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate('/dataProcessing');
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className={`
                  relative py-2
                  transition-all duration-300 ease-out
                  font-base
                  group
                  text-beige/70 hover:text-beige
                  inline-block cursor-pointer
                  outline-none focus:outline-none focus-visible:outline-none
                  focus:ring-0 focus:ring-offset-0 focus:outline-none
                `}
                data-testid="privacy-policy-link"
              >
                <span className="relative inline-block">
                  Политика конфиденциальности
                  <div className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-beige rounded-full
                    transition-all duration-300 ease-out
                    opacity-0 transform scale-0 group-hover:opacity-100 group-hover:transform group-hover:scale-100
                  `} />
                </span>
              </button>
            </div>
          </div>

          <div className="order-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="relative overflow-hidden inline-flex items-center gap-2 rounded-full 
                bg-beige/20 border border-beige/30 dark:border dark:border-beige/30 
                text-beige font-medium
                backdrop-blur-sm
                group
                hover:text-beige
                px-4 py-2 sm:px-6 sm:py-3
                text-sm sm:text-base
                hover:border-beige/50 hover:bg-beige/30
                transition-all duration-300
                focus:ring-0 focus:ring-offset-0 focus:outline-none"
            >
              {/* Бегущий луч */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-beige/20 to-transparent" />

              <span>
                Наверх
              </span>
              <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}