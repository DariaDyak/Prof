import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  const navigationItems = [
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Проекты', id: 'cases' },
    { label: 'Контакты', id: 'contacts' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
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
  }, [location.pathname]);

  useEffect(() => {
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
  }, [location.pathname, navigate, navigationItems]);

  useEffect(() => {
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
  }, [navigationItems, location.pathname]);

  // УДАЛЕНО: Все лишние элементы и кнопки темы

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
          {/* Логотип */}
          <div
            className="flex items-center cursor-pointer focus:outline-none group h-full"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <div className="relative flex items-center h-full">
              <span className="font-bold text-2xl lg:text-4xl transition-colors duration-300 text-brown-dark dark:text-beige">
                ПРОФ ИТ
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 h-full">
            {/* Навигация */}
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

            {/* Разделитель */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-tan to-transparent dark:via-beige-light/40" />

            {/* ОДНА кнопка смены темы */}
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
            {/* ОДНА кнопка смены темы в мобильной версии */}
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

            {/* Кнопка мобильного меню */}
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
          <div className="lg:hidden animate-in slide-in-from-top duration-300 fixed inset-x-0 top-20 z-40">
            <nav className="flex flex-col p-6 w-full 
              bg-beige-light
              backdrop-blur-sm backdrop-saturate-100
              supports-[backdrop-filter]:bg-beige-light/70
              
              dark:bg-[#1E1915]
              dark:backdrop-blur-xl dark:backdrop-saturate-200
              dark:supports-[backdrop-filter]:bg-brown-dark/70
              
              shadow-xl"
            >
              {/* Пункты меню */}
              <div className="flex flex-col space-y-2 mt-4">
                {navigationItems.map((item) => {
                  const isActive = activeId === item.id && location.pathname === '/';
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg
                        transition-all duration-300 ease-out
                        font-medium
                        focus:outline-none focus:ring-0
                        backdrop-blur-sm
                        ${isActive
                          ? 'text-brown-dark dark:text-beige-light font-bold bg-white/30 dark:bg-black/30 border-l-4 border-brown dark:border-beige'
                          : 'text-brown dark:text-beige hover:text-brown-dark dark:hover:text-beige-light hover:bg-white/40 dark:hover:bg-black/20 border-l-4 border-transparent hover:border-brown/30 dark:hover:border-beige/30'
                        }
                      `}
                      data-testid={`nav-mobile-${item.id}`}
                      type="button"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}