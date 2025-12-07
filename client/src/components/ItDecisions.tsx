// components/HeroSection.tsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import U1 from '@assets/generated_images/U1.png';
import U2 from '@assets/generated_images/U2.png';
import U3 from '@assets/generated_images/U3.jpg';
import { Button } from "@/components/ui/button";

interface ItDecisionsProps {
  // Основной контент
  badgeText?: string;
  title: string;
  description: string;
  
  // Дополнительные опции
  showBackButton?: boolean;
  backButtonText?: string;
  backgroundImage?: "U1" | "U2" | "U3" | string; // Изменено для поддержки предустановленных изображений
  onLearnMore?: () => void;
  onBadgeClick?: () => void;
  
  // Кастомизация стилей
  titleSize?: "sm" | "md" | "lg" | "xl";
  alignment?: "left" | "center";
  minHeight?: "sm" | "md" | "lg" | "xl";
}

// Объект с картинками для удобного доступа
const backgroundImages = {
  U1: U1,
  U2: U2, 
  U3: U3
};

export default function ItDecisions({ 
  badgeText = "IT-решения для бизнеса",
  title,
  description,
  showBackButton = true,
  backButtonText = "Назад на главную",
  backgroundImage = "U1", // По умолчанию U1
  onLearnMore,
  onBadgeClick,
  titleSize = "xl",
  alignment = "left",
  minHeight = "md"
}: ItDecisionsProps) {
  
  // Получаем правильное изображение
  const getBackgroundImage = () => {
    if (typeof backgroundImage === 'string' && backgroundImage in backgroundImages) {
      return backgroundImages[backgroundImage as keyof typeof backgroundImages];
    }
    return backgroundImage; // Возвращаем как есть, если это custom путь
  };

  const currentBackgroundImage = getBackgroundImage();

  const handleLearnMore = () => {
    console.log('Learn more button clicked');
    onLearnMore?.();
  };

  const handleBadgeClick = () => {
    onBadgeClick?.();
  };

  // Размеры заголовка
  const titleSizes = {
    sm: "text-lg md:text-xl lg:text-xl",
    md: "text-xl md:text-2xl lg:text-2xl", 
    lg: "text-2xl md:text-3xl lg:text-4xl",
    xl: "text-3xl md:text-4xl lg:text-5xl"
  };

  // Высота секции
  const heightClasses = {
    sm: "min-h-[40vh]",
    md: "min-h-[50vh]",
    lg: "min-h-[60vh]",
    xl: "min-h-[70vh]"
  };

  // Выравнивание текста
  const alignmentClasses = {
    left: "text-left",
    center: "text-center"
  };

  return (
    <section className={`relative ${heightClasses[minHeight]} flex flex-col py-12`}>
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentBackgroundImage} 
          alt="Фон" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Кнопка возврата на главную */}
{showBackButton && (
  <div className="container mx-auto lg:px-8 relative z-10">
    <Link 
      to="/" 
      className={`
        relative py-2
        transition-all duration-300 ease-out
        font-base
        focus:outline-none focus:text-blue-600 
        group
        text-muted-foreground hover:text-blue-600
        inline-block
        pl-4 lg:pl-0
      `}
    >
      <span className="relative inline-block">
        ← {backButtonText}
        <div className={`
          absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full
          transition-all duration-300 ease-out
          opacity-0 transform scale-0 group-hover:opacity-100 group-hover:transform group-hover:scale-100
        `} />
      </span>
    </Link>
  </div>
)}
      {/* Основной контент */}
      <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-center relative z-10">
        <div className={`max-w-8xl mx-auto w-full ${alignmentClasses[alignment]}`}>
          
          {/* Бейдж/кнопка */}
          {badgeText && (
            <Button
              onClick={handleBadgeClick}
              className={`
                relative
                overflow-hidden
                inline-flex items-center gap-2 px-4 py-2 
                border border-blue-800/30 
                text-blue-600 dark:text-blue-400 text-sm font-medium
                transition-all duration-1000 ease-out
                group
                mb-10 my-4
                hover:border-blue-400 
                hover:scale-105
                hover:text-blue-600 dark:hover:text-blue-400
                bg-transparent 
                hover:bg-transparent
              `}
              data-testid="hero-badge"
              variant={onBadgeClick ? "default" : "outline"}
            >
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <span className="relative z-10 transition-all duration-300">
                {badgeText}
              </span>
            </Button>
          )}

          {/* Заголовок */}
          <h1 className={`font-Montserrat ${titleSizes[titleSize]} font-bold text-foreground mb-4 leading-tight`}>
            {title}
          </h1>

          {/* Описание */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}