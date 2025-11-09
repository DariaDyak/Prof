import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@assets/generated_images/logo.png';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const navigationItems = [
    { label: 'Главная', id: 'home' },
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Направления', id: 'directions' },
    { label: 'Контакты', id: 'contacts' }
  ];

  // Улучшенная функция для плавного скролла
  const smoothScrollTo = (element: HTMLElement, offset: number = 0) => {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const scrollPosition = absoluteElementTop - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id: string) => {
    setActiveId(id);
    
    // Небольшая задержка для гарантии обновления состояния
    setTimeout(() => {
      if (id === 'home') {
        // Плавный скролл к верху страницы
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          
          // Добавляем дополнительный отступ для лучшего визуального восприятия
          const offset = headerHeight;
          smoothScrollTo(element, offset);
        } else {
          console.warn(`Элемент с id "${id}" не найден. Проверьте наличие секций на странице.`);
        }
      }
    }, 50);
    
    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  // Обновляем активный раздел при скролле
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Небольшой отступ для активации
      
      let currentActiveId: string | null = 'home'; // По умолчанию home
      
      // Проверяем все секции кроме home
      for (const item of [...navigationItems].filter(item => item.id !== 'home')) {
        const element = document.getElementById(item.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          // Если мы прокрутили дальше начала секции, считаем её активной
          if (scrollPosition >= elementTop - 100) {
            currentActiveId = item.id;
          }
        }
      }
      
      // Если мы в самом верху страницы - активна home
      if (scrollPosition < 100) {
        currentActiveId = 'home';
      }
      
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    // Вызываем сразу для установки начального состояния
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  return (
    <header className="sticky top-0 z-50 bg-card/85 backdrop-blur-md border-b supports-backdrop-blur:bg-card/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleNavClick('home')}
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
              const isActive = activeId === item.id;
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
                  {/* Подчеркивание для активного элемента */}
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
                const isActive = activeId === item.id;
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