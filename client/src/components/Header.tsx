import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@assets/generated_images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  const navigationItems = [
    { label: 'Главная', id: 'home' },
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Направления', id: 'directions' },
    { label: 'Контакты', id: 'contacts' }
  ];

  // Функция для получения высоты header
  const getHeaderHeight = () => {
    if (headerRef.current) {
      return headerRef.current.offsetHeight;
    }
    return 80; // Значение по умолчанию
  };

  // Улучшенная функция скролла
  const scrollToElement = (sectionId: string, retries = 3) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = getHeaderHeight();
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollPosition = absoluteElementTop - headerHeight;

      console.log(`Scrolling to ${sectionId}:`, {
        headerHeight,
        elementTop: elementRect.top,
        absoluteElementTop,
        scrollPosition,
        currentScroll: window.pageYOffset
      });

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    } else if (retries > 0) {
      // Если элемент не найден, пробуем еще раз через задержку
      setTimeout(() => {
        scrollToElement(sectionId, retries - 1);
      }, 100);
    } else {
      console.warn(`Элемент с id "${sectionId}" не найден`);
    }
  };

  const handleNavClick = (id: string) => {
    setActiveId(id);
    
    if (location.pathname !== '/') {
      // Переходим на главную и сохраняем информацию о скролле
      navigate('/');
      sessionStorage.setItem('scrollToSection', id);
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
    if (location.pathname === '/') {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');
      if (sectionToScroll) {
        const timer = setTimeout(() => {
          if (sectionToScroll === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            scrollToElement(sectionToScroll);
          }
          sessionStorage.removeItem('scrollToSection');
        }, 800); // Увеличиваем задержку
        
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

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
          
          // Проверяем, видна ли секция в области просмотра с учетом header
          if (scrollPosition + headerHeight >= elementTop - 50) {
            currentActiveId = item.id;
          }
        }
      }
      
      // Если в самом верху - home
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
      className="sticky top-0 z-50 bg-card/85 backdrop-blur-md border-b supports-backdrop-blur:bg-card/60"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <img 
              src={logo} 
              alt="Prof it Logo" 
              className="w-8 h-8 lg:w-10 lg:h-10 object-cover transition-transform hover:scale-105" 
            />
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ПРОФ ИТ
            </span>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeId === item.id && location.pathname === '/';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative px-1 py-2
                    transition-all duration-300 ease-out
                    font-medium
                    focus:outline-none focus:text-blue-600
                    group
                    ${isActive 
                      ? 'text-blue-600' 
                      : 'text-muted-foreground hover:text-blue-600'
                    }
                  `}
                  data-testid={`nav-${item.id}`}
                  type="button"
                >
                  {item.label}
                  <div className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full
                    transition-all duration-300 ease-out
                    ${isActive 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-0 group-hover:opacity-100 group-hover:transform group-hover:scale-100'
                    }
                  `} />
                </button>
              );
            })}
          </nav>

          {/* Кнопка мобильного меню */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-300">
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
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      transform hover:translate-x-1
                      ${isActive 
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                        : 'text-muted-foreground hover:text-blue-600 hover:bg-gray-50 border-l-4 border-transparent'
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
    </header>
  );
}