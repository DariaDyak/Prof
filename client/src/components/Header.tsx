import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "@assets/generated_images/lo.png";
import Logo2 from "@assets/generated_images/lo2.png";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean | null>(null); // Инициализируем null
  const [isMounted, setIsMounted] = useState(false); // Флаг монтирования
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  const navigationItems = [
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Проекты', id: 'cases' },
    { label: 'Контакты', id: 'contacts' }
  ];

  // Инициализация темы с учетом SSR
  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    if (!isMounted) return;

    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const getHeaderHeight = () => {
    if (headerRef.current) {
      return headerRef.current.offsetHeight;
    }
    return 80;
  };

  const scrollToElement = (sectionId: string, retries = 3) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = getHeaderHeight();
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollPosition = absoluteElementTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });

      return true;
    } else if (retries > 0) {
      setTimeout(() => {
        scrollToElement(sectionId, retries - 1);
      }, 100);
    } else {
      console.warn(`Элемент с id "${sectionId}" не найден`);
      return false;
    }
  };

  const handleNavClick = (id: string) => {
    setActiveId(id);

    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', id);
      sessionStorage.setItem('shouldScrollImmediately', 'true');
      navigate('/');
    } else {
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        setTimeout(() => {
          scrollToElement(id);
        }, 50);
      }
    }

    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMounted) return;

    const shouldScrollImmediately = sessionStorage.getItem('shouldScrollImmediately') === 'true';

    if (location.pathname === '/') {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');

      if (sectionToScroll && shouldScrollImmediately) {
        const executeScroll = () => {
          if (sectionToScroll === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const success = scrollToElement(sectionToScroll);
            if (!success) {
              setTimeout(() => scrollToElement(sectionToScroll), 300);
            }
          }
          sessionStorage.removeItem('scrollToSection');
          sessionStorage.removeItem('shouldScrollImmediately');
        };
        const timer = setTimeout(executeScroll, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navigationItems.some(item => item.id === hash)) {
        if (location.pathname === '/') {
          setTimeout(() => scrollToElement(hash), 100);
        } else {
          navigate(`/#${hash}`);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && navigationItems.some(item => item.id === initialHash)) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.pathname, navigate, navigationItems, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    if (location.pathname !== '/') {
      setActiveId(null);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = getHeaderHeight();

      let currentActiveId: string | null = 'home';

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementTop = elementRect.top + window.pageYOffset;

          if (scrollPosition + headerHeight >= elementTop - 50) {
            currentActiveId = item.id;
          }
        }
      }

      if (scrollPosition < 50) {
        currentActiveId = 'home';
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems, location.pathname, isMounted]);

  // Не рендерим до полной инициализации на клиенте
  if (!isMounted) {
    return (
      <header
        ref={headerRef}
        className="h-20 sticky top-0 z-50 
          bg-gradient-to-b from-beige-light via-beige-light/95 to-beige/90 
          backdrop-blur-lg backdrop-saturate-150
          supports-[backdrop-filter]:bg-beige-light/80
          shadow-lg"
      >
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="relative flex items-center h-full gap-3">
              <div className="relative flex items-center justify-center">
                <div className="h-10 w-32 md:h-12 bg-gray-300 animate-pulse rounded" />
              </div>
            </div>
            <div className="h-9 w-9 bg-gray-300 animate-pulse rounded" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      ref={headerRef}
      className="h-20 sticky top-0 z-50 
        bg-gradient-to-b from-beige-light via-beige-light/95 to-beige/90 
        backdrop-blur-lg backdrop-saturate-150
        supports-[backdrop-filter]:bg-beige-light/80
        
        dark:bg-gradient-to-b dark:from-brown-dark dark:via-brown-dark/95 dark:to-brown/90
        dark:backdrop-blur-lg dark:backdrop-saturate-150
        dark:supports-[backdrop-filter]:bg-brown-dark/80
        
        shadow-lg 
        transition-all duration-0"
    >
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div
            className="flex items-center cursor-pointer focus:outline-none group h-full"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <div className="relative flex items-center h-full gap-3">
              {/* Логотип компании */}
              <div className="relative flex items-center justify-center">
                <img
                  src={isDark ? Logo : Logo2}
                  alt="Логотип ПРОФ ИТ"
                  className="h-10 w-auto md:h-12 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-2xl lg:text-3xl transition-colors duration-100
                  text-brown-dark dark:text-beige">
                  ПРОФ ИТ
                </span>
              </div>

              <div className="h-8 w-px bg-gradient-to-b from-transparent via-brown/30 to-transparent dark:via-beige/30 ml-2 hidden md:block"></div>

            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 h-full">
            <nav className="flex items-center space-x-8 h-full">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id && location.pathname === '/';
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      text-sm lg:text-base
                      relative px-2
                      transition-all duration-300 ease-out
                      font-medium
                      outline-none focus:outline-none
                      flex items-center h-full
                      ${isActive
                        ? 'text-brown-dark dark:text-beige-light font-bold'
                        : 'text-brown-dark/90 dark:text-beige-light/80 hover:text-brown-dark dark:hover:text-beige-light hover:font-semibold'
                      }
                    `}
                    data-testid={`nav-${item.id}`}
                    type="button"
                  >
                    {item.label}
                    <div className={`
                      absolute bottom-0 left-1/2 w-0 h-0.5
                      bg-brown-dark
                      dark:bg-beige-light
                      transition-all duration-300 ease-out
                      transform -translate-x-1/2
                      ${isActive
                        ? 'w-full opacity-100'
                        : 'opacity-0 group-hover:w-full group-hover:opacity-100 dark:group-hover:opacity-70'
                      }
                    `} />
                  </button>
                );
              })}
            </nav>

            <div className="h-6 w-px bg-gradient-to-b from-transparent via-tan to-transparent dark:via-beige-light/40" />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 p-0 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-all duration-300 focus:ring-0 flex items-center justify-center"
              aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
              type="button"
            >
              {isDark ? (
                <Sun className="h-4 w-4 transition-all duration-300 hover:scale-110 text-beige-light" />
              ) : (
                <Moon className="h-4 w-4 transition-all duration-300 hover:scale-110 text-brown-dark" />
              )}
            </Button>
          </div>

          <div className="flex items-center space-x-2 lg:hidden h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 p-0 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-colors focus:ring-0 flex items-center justify-center"
              aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
              type="button"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-beige-light" />
              ) : (
                <Moon className="h-4 w-4 text-brown-dark" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-colors focus:ring-0 focus:outline-none flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 text-brown-dark dark:text-beige-light" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300 text-brown-dark dark:text-beige-light" />
              )}
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top  fixed inset-x-0 top-20 z-40">
            <nav className="flex flex-col p-6 w-full 
      bg-beige-light
      backdrop-blur-sm backdrop-saturate-100
      supports-[backdrop-filter]:bg-beige-light/70
      
      dark:bg-[#1E1915]
      dark:backdrop-blur-xl dark:backdrop-saturate-200
      dark:supports-[backdrop-filter]:bg-brown-dark/70
      
      shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-2">
                <div className="h-px bg-gradient-to-r from-transparent via-brown-dark/30 to-transparent dark:via-beige-light/30 my-2" />
                <div className="mb-2">
                  <button
                    onClick={() => {
                      handleNavClick('about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg
                       transition-all duration-300 ease-out
                       group"
                  >
                    <h3 className="text-base font-semibold uppercase tracking-wider 
                         text-brown-dark/80 dark:text-beige-light/80 
                         group-hover:text-brown-dark dark:group-hover:text-beige-light
                         ">
                      О компании
                    </h3>
                  </button>

                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-brown-dark/30 to-transparent dark:via-beige-light/30 my-2" />


                <div className="mb-2">
                  <button
                    onClick={() => {
                      handleNavClick('services');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg
                       transition-all duration-300 ease-out
                       group"
                  >
                    <h3 className="text-base font-semibold uppercase tracking-wider 
                         text-brown-dark/80 dark:text-beige-light/80 
                         group-hover:text-brown-dark dark:group-hover:text-beige-light
                         ">
                      Услуги
                    </h3>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/CSupportPage');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    IT-консалтинг
                  </button>
                  <button
                    onClick={() => {
                      navigate('/AutomationPage');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    Автоматизация процессов
                  </button>
                  <button
                    onClick={() => {
                      navigate('/CSupportPage');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    1С сопровождение
                  </button>
                  <button
                    onClick={() => {
                      navigate('/DevelopmentPage');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    Разработка ПО
                  </button>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-brown-dark/30 to-transparent dark:via-beige-light/30 my-2" />


                <div className="mb-2">
                  <button
                    onClick={() => {
                      handleNavClick('cases');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg
                       transition-all duration-300 ease-out
                       group"
                  >
                    <h3 className="text-base font-semibold uppercase tracking-wider 
                         text-brown-dark/80 dark:text-beige-light/80 
                         group-hover:text-brown-dark dark:group-hover:text-beige-light
                         ">
                      Проекты
                    </h3>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/ProfitEs');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    ПРОФИТ-ЭС
                  </button>
                  <button
                    onClick={() => {
                      navigate('/ProfitLs');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    ПРОФИТ-ЛС
                  </button>
                  <button
                    onClick={() => {
                      navigate('/ProfitMo');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg
                       transition-all duration-300 ease-out
                       text-brown dark:text-beige
                       hover:text-brown-dark dark:hover:text-beige-light
                       hover:bg-white/40 dark:hover:bg-black/20
                       border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30
                       ml-2"
                  >
                    ПРОФИТ-УМО
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => {
                      handleNavClick('contacts');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg
                       transition-all duration-300 ease-out
                       group"
                  >
                    <h3 className="text-base font-semibold uppercase tracking-wider 
                         text-brown-dark/80 dark:text-beige-light/80 
                         group-hover:text-brown-dark dark:group-hover:text-beige-light
                         ">
                      Контакты
                    </h3>
                  </button>

                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-brown-dark/30 to-transparent dark:via-beige-light/30 my-2" />

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}