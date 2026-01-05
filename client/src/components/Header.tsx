import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '@assets/generated_images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import logoLight from '@assets/generated_images/logo_light.png';
import logoDark from '@assets/generated_images/logo_dark.png';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  const navigationItems = [
    { label: 'Главная', id: 'home' },
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Направления', id: 'directions' },
    { label: 'Кейсы', id: 'cases' },
    { label: 'Контакты', id: 'contacts' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Функция переключения темы
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Функция для получения высоты header
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
      // Сохраняем секцию для скролла
      sessionStorage.setItem('scrollToSection', id);
      // Сохраняем флаг, что нужно выполнить скролл сразу после загрузки
      sessionStorage.setItem('shouldScrollImmediately', 'true');
      // Переходим на главную
      navigate('/');
    } else {
      // На главной странице
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Небольшая задержка для гарантии что DOM обновлен
        setTimeout(() => {
          scrollToElement(id);
        }, 50);
      }
    }

    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  // Обработка скролла после перехода на главную страницу
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
          // Если уже на главной, просто скроллим
          setTimeout(() => scrollToElement(hash), 100);
        } else {
          // Иначе переходим на главную с хэшем
          navigate(`/#${hash}`);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Проверяем начальный хэш
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && navigationItems.some(item => item.id === initialHash)) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.pathname, navigate, navigationItems]);

  // Обновляем активный раздел при скролле
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveId(null);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = getHeaderHeight();

      let currentActiveId: string | null = 'home';

      for (const item of navigationItems.filter(item => item.id !== 'home')) {
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

  return (
    <header
  ref={headerRef}
  className="sticky top-0 z-50 bg-background/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/20"
>
  <div className="container mx-auto px-4 lg:px-8">
    <div className="flex items-center justify-between">
      {/* Логотип */}
      <div
        className="flex items-center space-x-3 cursor-pointer focus:outline-none group"
        onClick={() => handleNavClick('home')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
      >
        <div className="relative">
          {/* Логотип для светлой темы */}
          <img
            src={logoLight}
            alt="Profit Logo"
            className={`w-20 h-20 lg:w-24 lg:h-24 object-contain transition-all duration-300 ${
              theme === 'light' ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />

          {/* Логотип для темной темы */}
          <img
            src={logoDark}
            alt="Profit Logo"
            className={`w-20 h-20 lg:w-24 lg:h-24 object-contain transition-all duration-300 ${
              theme === 'dark' ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-6">
        {/* Навигация */}
        <nav className="flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = activeId === item.id && location.pathname === '/';
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  text-sm lg:text-base
                  relative px-2 py-3
                  transition-all duration-300 ease-out
                  font-medium
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
                  dark:group-hover:bg-beige-light
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

        {/* Кнопка смены темы */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 p-0 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-all duration-300 focus:ring-0"
          aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
          type="button"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4 transition-all duration-300 hover:scale-110 text-brown-dark" />
          ) : (
            <Sun className="h-4 w-4 transition-all duration-300 hover:scale-110 text-beige-light" />
          )}
        </Button>
      </div>

      <div className="flex items-center space-x-2 lg:hidden">
        {/* Кнопка смены темы в мобильной версии */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 p-0 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-colors focus:ring-0"
          aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
          type="button"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4 text-brown-dark" />
          ) : (
            <Sun className="h-4 w-4 text-beige-light" />
          )}
        </Button>

        {/* Кнопка мобильного меню */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-beige-light/10 dark:hover:bg-tan/20 transition-colors focus:ring-0 focus:outline-none"
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
      <div className="lg:hidden animate-in slide-in-from-top duration-300">
        <nav className="flex flex-col space-y-1 p-4">
          {navigationItems.map((item) => {
            const isActive = activeId === item.id && location.pathname === '/';
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  text-left px-4 py-3 rounded-lg
                  transition-all duration-300 ease-out
                  font-medium
                  focus:outline-none focus:ring-0
                  backdrop-blur-sm
                  ${isActive
                    ? 'text-brown-dark dark:text-beige-light font-bold border-l-4 border-brown dark:border-tan'
                    : 'text-brown dark:text-tan hover:text-brown-dark dark:hover:text-beige-light hover:bg-white/15 dark:hover:bg-black/15 border-l-4 border-transparent hover:border-tan dark:hover:border-brown'
                  }
                `}
                data-testid={`nav-mobile-${item.id}`}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    )}
  </div>
</header>);}