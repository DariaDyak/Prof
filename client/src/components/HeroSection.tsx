import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import heroImage from '@assets/generated_images/background.png';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    onLearnMore?.();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="IT Solutions Background"
          className="w-full h-full object-cover scale-80 group-hover:scale-100 transition-transform duration-3000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-indigo-500/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Центрированный контент */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge с анимацией появления */}
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-blue-500/10 border border-blue-500/20 
            text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 
            backdrop-blur-sm
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            <Shield className="h-4 w-4 transition-transform duration-500 delay-300 ${isVisible ? 'scale-100' : 'scale-50'}" />
            <span className="transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}">
              Ваш надежный ИТ-партнер
            </span>
          </div>

          {/* Main Heading с последовательной анимацией */}
          <div className="mb-8">
            <h1 className={`
              font-Montserrat text-4xl sm:text-5xl lg:text-6xl 
              font-bold text-foreground mb-4 leading-tight
              transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              <span className="transition-all duration-800 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}">
                ООО
              </span>
              {' '}
              <span className={`
                
                transition-all duration-800 delay-400
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                «ПРОФ ИТ»
              </span>
            </h1>
            
            <div className={`
              flex items-center justify-center gap-3 mb-4
              transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'}" />
              <span className="font-Montserrat text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/80 transition-all duration-800 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}">
                Эффективность через автоматизацию
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-border to-transparent transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'}" />
            </div>
          </div>

          {/* Description с анимацией */}
          <p className={`
            font-Montserrat text-lg sm:text-xl lg:text-xl 
            text-muted-foreground mb-12 leading-relaxed 
            max-w-3xl mx-auto
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
            <span className="transition-all duration-700 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}">
              Комплексные{' '}
              <span className="text-foreground font-semibold transition-all duration-500 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}">
                ИТ-решения
              </span>
              {' '}для цифровой трансформации вашего бизнеса.{' '}
            </span>
            <span className="transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}">
              От автоматизации процессов до полного цикла разработки — повышаем эффективность{' '}
            </span>
            <span className="transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}">
              и создаем конкурентные преимущества.
            </span>
          </p>

           {/* CTA Button */}
          <div className="flex justify-center">
            <Button
  onClick={handleLearnMore}
  className="
    relative
    overflow-hidden
    inline-flex items-center gap-2 px-4 py-2 rounded-full
    bg-gradient-to-r from-blue-800 to-blue-900
    text-white
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-xl
    whitespace-nowrap
    group
    outline-none focus:outline-none
  "
>
  {/* Бегущий луч */}
  <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
  
  <span className="relative z-10 font-medium transition-all duration-300 delay-1400 ${isVisible ? 'opacity-100' : 'opacity-0'}">
    О компании
  </span>
  <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 delay-1400 ${isVisible ? 'opacity-100' : 'opacity-0'}" />
</Button>
          </div>
        </div>
      </div>
    </section>
  );
}