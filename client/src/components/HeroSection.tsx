import { Shield, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoDark from '@assets/generated_images/slide3.jpg';
import Photo from '@assets/generated_images/slide4.jpg';

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

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowBadge(true);
    }, 200);

    const timer2 = setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    const timer3 = setTimeout(() => {
      setShowDescription(true);
    }, 800);

    const timer4 = setTimeout(() => {
      setShowImage(true);
    }, 1100);

    const timer5 = setTimeout(() => {
      setShowButton(true);
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section className="pt-12 pb-16 lg:pt-10 lg:pb-20 relative min-h-[92vh] flex items-center justify-center overflow-hidden">
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

        {/* Наложения для улучшения видимости контента */}
        <div className="absolute inset-0 bg-gradient-to-t from-beige/80 via-beige/70 to-beige/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">

          {/* Левая колонка - информация о компании */}
          <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">


              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-brown-dark/10 border border-brown-dark
                text-brown-dark font-medium mb-6 sm:mb-8
                backdrop-blur-sm
                text-xs sm:text-sm
                transform transition-all duration-700 ease-out
                ${showBadge ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
                style={{ transitionDelay: '50ms' }}>
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Ваш надежный ИТ-партнер</span>
              </div>


              <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-4">
                <h1 className="font-bold">
                  <div className={`transform transition-all duration-700 ease-out
                    ${showFirstLine ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
                    style={{ transitionDelay: '100ms' }}>
                    <span className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#382E25]">
                      ООО «ПРОФ ИТ»
                    </span>
                  </div>
                </h1>
              </div>


              <div className={`transform transition-all duration-700 ease-out
                ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
                style={{ transitionDelay: '150ms' }}>
                <p className="text-brown-dark mb-8 sm:mb-12 leading-relaxed 
                  text-sm sm:text-base lg:text-lg">
                  Комплексные ИТ-решения для цифровой трансформации вашего бизнеса.
                  От автоматизации процессов до полного цикла разработки — повышаем эффективность
                  и создаем конкурентные преимущества
                </p>
              </div>

            </div>
          </div>

          {/* Правая колонка - изображение */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-0 h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] hidden lg:block">
            <div
              className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out backdrop-blur-sm"
              style={{
                opacity: showImage ? 1 : 0,
                transform: showImage ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                transitionDelay: '250ms',
                background: `linear-gradient(135deg, rgba(245, 245, 220, 0.2) 0%, rgba(210, 180, 140, 0.1) 100%), url(${Photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
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