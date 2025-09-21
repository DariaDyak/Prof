import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Car, 
  Gamepad2,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function DirectionsSection() {
  const directions = [
    {
      icon: Building2,
      title: 'Корпоративные решения',
      description: 'ERP системы, CRM, системы документооборота и автоматизации бизнес-процессов для крупных и средних предприятий.',
      technologies: ['SAP', 'Microsoft Dynamics', '1C', 'Custom ERP'],
      projects: '25+ проектов'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Интернет-магазины, маркетплейсы, системы онлайн-платежей и интеграции с системами учета.',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom'],
      projects: '40+ проектов'
    },
    {
      icon: GraduationCap,
      title: 'Образование',
      description: 'Платформы дистанционного обучения, LMS системы, образовательные мобильные приложения.',
      technologies: ['Moodle', 'Canvas', 'Custom LMS', 'Mobile Apps'],
      projects: '15+ проектов'
    },
    {
      icon: Heart,
      title: 'Здравоохранение',
      description: 'Медицинские информационные системы, телемедицина, системы записи к врачам.',
      technologies: ['HL7 FHIR', 'DICOM', 'Telemedicine', 'EMR'],
      projects: '10+ проектов'
    },
    {
      icon: Car,
      title: 'Транспорт и логистика',
      description: 'Системы управления транспортом, логистические платформы, GPS-мониторинг.',
      technologies: ['GPS Tracking', 'Route Optimization', 'Fleet Management'],
      projects: '20+ проектов'
    },
    {
      icon: TrendingUp,
      title: 'Финтех',
      description: 'Банковские системы, платежные сервисы, инвестиционные платформы, криптовалютные решения.',
      technologies: ['Blockchain', 'Payment Gateway', 'Trading Systems'],
      projects: '12+ проектов'
    },
    {
      icon: Gamepad2,
      title: 'Развлечения',
      description: 'Игровые платформы, стриминговые сервисы, социальные сети и мобильные игры.',
      technologies: ['Unity', 'Unreal Engine', 'WebRTC', 'Social APIs'],
      projects: '8+ проектов'
    },
    {
      icon: Shield,
      title: 'Кибербезопасность',
      description: 'Системы защиты информации, мониторинг безопасности, аудит и тестирование на проникновение.',
      technologies: ['SIEM', 'Penetration Testing', 'Compliance', 'Monitoring'],
      projects: '18+ проектов'
    }
  ];

  const handleDirectionClick = (title: string) => {
    console.log(`Direction ${title} clicked`);
  };

  return (
    <section id="directions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Направления деятельности
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы работаем с различными отраслями и имеем глубокую экспертизу 
            в создании специализированных решений для каждой сферы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction, index) => (
            <Card 
              key={index} 
              className="group hover-elevate transition-all duration-300 cursor-pointer h-full"
              onClick={() => handleDirectionClick(direction.title)}
              data-testid={`card-direction-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <direction.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {direction.projects}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {direction.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {direction.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-xs text-foreground">Технологии:</h4>
                  <div className="flex flex-wrap gap-1">
                    {direction.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Не нашли свою отрасль?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы адаптируемся под любые требования и готовы разработать 
              индивидуальное решение для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                💡 Индивидуальный подход
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🚀 Быстрая разработка MVP
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🔧 Полная техническая поддержка
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}