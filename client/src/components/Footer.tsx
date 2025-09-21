import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Send
} from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = {
    services: [
      { name: 'Веб-разработка', href: '#' },
      { name: 'Мобильные приложения', href: '#' },
      { name: 'Облачные решения', href: '#' },
      { name: 'Аналитика данных', href: '#' }
    ],
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Наша команда', href: '#' },
      { name: 'Карьера', href: '#' },
      { name: 'Блог', href: '#' }
    ],
    support: [
      { name: 'Техподдержка', href: '#' },
      { name: 'Документация', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Обучение', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">TC</span>
                </div>
                <span className="text-xl font-bold text-foreground">TechCorp</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Ведущая IT-компания, создающая инновационные решения для цифровой трансформации бизнеса. 
                Мы помогаем компаниям достигать новых высот с помощью современных технологий.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>г. Москва, ул. Тверская, д. 15</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@techcorp.ru</span>
                </div>
              </div>

              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="hover-elevate"
                    onClick={() => console.log(`${social.label} clicked`)}
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Услуги</h3>
              <ul className="space-y-2">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md -ml-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Компания</h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md -ml-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Новости</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Подпишитесь на наши новости и получайте обновления о новых технологиях
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-newsletter"
                />
                <Button type="submit" className="w-full" size="sm" data-testid="button-subscribe">
                  <Send className="mr-2 h-3 w-3" />
                  Подписаться
                </Button>
              </form>

              <div className="mt-4 space-y-2">
                <Badge variant="secondary" className="text-xs">
                  🎯 Эксклюзивные материалы
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  📊 Аналитика рынка IT
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 TechCorp. Все права защищены.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToTop}
            className="hover-elevate"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Наверх
          </Button>
        </div>
      </div>
    </footer>
  );
}