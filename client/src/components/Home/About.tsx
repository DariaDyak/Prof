import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';
import { Shield, Code, FileText, Server } from 'lucide-react';
import S1 from "@assets/images/accord1.png";
import S2 from "@assets/images/accord2.png";
import S3 from "@assets/images/accord3.png";

import PresentationPdf from "@assets/images/presentation1.pdf";
const directions = [
  {
    icon: Shield,
    title: 'Информационная безопасность',
    description: 'Защита данных по ГОСТ',
  },
  {
    icon: FileText,
    title: 'Проектная деятельность',
    description: 'Сопровождение от аудита до внедрения "под ключ"',
  },
  {
    icon: Server,
    title: 'Сопровождение продукта',
    description: 'Гарантия отказоустойчивости 24/7',
  },
  {
    icon: Code,
    title: 'Разработка и модификация',
    description: 'Адаптация софта под ваши бизнес-задачи',
  },
];

export default function AboutSection() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false]);

  const slides = [
    {
      image: S1,
      title: "Энергосбытовые компании",
      description: "ИТ-решения для автоматизации расчетов, диспетчеризации и управления энергоресурсами"
    },
    {
      image: S2,
      title: "Железнодорожная логистика",
      description: "Системы управления перевозками, отслеживания грузов и оптимизации логистических цепочек"
    },
    {
      image: S3,
      title: "Медицина",
      description: "Цифровизация процессов медосмотров, интеграция с медицинскими учреждениями и ведение электронных медкарт"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const handleImageError = (index: number) => {
    const newErrors = [...imageErrors];
    newErrors[index] = true;
    setImageErrors(newErrors);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PresentationPdf;
    link.download = 'Презентация_ПРОФ_ИТ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getImageSrc = (index: number) => {
    if (imageErrors[index]) {
      return `https://placehold.co/800x600/1e3a8a/ffffff?text=${encodeURIComponent(slides[index].title)}`;
    }
    return slides[index].image;
  };

  return (
    <section id="about" className="py-14 pb-16 ">
      <div className="container mx-auto px-4 lg:px-8 h-full">

        {/* Десктоп версия */}
        <div className="hidden xl:grid xl:grid-cols-2 xl:gap-8 gap-8 items-stretch h-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 gap-8 mb-8 col-span-2">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-brown-dark dark:text-beige">
                Комплексная IT-поддержка вашего бизнеса на базе российского ПО
              </h2>
            </div>
          </div>

          {/* Левая колонка - направления */}
          <div className="flex flex-col h-full">
            <Card className="flex flex-col shadow-2xl h-full bg-white dark:bg-beige">
              <CardContent className="space-y-6 flex flex-col flex-1 p-6">
                <p className="text-base leading-relaxed text-brown-dark dark:text-brown-dark">
                  Мы помогаем крупному бизнесу переходить на надежное российское ПО без остановки процессов. Наши специалисты смогут подобрать решения для
                  автоматизации и развития Вашего бизнеса, не зависимо от
                  направления деятельности.
                </p>
                {/* Четыре направления в виде карточек */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {directions.map((direction, index) => {
                    const Icon = direction.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-gradient-to-br from-brown-dark/5 to-beige-light/30 
                           border border-brown-dark/20 
                           transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 p-2.5 rounded-xl bg-brown-dark/10 
                                 group-hover:bg-brown-dark/20 transition-colors duration-300">
                            <Icon className="h-6 w-6 text-brown-dark" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-brown-dark text-base mb-2">
                              {direction.title}
                            </h3>
                            <p className="text-brown-dark dark:text-brown-dark text-sm leading-relaxed">
                              {direction.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Плашка о реестре отечественного ПО */}
                <div className="relative overflow-hidden rounded-xl bg-brown-dark p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <div className="relative flex items-center gap-3 flex-wrap">
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-lg bg-brown-dark/15">
                        <svg className="w-5 h-5 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-beige font-bold">
                      Работаем с реестром отечественного ПО
                    </p>
                  </div>
                </div>


                {/* Блок с презентацией */}
                <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  <div className="flex items-start justify-start">
                    <button
                      onClick={handleDownload}
                      className="relative py-2.5 pl-10
                   transition-all duration-300 ease-out
                   text-base font-medium
                   focus:outline-none group
                   text-brown-dark dark:text-brown-dark hover:text-brown-dark dark:hover:text-brown-dark
                   items-center gap-2 text-left
                   select-none"
                      style={{
                        outline: 'none',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleDownload();
                        }
                      }}
                    >
                      <svg
                        className="absolute left-0 w-6 h-6 text-brown-dark dark:text-brown-dark group-hover:opacity-80 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>

                      <span className="relative inline-block">
                        Подробнее о нас
                        <div className="absolute bottom-0 w-full h-0.5 bg-brown-dark dark:bg-brown-dark rounded-full
                  transition-all duration-300 ease-out
                  opacity-0 group-hover:opacity-100
                  scale-x-0 group-hover:scale-x-100" />
                      </span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - слайдер */}
          <div className="flex flex-col h-full">
            <div className="relative h-full">
              <div className="flex flex-col gap-2 lg:gap-3 rounded-2xl overflow-hidden h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 ${index === currentSlide
                      ? 'flex-grow rounded-2xl'
                      : 'h-14 lg:h-16 rounded-xl hover:flex-grow hover:rounded-2xl'
                      }`}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => {
                      if (index !== currentSlide) {
                        setIsAutoPlaying(false);
                        goToSlide(index);
                      }
                    }}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={getImageSrc(index)}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-all duration-300 ${index === currentSlide ? 'brightness-100' : 'brightness-50 hover:brightness-75'
                          }`}
                        alt={slide.title}
                        onError={() => handleImageError(index)}
                      />

                      <div className={`absolute inset-0 transition-all duration-300 ${index === currentSlide
                        ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                        : 'bg-black/70 hover:bg-black/50'
                        }`} />
                    </div>

                    {index !== currentSlide && (
                      <div className="relative h-full flex items-center px-4 lg:px-6">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs lg:text-sm font-medium">
                              {index + 1}
                            </div>
                            <div className="text-white">
                              <h4 className="font-medium text-sm lg:text-base leading-tight">
                                {slide.title}
                              </h4>
                            </div>
                          </div>

                          <div className={`transform transition-transform duration-300 ${index === currentSlide ? 'rotate-180' : 'rotate-0'
                            }`}>
                            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white/80" />
                          </div>
                        </div>
                      </div>
                    )}

                    {index === currentSlide && (
                      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            {slide.title}
                          </h3>

                          <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Мобильная версия (xl и ниже) */}
        <div className="xl:hidden space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brown-dark dark:text-beige">
              Комплексная IT-поддержка вашего бизнеса на базе российского ПО
            </h2>
          </div>

          <Card className="bg-white dark:bg-beige shadow-xl">
            <CardContent className="p-5">
              <p className="text-sm sm:text-base lg:text-base xl:text-base leading-relaxed text-brown-dark dark:text-brown-dark">
                Мы помогаем крупному бизнесу переходить на надежное российское ПО без остановки процессов.
                Наши специалисты смогут подобрать решения для автоматизации и развития Вашего бизнеса,
                не зависимо от направления деятельности.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4">
            {directions.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <Card key={index} className="bg-white dark:bg-beige shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 rounded-xl bg-brown-dark/10">
                        <Icon className="h-5 w-5 text-brown-dark" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-brown-dark text-sm sm:text-base lg:text-base xl:text-base mb-1">
                          {direction.title}
                        </h3>
                        <p className="text-brown-dark text-sm sm:text-sm lg:text-base xl:text-sm leading-relaxed">
                          {direction.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-xl bg-brown-dark p-4">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-beige/10">
                  <svg className="w-5 h-5 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm sm:text-base lg:text-base xl:text-base text-beige font-bold">
                Работаем с реестром отечественного ПО
              </p>
            </div>
          </div>

          <div className="relative h-[500px] sm:h-[600px]">
            <div className="flex flex-col gap-2 rounded-2xl overflow-hidden h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 ${index === currentSlide
                    ? 'flex-grow rounded-2xl'
                    : 'h-16 rounded-xl hover:flex-grow'
                    }`}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => {
                    if (index !== currentSlide) {
                      setIsAutoPlaying(false);
                      goToSlide(index);
                    }
                  }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={getImageSrc(index)}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover transition-all duration-300 ${index === currentSlide ? 'brightness-100' : 'brightness-50 hover:brightness-75'
                        }`}
                      alt={slide.title}
                      onError={() => handleImageError(index)}
                    />

                    <div className={`absolute inset-0 transition-all duration-300 ${index === currentSlide
                      ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                      : 'bg-black/70 hover:bg-black/50'
                      }`} />
                  </div>

                  {index !== currentSlide && (
                    <div className="relative h-full flex items-center px-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-medium">
                            {index + 1}
                          </div>
                          <div className="text-white">
                            <h4 className="font-medium text-sm leading-tight line-clamp-1">
                              {slide.title}
                            </h4>
                          </div>
                        </div>

                        <div className={`transform transition-transform duration-300 ${index === currentSlide ? 'rotate-180' : 'rotate-0'
                          }`}>
                          <ChevronRight className="w-4 h-4 text-white/80" />
                        </div>
                      </div>
                    </div>
                  )}

                  {index === currentSlide && (
                    <div className="relative h-full flex flex-col justify-end p-5">
                      <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed line-clamp-4">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={handleDownload}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full
                 bg-brown-dark text-beige-light font-medium
                 hover:bg-beige hover:text-brown-dark
                 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5  transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative">
                Подробнее о нас
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-beige-light rounded-full
                       transition-all duration-300 opacity-0"/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}