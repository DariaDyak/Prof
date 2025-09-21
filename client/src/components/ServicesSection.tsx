import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import webDevImage from '@assets/generated_images/Web_development_services_2effb669.png';
import cloudDevOpsImage from '@assets/generated_images/Cloud_DevOps_services_5bc87b1b.png';
import dataAnalyticsImage from '@assets/generated_images/Data_analytics_AI_7902747d.png';
import mobileDevImage from '@assets/generated_images/Mobile_app_development_9d2bc96c.png';

export default function ServicesSection() {
  const services = [
    {
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием передовых технологий. От корпоративных сайтов до сложных SPA.',
      image: webDevImage,
      features: ['React/Vue.js', 'Node.js/Python', 'Адаптивный дизайн', 'SEO-оптимизация'],
      price: 'от 150 000 ₽'
    },
    {
      title: 'Мобильная разработка',
      description: 'Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.',
      image: mobileDevImage,
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'UI/UX дизайн'],
      price: 'от 200 000 ₽'
    },
    {
      title: 'Облачные решения',
      description: 'Проектирование и внедрение облачной инфраструктуры, DevOps и автоматизация развертывания.',
      image: cloudDevOpsImage,
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Мониторинг'],
      price: 'от 100 000 ₽'
    },
    {
      title: 'Аналитика данных',
      description: 'Системы бизнес-аналитики, машинное обучение и обработка больших данных.',
      image: dataAnalyticsImage,
      features: ['Python/R', 'Machine Learning', 'BI Dashboard', 'Data Pipeline'],
      price: 'от 250 000 ₽'
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    console.log(`Service ${serviceName} clicked`);
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем полный спектр IT-услуг — от разработки веб-приложений 
            до внедрения облачных решений и систем аналитики данных
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-elevate transition-all duration-300 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Ключевые технологии:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => handleServiceClick(service.title)}
                  data-testid={`button-service-${index}`}
                >
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}