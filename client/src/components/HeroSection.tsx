import { Button } from '@/components/ui/button';
import { Shield, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoDark from '@assets/generated_images/slide3.jpg';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [showBadge, setShowBadge] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Инициализация анимации при монтировании
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowBadge(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setShowFirstLine(true);
    }, 300);

    const timer3 = setTimeout(() => {
      setShowSecondLine(true);
    }, 500);

    const timer4 = setTimeout(() => {
      setShowDescription(true);
    }, 700);

    const timer5 = setTimeout(() => {
      setShowButton(true);
    }, 500);

    const timer6 = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const slideInAnimation = (isVisible: boolean, delay: string = '0ms') => ({
    className: `transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`,
    style: { transitionDelay: delay }
  });

  return (
    <section className="pt-12 pb-16 lg:pt-10 lg:pb-20 relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение с эффектом размытия */}
      <div className="absolute inset-0 z-0">
        <img 
          src={logoDark} 
          alt="ИТ-решения для бизнеса" 
          className="w-full h-full object-cover transform transition-transform duration-1000"
          style={{
            transform: showImage ? 'scale(1)' : 'scale(1.05)',
            filter: 'blur(8px) brightness(0.9)',
            objectPosition: 'center'
          }}
        />
        {/* Светлая тема: осветляем фон */}
        <div className="absolute inset-0 bg-gradient-to-t from-beige via-beige/85 to-beige/30 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/50 dark:hidden"></div>
        
        {/* Темная тема: затемняем фон */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/90 to-brown/85 hidden dark:block"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brown/70 hidden dark:block"></div>
        
        {/* Наложения для улучшения видимости контента */}
        <div className="absolute inset-0 bg-gradient-to-t from-beige/80 via-beige/70 to-beige/60 dark:from-brown/80 dark:via-brown/70 dark:to-brown/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/30 dark:to-brown/30"></div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">

          {/* Левая колонка - информация о компании */}
          <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">

              {/* Badge с анимацией появления сверху вниз */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-brown-dark/10 border border-brown-dark
                dark:bg-beige-light/5 dark:border-beige-light
                text-brown-dark dark:text-beige-light font-medium mb-6 sm:mb-8
                backdrop-blur-sm
                text-xs sm:text-sm
                transform transition-all duration-700 ease-out
                ${showBadge ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                style={{ transitionDelay: '10ms' }}>
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Ваш надежный ИТ-партнер</span>
              </div>

              {/* Main Heading с последовательной анимацией */}
              <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-4">
                <h1 className="font-bold text-brown-dark dark:text-beige-light leading-tight">
                  {/* ООО «ПРОФ ИТ» - появляется первым */}
                  <div {...slideInAnimation(showFirstLine, '50ms')}>
                    <span className="inline-block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">
                      ООО «ПРОФ ИТ»
                    </span>
                  </div>
                </h1>

                {/* Эффективность через автоматизацию - появляется вторым */}
                <div {...slideInAnimation(showSecondLine, '100ms')}>
                  <div className="font-semibold text-base sm:text-xl lg:text-2xl xl:text-3xl">
                    <span className="text-brown-dark/80 dark:text-beige-light/90">
                      Эффективность через автоматизацию
                    </span>
                  </div>
                </div>
              </div>

              {/* Description с анимацией сверху вниз - появляется третьим */}
              <div {...slideInAnimation(showDescription, '200ms')}>
                <p className="text-brown-dark dark:text-beige mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Комплексные ИТ-решения для цифровой трансформации вашего бизнеса.
                  От автоматизации процессов до полного цикла разработки — повышаем эффективность
                  и создаем конкурентные преимущества
                </p>
              </div>

              {/* CTA Button - появляется с fade in анимацией */}
              <div 
                className="flex justify-center lg:justify-start transition-all duration-700 ease-out"
                style={{ 
                  opacity: showButton ? 1 : 0,
                  transform: showButton ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '700ms'
                }}
              >
                <Button
                  onClick={() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="relative overflow-hidden inline-flex items-center gap-2 rounded-full 
                  bg-brown-dark border border-brown-dark
                  text-beige-light dark:text-beige-light font-medium
                  dark:bg-beige-light/5 
                  group
                  px-6
                  text-xs sm:text-sm
                  hover:bg-beige hover:text-brown-dark
                  dark:hover:bg-beige-light dark:hover:text-brown-dark
                  transition-all duration-300"
                >
                  <span className="relative z-10">
                    Подробнее об услугах
                  </span>
                  <ArrowDown className="relative z-10 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Правая колонка - изображение */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-0 h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
            <div 
              className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out backdrop-blur-sm"
              style={{
                opacity: showImage ? 1 : 0,
                transform: showImage ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                transitionDelay: '800ms',
                background: 'linear-gradient(135deg, rgba(245, 245, 220, 0.2) 0%, rgba(210, 180, 140, 0.1) 100%)',
                backgroundImage: `url(${logoDark})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            >
              {/* Градиентное наложение для улучшения читаемости и эстетики */}
              <div className="absolute inset-0 bg-gradient-to-tl from-brown-dark/5 via-transparent to-beige-light/10 dark:from-black/10 dark:via-transparent dark:to-black/10"></div>
              
              {/* Текст поверх изображения */}
              <div 
                className="absolute bottom-6 left-6 right-6 z-10 transform transition-all duration-1000 ease-out"
                style={{
                  opacity: showImage ? 1 : 0,
                  transform: showImage ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '1200ms'
                }}
              >
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}