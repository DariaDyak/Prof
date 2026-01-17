import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

import S1 from "@assets/generated_images/slide_prez1.png";
import S2 from "@assets/generated_images/slide_prez2.png";
import S3 from "@assets/generated_images/slide_prez3.png";

import PresentationPdf from "@assets/generated_images/presentation.pdf";

export default function AboutSection() {
  const services = [
    "сопровождение информационных систем",
    "доработка и модификация существующих решений",
    "обеспечение информационной безопасности",
    "проектная деятельность"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PresentationPdf;
    link.download = 'Презентация_ПРОФ_ИТ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-14 pb-16 ">
      <div className="container mx-auto px-4 lg:px-8 h-full">

        {/* Мобильная версия */}
        <div className="xl:hidden space-y-8">
          {/* Блок 1: О компании */}
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-brown-dark dark:text-beige-light mb-3">
              О компании
            </h2>

            <Card className="flex flex-col shadow-2xl bg-white/80 dark:bg-beige">
              <CardContent className="space-y-4 flex flex-col flex-1 p-6">
                <div className="space-y-4 flex-1">
                  <p className="text-sm leading-relaxed text-brown-dark dark:text-brown-dark">
                    <strong className="font-bold text-brown-dark dark:text-brown-dark">ООО «ПРОФ ИТ»</strong> — компания, предоставляющая спектр ИТ-услуг:
                  </p>

                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-[0.6rem] sm:mt-2 flex-shrink-0 bg-brown-dark dark:bg-brown-dark" />
                        <span className="text-sm leading-relaxed text-brown-dark dark:text-brown-dark">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-justify text-sm leading-relaxed text-brown-dark dark:text-brown-dark">
                    Мы используем только современное оборудование и программное обеспечение,
                    чтобы обеспечить надежность и эффективность работы наших клиентов
                  </p>

                  <p className="text-justify text-sm leading-relaxed text-brown-dark dark:text-brown-dark">
                    Наши специалисты смогут подобрать решения для
                    автоматизации и развития Вашего бизнеса, не зависимо от
                    направления деятельности
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-300 dark:border-gray-600 mt-auto">
                  <div className="flex items-start justify-start">
                    <button
                      onClick={handleDownload}
                      className="relative py-2.5 pl-10
                 transition-all duration-300 ease-out
                 text-base font-medium
                 select-none
                 ring-0 focus:ring-0 focus:ring-offset-0
                 outline-none focus:outline-none focus-visible:outline-none
                 active:outline-none active:ring-0
                 text-brown-dark dark:text-brown-dark hover:text-brown-dark dark:hover:text-brown-dark
                 items-center gap-2 text-left
                 group"  // Добавлен group для анимации
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
                        className="absolute left-0 w-5 h-5 text-brown-dark dark:text-brown-dark group-hover:opacity-80 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>

                      <span className="relative inline-block 
  text-xs sm:text-sm md:text-base">
                        Скачайте подробную презентацию о компании
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brown-dark dark:bg-brown-dark rounded-full
                transition-all duration-300 ease-out
                opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:transform group-hover:scale-x-100
                origin-left" />
                      </span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Блок 2: Отрасли специализации */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brown-dark dark:text-beige-light mb-3">
              Отрасли специализации
            </h2>
            <p className="text-brown-dark/80 dark:text-beige-light/70 text-base text-sm 
  sm:mt-3 lg:mt-8 
  sm:text-lg dark:text-beige mb-6">
              Направления, в которых мы имеем экспертизу
            </p>

            <div className="relative h-full">
              <div className="flex flex-col gap-2 lg:gap-3 rounded-2xl overflow-hidden h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${index === currentSlide
                        ? 'flex-grow rounded-2xl'
                        : 'h-14 lg:h-16 rounded-xl'
                      }`}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => index !== currentSlide && setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        className={`w-full h-full object-cover transition-all duration-700 ${index === currentSlide ? 'scale-110 brightness-100' : 'scale-100 brightness-50'
                          }`}
                        alt={slide.title}
                      />

                      <div className={`absolute inset-0 transition-all duration-500 ${index === currentSlide
                          ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                          : 'bg-black/70 hover:bg-black/60'
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

        {/* Десктоп версия */}
        <div className="hidden xl:grid xl:grid-cols-2 xl:gap-8 gap-8 items-stretch h-full">

          {/* Заголовки на одном уровне */}
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 gap-8 mb-8 col-span-2">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-brown-dark dark:text-beige">
                О компании
              </h2>
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-beige-dark dark:text-beige">
                Отрасли специализации
              </h2>
              <p className="mt-2 text-brown-dark/80 dark:text-beige-light/70 text-base">
                Направления, в которых мы имеем экспертизу
              </p>
            </div>
          </div>

          {/* Левая колонка - о компании */}
          <div className="flex flex-col h-full">
            <Card className="flex flex-col shadow-2xl h-full bg-white dark:bg-beige ">
              <CardContent className="space-y-4 flex flex-col flex-1 p-6">
                <div className="space-y-4 flex-1">
                  <p className="text-base leading-relaxed text-brown-dark dark:text-brown-dark">
                    <strong className="font-bold text-brown-dark dark:text-brown-dark">ООО «ПРОФ ИТ»</strong> — компания, предоставляющая спектр ИТ-услуг:
                  </p>

                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-[0.6rem] sm:mt-2 flex-shrink-0 bg-brown-dark dark:bg-brown-dark" />
                        <span className="text-sm sm:text-base text-brown-dark dark:text-brown-dark">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-base leading-relaxed text-brown-dark dark:text-brown-dark">
                    Мы используем только современное оборудование и программное обеспечение,
                    чтобы обеспечить надежность и эффективность работы наших клиентов
                  </p>

                  <p className="text-base leading-relaxed text-brown-dark dark:text-brown-dark">
                    Наши специалисты смогут подобрать решения для
                    автоматизации и развития Вашего бизнеса, не зависимо от
                    направления деятельности
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-300 dark:border-gray-600 mt-auto">
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
                        Скачайте подробную презентацию о компании
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
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${index === currentSlide
                        ? 'flex-grow rounded-2xl'
                        : 'h-14 lg:h-16 rounded-xl'
                      }`}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => index !== currentSlide && setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        className={`w-full h-full object-cover transition-all duration-700 ${index === currentSlide ? 'brightness-100' : 'scale-100 brightness-50'
                          }`}
                        alt={slide.title}
                      />

                      <div className={`absolute inset-0 transition-all duration-500 ${index === currentSlide
                          ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                          : 'bg-black/70 hover:bg-black/60'
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
      </div>
    </section>
  );
}