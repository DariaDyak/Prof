import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@assets/generated_images/Modern_IT_office_workspace_05df3790.png';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    onLearnMore?.();
  };

  const handleWatchDemo = () => {
    console.log('Watch demo button clicked');
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern IT office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Инновационные IT-решения для вашего бизнеса
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Мы создаем современные веб-приложения, мобильные решения и облачные сервисы, 
            которые помогают компаниям достигать новых высот в цифровую эпоху.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={handleLearnMore}
              className="text-lg px-8 py-6"
              data-testid="button-learn-more"
            >
              Узнать подробнее
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWatchDemo}
              className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-primary/20"
              data-testid="button-watch-demo"
            >
              <Play className="mr-2 h-5 w-5" />
              Смотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}