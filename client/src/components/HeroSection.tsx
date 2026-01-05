import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import Slide1 from "@assets/generated_images/slide1.jpg";
import Slide2 from "@assets/generated_images/slide2.jpg";
import Slide3 from "@assets/generated_images/slide3.jpg";
import logoDark from '@assets/generated_images/slide3.jpg';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const slides = [
  {
    image: Slide1,
    title: "Энергосбытовые компании",
    description: "ИТ-решения для автоматизации расчетов, диспетчеризации и управления энергоресурсами"
  },
  {
    image: Slide2,
    title: "Железнодорожная логистика",
    description: "Системы управления перевозками, отслеживания грузов и оптимизации логистических цепочек"
  },
  {
    image: Slide3,
    title: "Медицинские осмотры",
    description: "Цифровизация процессов медосмотров, интеграция с медицинскими учреждениями и ведение электронных медкарт"
  }
];

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragCurrentX, setDragCurrentX] = useState(0);

  // Для последовательного появления всех элементов
  const [showBadge, setShowBadge] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Инициализация анимации при монтировании
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(true);
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
      setShowList(true);
    }, 500);

    const timer6 = setTimeout(() => {
      setShowButton(true);
    }, 500);

    const timer7 = setTimeout(() => {
      setShowImage(true);
    }, 500); // Картинка появляется последней

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  // Автоплей слайдера
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

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

  // Drag & Drop для слайдера
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragCurrentX(e.clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const dragDistance = dragStartX - dragCurrentX;
    const minDragDistance = 50;

    if (Math.abs(dragDistance) > minDragDistance) {
      if (dragDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
    setDragStartX(0);
    setDragCurrentX(0);
  };

  // Touch события
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const slideInAnimation = (isVisible: boolean, delay: string = '0ms') => ({
    className: `transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`,
    style: { transitionDelay: delay }
  });

  const slideInFromRight = (isVisible: boolean, delay: string = '0ms') => ({
    className: `transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`,
    style: { transitionDelay: delay }
  });

  const fadeInAnimation = (isVisible: boolean, delay: string = '0ms') => ({
    className: `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    style: { transitionDelay: delay }
  });

  // Вычисляем смещение для drag эффекта
  const dragOffset = isDragging ? dragStartX - dragCurrentX : 0;


  return (
<section className="pt-12 pb-16 lg:pt-10 lg:pb-20 relative min-h-[92vh] flex items-center justify-center overflow-hidden 
      bg-beige dark:bg-brown">
              <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch h-full">

          {/* Левая колонка - информация о компании (первая на мобильных) */}
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
                <p className="text-brown-dark dark:text-beige mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base lg:text-lg px-4 lg:px-0">
                  Комплексные ИТ-решения для цифровой трансформации вашего бизнеса.
                  От автоматизации процессов до полного цикла разработки — повышаем эффективность
                  и создаем конкурентные преимущества.
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
                  bg-brown-dark/10 border border-brown-dark
                  text-brown-dark dark:text-beige-light font-medium
                  dark:bg-beige-light/5 dark:border-beige-light
                  group
                  px-6
                  text-xs sm:text-sm
                  hover:bg-brown-dark hover:text-beige-light
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

          {/* Правая колонка - изображение (вторая на мобильных) */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-0 h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
            <div 
              className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out"
              style={{
                opacity: showImage ? 1 : 0,
                transform: showImage ? 'translateX(0)' : 'translateX(40px) scale(0.95)',
                transitionDelay: '800ms'
              }}
            >
              {/* Основное изображение на всю ширину и высоту */}
              <img 
                src={logoDark} 
                alt="ИТ-решения для бизнеса" 
                className="w-full h-full object-cover transform transition-transform duration-1000"
                style={{
                  transform: showImage ? 'scale(1)' : 'scale(1.05)'
                }}
              />
              
              {/* Градиентное наложение для улучшения читаемости и эстетики */}
              <div className="absolute inset-0 bg-gradient-to-tl from-brown-dark/5 via-transparent to-beige-light/3 dark:from-black/5 dark:via-transparent dark:to-black/5"></div>
              
              {/* Еще один градиент для акцента */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brown-dark/3 dark:to-black/5"></div>
              
              {/* Декортивный элемент - верхний правый */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brown-dark/5 dark:bg-beige-light/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
              
              {/* Декортивный элемент - нижний левый */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brown-dark/5 dark:bg-beige-light/3 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
              
              {/* Текст поверх изображения (опционально) */}
              <div 
                className="absolute bottom-6 left-6 right-6 z-10 transform transition-all duration-1000 ease-out"
                style={{
                  opacity: showImage ? 1 : 0,
                  transform: showImage ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '1200ms'
                }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white/30 dark:border-beige-light/20">
                  <div className="w-2 h-2 rounded-full bg-beige-light animate-pulse"></div>
                  <span className="text-white dark:text-beige-light text-sm font-medium">Профессиональные ИТ-решения</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}