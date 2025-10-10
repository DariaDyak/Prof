import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import logo from "@assets/generated_images/logo.png";

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

  const links = {
    services: [
      { name: "Разработка IT-решений", href: "#" },
      { name: "Автоматизация бизнес-процессов", href: "#" },
      { name: "1С сопровождение", href: "#" },
      { name: "Разработка ПО", href: "#" },
    ],
    company: [
      { name: "О компании", href: "#about" },
      { name: "Услуги", href: "#" },
      { name: "Направления", href: "#" },
      { name: "Контакты", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/10 dark:from-blue-950/10 dark:to-purple-950/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Prof it Logo"
                    className="w-10 h-10 object-cover rounded-lg shadow-sm"
                  />
                  <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-sm" />
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

              {/* Контактная информация */}
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">Адрес</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        г. Краснодар, ул. Рашпилевская, д. 244, этаж 3
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">Режим работы</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Пн-Пт: 9:00-18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">Телефон</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        +7 (939) 780-83-94
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        info@it4prof.ru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="px-20 space-y-6">
              <div>
                <h3 className="font-bold text-foreground text-lg mb-4 pb-2 border-b border-border/50">
                  Услуги
                </h3>
                <ul className="space-y-3">
                  {links.services.map((link, index) => (
                    <li key={link.name}>
  <a
    href={link.href}
    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 px-2 py-1 rounded-md -ml-2"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
  </a>
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
  <a
    href={link.href}
    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 px-2 py-1 rounded-md -ml-2"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
  </a>
</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <span className="text-center sm:text-left">
                © 2025 ООО "ПРОФ ИТ". Все права защищены.
              </span>
              <div className="hidden sm:block w-px h-4 bg-border/50" />
              <a 
                href="#" 
                className="hover:text-foreground transition-colors duration-300 hover:underline decoration-blue-400"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="order-1 lg:order-2 hover-elevate bg-background/50 backdrop-blur-sm border-border/50 hover:border-blue-300 transition-all duration-300 group"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            Наверх
          </Button>
        </div>
      </div>
    </footer>
  );
}