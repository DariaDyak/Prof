import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Aboutcompany from "@assets/generated_images/aboutcompany.png";

import S1 from "@assets/generated_images/slide_prez1.png";
import S2 from "@assets/generated_images/slide_prez2.png";
import S3 from "@assets/generated_images/slide_prez3.png";

// Импортируем PDF файл
import PresentationPdf from "@assets/generated_images/Для развития_ПРОФ ИТ_v5_май 2025.pdf";

export default function AboutSection() {
  const services = [
    "проектирование и сопровождение компьютерных систем",
    "сервисное обслуживание компьютерного оборудования",
    "реализация комплекса мероприятий по обеспечению защиты информации",
    "разработка программного обеспечения"
  ];

  // Состояния для слайдера
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

  // Автопрокрутка слайдера
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Функции для слайдера
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
    // Создаем временную ссылку для скачивания
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
        {/* Обертка - на xl (1280px) и больше grid с 2 колонками, на меньших экранах колонка */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 gap-8 items-start">
          
          {/* Текстовый контент */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold tracking-tight">
                О компании
              </h2>
            </div>

            <Card className="flex flex-col shadow-2xl">
              <CardContent className="space-y-4 flex flex-col flex-1 p-6">
                <div className="space-y-4 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>ООО «ПРОФ ИТ»</strong> — компания,
                    предоставляющая спектр ИТ-услуг:
                  </p>

                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Наши специалисты смогут подобрать решения для
                    автоматизации и развития Вашего бизнеса, не зависимо от
                    направления деятельности.
                  </p>
                </div>

                {/* Замена бейджа на ссылку для скачивания */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <button
                      onClick={handleDownload}
                      className="
                        text-sm text-blue-500 dark:text-blue-400 font-bold
                        hover:text-blue-800 dark:hover:text-blue-600
                        transition-all duration-300 ease-out
                        hover:underline
                        cursor-pointer
                      "
                    >
                      Скачайте подробную презентацию о компании
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Слайдер - на xl (1280px) и больше справа, на меньших экранах снизу */}
          <div className="w-full xl:self-end">
            <div 
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Индикаторы слайдов */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Кнопки навигации */}
<button 
  onClick={prevSlide}
  className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 text-xs sm:text-base"
  aria-label="Previous slide"
>
  ←
</button>
<button 
  onClick={nextSlide}
  className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 text-xs sm:text-base"
  aria-label="Next slide"
>
  →
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}