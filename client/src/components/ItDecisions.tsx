// components/HeroSection.tsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from '@assets/generated_images/background.jpg';
import { Button } from "@/components/ui/button";

interface ItDecisionsProps {
  // Основной контент
  badgeText?: string;
  title: string;
  description: string;
  
  // Дополнительные опции
  showBackButton?: boolean;
  backButtonText?: string;
  backgroundImage?: string;
  onLearnMore?: () => void;
  onBadgeClick?: () => void;
  
  // Кастомизация стилей
  titleSize?: "sm" | "md" | "lg" | "xl";
  alignment?: "left" | "center";
  minHeight?: "sm" | "md" | "lg" | "xl";
}

export default function ItDecisions({ 
  badgeText = "IT-решения для бизнеса",
  title,
  description,
  showBackButton = true,
  backButtonText = "Назад на главную",
  backgroundImage = heroImage,
  onLearnMore,
  onBadgeClick,
  titleSize = "xl",
  alignment = "left",
  minHeight = "md"
}: ItDecisionsProps) {
  
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
          src={backgroundImage} 
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
            className="max-w-8xl inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {backButtonText}
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
              className="
                text-xs px-2 py-2
                transition-transform duration-200 ease-in-out
                inline-flex items-center
                mb-10 my-4
                hover:scale-105
              "
              data-testid="hero-badge"
              variant={onBadgeClick ? "default" : "outline"}
            >
              {badgeText}
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