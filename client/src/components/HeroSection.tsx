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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Центрированный контент - ПЕРЕД слайдером */}
<div className="container mx-auto px-4 lg:px-8 relative z-20">
  <div className="max-w-4xl mx-auto text-center">

    {/* Badge с анимацией появления */}
    <div className={`
      inline-flex items-center gap-2 px-4 py-2 rounded-full 
      bg-blue-500/10 border border-blue-500/20 
      text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 
      backdrop-blur-sm
      transition-all duration-1000 ease-out
      ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'}
    `}>
      <Shield className="h-4 w-4 transition-all duration-700 delay-400" />
      <span className="transition-all duration-700 delay-500">
        Ваш надежный ИТ-партнер
      </span>
    </div>

    {/* Main Heading с последовательной анимацией */}
    <div className="mb-8">
      <h1 className="font-Montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
        {/* ООО «ПРОФ ИТ» - появляется первым */}
        <span className={`
          inline-block transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-8'}
        `}>
          ООО «ПРОФ ИТ»
        </span>
      </h1>

      {/* Эффективность через автоматизацию - появляется вторым */}
      <div className={`
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-6'}
      `}>
        <span className={`
          font-Montserrat text-xl sm:text-2xl lg:text-3xl 
          font-semibold text-foreground/80 
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 delay-1100' : 'opacity-0'}
        `}>
          Эффективность через автоматизацию
        </span>
      </div>
    </div>

    {/* Description с анимацией - появляется третьим */}
    <p className={`
      font-Montserrat text-lg sm:text-xl lg:text-xl 
      text-muted-foreground mb-12 leading-relaxed 
      max-w-3xl mx-auto
      transition-all duration-1000 ease-out
      ${isVisible ? 'opacity-100 translate-y-0 delay-1300' : 'opacity-0 translate-y-6'}
    `}>
      <span className={`
        inline-block transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 delay-1400' : 'opacity-0'}
      `}>
        Комплексные ИТ-решения для цифровой трансформации вашего бизнеса. 
        От автоматизации процессов до полного цикла разработки — повышаем эффективность 
        и создаем конкурентные преимущества.
      </span>
    </p>

    {/* CTA Button - появляется четвертым */}
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
          inline-flex items-center gap-2 px-6 py-3 rounded-full 
          bg-blue-500/20 border border-blue-800/30 
          text-blue-600 dark:text-blue-400 text-base font-bold
          backdrop-blur-sm
          transition-all duration-1000 ease-out
          group
          ${isVisible ? 'opacity-100 translate-y-0 delay-1600' : 'opacity-0 translate-y-6'}
          hover:border-blue-400 hover:bg-blue-500/30
        `}
      >
        {/* Бегущий луч */}
        <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <span className="relative z-10 transition-all duration-300">
          О компании
        </span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
      </Button>
    </div>
  </div>
</div>

  {/* Слайдер на фоне - ПОСЛЕ контента */}
  <div className="absolute inset-0 z-10">
    <div 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

      {/* Кнопки навигации */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>
  );
}