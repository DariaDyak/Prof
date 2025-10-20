import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
//import logo from '@assets/generated_images/logo.png';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const navigationItems = [
    { label: 'О компании', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Направления', id: 'directions' },
    { label: 'Контакты', id: 'contacts' }
  ];

  const handleNavClick = (id: string) => {
    setActiveId(id);
    console.log(`Navigation to ${id} triggered`);
    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ПРОФ ИТ</span>
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
                    px-3 py-2 
                    border-b-2 border-transparent
                    ${isActive ? 'border-current' : 'hover:border-current'}
                    transition-colors duration-300 ease-in-out
                    text-muted-foreground
                    focus:outline-none
                  `}
                  data-testid={`nav-${item.id}`}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Кнопка мобильного меню */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-2 p-4">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      text-left px-3 py-2 rounded-md
                      border-b-2 border-transparent
                      ${isActive ? 'border-current' : 'hover:border-current'}
                      transition-colors duration-300 ease-in-out
                      text-muted-foreground
                      focus:outline-none
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
