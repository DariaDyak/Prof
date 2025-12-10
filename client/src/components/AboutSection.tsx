import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    },
    {
      image: S2,
    },
    {
      image: S3,
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
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Функция для скачивания файла
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PresentationPdf;
    link.download = 'Презентация_ПРОФ_ИТ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="pt-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 gap-8 items-start">
          <div className="space-y-6 xl:flex xl:flex-col xl:h-full">
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold tracking-tight">
                О компании
              </h2>
            </div>

            <Card className="flex flex-col shadow-2xl xl:self-end xl:mt-auto">
              <CardContent className="space-y-4 flex flex-col flex-1 p-6">
                <div className="space-y-4 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>ООО «ПРОФ ИТ»</strong> — компания, предоставляющая спектр ИТ-услуг:
                  </p>

                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-[0.6rem] sm:mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Мы используем только современное оборудование и программное обеспечение,
                    чтобы обеспечить надежность и эффективность работы наших клиентов.< br />

                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Наши специалисты смогут подобрать решения для
                    автоматизации и развития Вашего бизнеса, не зависимо от
                    направления деятельности.
                  </p>

                </div>



                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-start">
                    <button
                      onClick={handleDownload}
                      className={`
                        relative py-1.5 sm:py-2 pl-7 sm:pl-8
                        transition-all duration-300 ease-out
                        text-xs sm:text-sm font-bold
                        focus:outline-none focus:text-blue-600 
                        group
                        text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500
                        inline-flex items-center gap-2
                        text-left
                      `}
                    >
                      {/* Иконка скачивания - уменьшена в мобильной версии */}
                      <svg
                        className="absolute left-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-600 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>

                      <span className="relative inline-block">
                        Скачайте подробную презентацию о компании
                        <div className={`
                          absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full
                          transition-all duration-300 ease-out
                          opacity-0 transform scale-0 group-hover:opacity-100 group-hover:transform group-hover:scale-100
                        `} />
                      </span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full xl:self-end">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                    <img

                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover" 
                    />

                  </div>
                ))}
              </div>



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

                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}