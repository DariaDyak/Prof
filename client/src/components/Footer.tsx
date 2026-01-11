import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@assets/generated_images/logo.png";
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock,
} from "lucide-react";

export default function Footer() {
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
        name: "О нас",
        href: "/AboutUsPage",
        type: "anchor"
      },
      {
        name: "Услуги",
        href: "services",
        type: "anchor"
      },
      {
        name: "Направления",
        href: "directions",
        type: "anchor"
      },
      {
        name: "Кейсы",
        href: "cases",
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
    <footer className="bg-card border-t relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/10 dark:from-blue-950/10 dark:to-purple-950/5 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Prof it Logo"
                    className="w-12 h-12 lg:w-12 lg:h-12 object-contain"
                  />
                  <div className="absolute -inset-1" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ПРОФ ИТ
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                <span className="font-semibold text-foreground">ПРОФ ИТ</span> -
                современная IT-компания, создающая инновационные решения для цифровой
                трансформации бизнеса.
              </p>
            </div>

            {/* Две колонки для мобильных и планшетов */}
            <div className="grid grid-cols-2 gap-6 lg:col-span-2">
              {/* Services */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-4 pb-2 border-b border-border/50">
                    Услуги
                  </h3>
                  <ul className="space-y-3">
                    {links.services.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleNavigation(link)}
                          className="group flex items-center gap-2 focus:outline-none focus:ring-0 focus:ring-offset-0 text-muted-foreground hover:text-foreground transition-all duration-300 px-2 py-1 rounded-md -ml-2 w-full text-left"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-4 pb-2 border-b border-border/50">
                    Компания
                  </h3>
                  <ul className="space-y-3">
                    {links.company.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleNavigation(link)}
                          className="group flex items-center gap-2 focus:outline-none focus:ring-0 focus:ring-offset-0 text-muted-foreground hover:text-foreground transition-all duration-300 px-2 py-1 rounded-md -ml-2 w-full text-left"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
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

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-center sm:text-left">
                © 2025 ООО "ПРОФ ИТ". Все права защищены.
              </span>
              <div className="hidden sm:block w-px h-4 bg-border/50" />
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
                  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:text-blue-600 
                  group
                  text-muted-foreground hover:text-blue-600
                  inline-block cursor-pointer
                `}
                data-testid="privacy-policy-link"
              >
                <span className="relative inline-block">
                  Политика конфиденциальности
                  <div className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full
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
                bg-blue-500/20 border border-blue-800/30 
                text-blue-600 dark:text-blue-400 font-medium
                backdrop-blur-sm
                group
                hover:text-blue-600
                px-4 py-2 sm:px-6 sm:py-3
                text-sm sm:text-base
                hover:border-blue-400 hover:bg-blue-500/30
                focus:outline-none focus:ring-0 focus:ring-offset-0
                transition-all duration-300"
            >
              {/* Бегущий луч */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />

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