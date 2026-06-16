import { ArrowDown, Zap, Code, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoDark from '@assets/images/header_pic.jpg';
import Photo from '@assets/images/header_pic.jpg';

interface HeroSectionProps {
  onLearnMore?: () => void;
  onServiceClick?: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [showBadge, setShowBadge] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBadge(true), 200);
    const timer2 = setTimeout(() => setShowFirstLine(true), 500);
    const timer3 = setTimeout(() => setShowDescription(true), 800);
    const timer4 = setTimeout(() => setShowImage(true), 1100);
    const timer5 = setTimeout(() => setShowFeatures(true), 1300);
    const timer6 = setTimeout(() => setShowButton(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const handleScrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Автоматизация процессов',
      description: 'Сокращаем издержки на 30%',
    },
    {
      icon: Code,
      title: 'Разработка ПО',
      description: 'Цикл от идеи до запуска',
    },
    {
      icon: TrendingUp,
      title: 'Масштабируем решения',
      description: 'Решения, которые растут вместе с бизнесом',
    }
  ];

  return (
    <section className="pt-12 pb-16 lg:pt-10 lg:pb-20 relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img
          src={logoDark}
          loading="lazy"
          decoding="async"
          alt="ИТ-решения для бизнеса"
          className="w-full h-full object-cover transform transition-transform duration-1000
                    blur-[4px] lg:blur-[12px] brightness-90"
          style={{
            transform: showImage ? 'scale(1)' : 'scale(1.05)',
            objectPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beige via-beige/85 to-beige/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-beige/80 via-beige/70 to-beige/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 h-full items-center">

          {/* Левая колонка - информация о компании */}
          <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">

              {/* Заголовок */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h1 className="font-bold">
                  <div className={`transform transition-all duration-700 ease-out
                    ${showFirstLine ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 
                                   text-brown-dark leading-tight block">
                      Цифровая трансформация вашего бизнеса: от автоматизации до разработки под ключ
                    </span>
                  </div>
                </h1>
              </div>

              {/* Описание (добавлено с анимацией) */}
              <div className={`mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 ease-out
                ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
                <p className="text-sm sm:text-base md:text-lg text-brown-dark leading-relaxed">
                  Комплексные ИТ-решения для цифровой трансформации вашего бизнеса.
                  Автоматизация, разработка ПО и масштабирование под ваши задачи.
                </p>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12
  transition-all duration-700 ease-out
  ${showFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-row sm:flex-col items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl 
                  bg-brown-dark/90 backdrop-blur-sm shadow-lg"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-2 sm:p-3 rounded-xl bg-beige/10">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-brown-dark" strokeWidth={1.5} />
                      </div>
                      <div className="text-left sm:text-center lg:text-left">
                        <h3 className="font-semibold text-brown-dark text-xs sm:text-base md:text-sm mb-0.5 sm:mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-brown-dark text-xs sm:text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Кнопка */}
              <div className={`transition-all duration-700 ease-out
                ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <button
                  onClick={handleScrollToServices}
                  className="inline-flex items-center gap-2 rounded-full 
                           bg-brown-dark border border-brown-dark
                           text-beige-light font-medium
                           hover:bg-beige hover:text-brown-dark
                           group
                           px-5 sm:px-6 py-2.5 sm:py-3.5
                           text-sm sm:text-base
                           transition-all duration-300"
                >
                  <span className="relative z-10 font-semibold">
                    Ознакомиться с услугами
                  </span>
                  <ArrowDown className="relative z-10 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Правая колонка - изображение (только десктоп) */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-0 hidden lg:block">
            <div
              className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 
                         rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl 
                         transform transition-all duration-1000 ease-out"
              style={{
                opacity: showImage ? 1 : 0,
                transform: showImage ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                background: `linear-gradient(135deg, rgba(245, 245, 220, 0.2) 0%, rgba(210, 180, 140, 0.1) 100%), url(${Photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-brown-dark/5 via-transparent to-beige-light/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}