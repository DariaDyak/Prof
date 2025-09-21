import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, Zap } from 'lucide-react';
import teamImage from '@assets/generated_images/Professional_development_team_7938c656.png';

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Наши специалисты имеют многолетний опыт в IT-индустрии'
    },
    {
      icon: Award,
      title: 'Высокое качество',
      description: 'Мы используем современные технологии и лучшие практики'
    },
    {
      icon: Target,
      title: 'Точные решения',
      description: 'Каждый проект разрабатывается под конкретные задачи клиента'
    },
    {
      icon: Zap,
      title: 'Быстрая разработка',
      description: 'Эффективные процессы позволяют сократить время реализации'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              О нашей компании
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              TechCorp — ведущая IT-компания, специализирующаяся на разработке 
              инновационных программных решений. Мы помогаем бизнесу адаптироваться 
              к цифровым изменениям и достигать новых высот благодаря технологиям.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наша команда состоит из опытных разработчиков, дизайнеров и аналитиков, 
              которые создают решения, превосходящие ожидания клиентов.
            </p>

            {/* Technology Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Технологии:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="hover-elevate transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Наша команда разработчиков"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}