import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import Slide1 from "@assets/generated_images/slide1.jpg";
import Slide2 from "@assets/generated_images/slide2.jpg";
import Slide3 from "@assets/generated_images/slide3.jpg";

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const slides = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  }
];

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Автоплей слайдера
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    onLearnMore?.();
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Обработчик для тач-событий (свайпы)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > minSwipeDistance) {
      // Свайп влево - следующий слайд
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Свайп вправо - предыдущий слайд
      prevSlide();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Центрированный контент - ПЕРЕД слайдером */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge с анимацией появления сверху вниз */}
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-blue-500/10 border border-blue-500/20 
            text-blue-600 dark:text-blue-400 font-medium mb-6 sm:mb-8
            backdrop-blur-sm
            transition-all duration-700 ease-out
            text-xs sm:text-sm
            transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
          `} style={{ transitionDelay: '300ms' }}>
            <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>
              Ваш надежный ИТ-партнер
            </span>
          </div>

          {/* Main Heading с последовательной анимацией сверху вниз */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-Montserrat font-bold text-foreground mb-4 leading-tight">
              {/* ООО «ПРОФ ИТ» - появляется первым */}
              <span className={`
                inline-block
                text-2xl sm:text-5xl lg:text-5xl xl:text-6xl
                transform transition-all duration-800 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
              `} style={{ transitionDelay: '500ms' }}>
                ООО «ПРОФ ИТ»
              </span>
            </h1>

            {/* Эффективность через автоматизацию - появляется вторым */}
            <div className={`
              transform transition-all duration-800 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
            `} style={{ transitionDelay: '700ms' }}>
              <span className={`
                font-Montserrat font-semibold text-foreground/80
                text-base sm:text-2xl lg:text-2xl xl:text-3xl
              `}>
                Эффективность через автоматизацию
              </span>
            </div>
          </div>

          {/* Description с анимацией сверху вниз - появляется третьим */}
          <p className={`
            font-Montserrat text-muted-foreground mb-8 sm:mb-12 leading-relaxed 
            max-w-3xl mx-auto
            text-xs sm:text-xs lg:text-lg xl:text-xl
            transform transition-all duration-800 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
          `} style={{ transitionDelay: '900ms' }}>
            <span>
              Комплексные ИТ-решения для цифровой трансформации вашего бизнеса. 
              От автоматизации процессов до полного цикла разработки — повышаем эффективность 
              и создаем конкурентные преимущества.
            </span>
          </p>

          {/* CTA Button - появляется четвертым сверху вниз */}
          <div className="flex justify-center">
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
              className={`
                relative
                overflow-hidden
                inline-flex items-center gap-2 rounded-full 
                bg-blue-500/20 border border-blue-800/30 
                text-blue-600 dark:text-blue-400 font-bold
                backdrop-blur-sm
                transition-all duration-800 ease-out
                group
                px-4 py-2 sm:px-6 sm:py-3
                text-sm sm:text-base
                transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
                hover:border-blue-400 hover:bg-blue-500/30
              `}
              style={{ transitionDelay: '1100ms' }}
            >
              {/* Бегущий луч */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              <span className="relative z-10">
                О компании
              </span>
              <ArrowRight className="relative z-10 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>

      {/* Кнопки навигации слайдера - ВЫШЕ основного контента */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        
              <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-8 sm:h-8 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-8 sm:h-8 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Слайдер на фоне - ПОСЛЕ контента */}
      <div className="absolute inset-0 z-10">
        <div 
          className="relative h-full w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img 
                  src={slide.image} 
                  className="w-full h-full object-cover brightness-120 opacity-40"
                  alt={`Slide ${index + 1}`}
                />
                {/* Белый фон */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
              </div>
            ))}
          </div>

          {/* Полоса состояния с градиентом */}
          <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
              style={{ 
                width: `${((currentSlide + 1) / slides.length) * 100}%` 
              }}
            />
          </div>

          {/* Индикаторы слайдов для мобильных */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1 h-1 sm:w-1 sm:h-1 rounded-full transition-all duration-300 pointer-events-auto ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}