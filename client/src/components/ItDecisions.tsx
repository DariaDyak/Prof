import U1 from '@assets/images/U1.png';
import U3 from '@assets/images/U3.png';

import U4 from '@assets/images/U4.png';
import { Button } from "@/components/ui/button";

interface ItDecisionsProps {
  badgeText?: string;
  title: string;
  description: string;
  showBackButton?: boolean;
  backButtonText?: string;
  backgroundImage?: "U1" | "U2" | "U3" | "U4" | string;
  onLearnMore?: () => void;
  onBadgeClick?: () => void;
  titleSize?: "sm" | "md" | "lg" | "xl";
  alignment?: "left" | "center";
  minHeight?: "sm" | "md" | "lg" | "xl";
}

const backgroundImages = {
  U1: U1,
  U2: U3,
  U3: U3,
  U4: U4
};

export default function ItDecisions({
  badgeText = "IT-решения для бизнеса",
  title,
  description,
  backgroundImage = "U1",
  onBadgeClick,
  titleSize = "xl",
  alignment = "left",
  minHeight = "md"
}: ItDecisionsProps) {

  const getBackgroundImage = () => {
    if (typeof backgroundImage === 'string' && backgroundImage in backgroundImages) {
      return backgroundImages[backgroundImage as keyof typeof backgroundImages];
    }
    return backgroundImage;
  };

  const currentBackgroundImage = getBackgroundImage();

  const handleBadgeClick = () => {
    onBadgeClick?.();
  };

  const titleSizes = {
    sm: "text-lg md:text-xl lg:text-xl",
    md: "text-xl md:text-2xl lg:text-2xl",
    lg: "text-2xl md:text-3xl lg:text-4xl",
    xl: "text-3xl md:text-4xl lg:text-5xl"
  };

  const heightClasses = {
    sm: "min-h-[40vh]",
    md: "min-h-[50vh]",
    lg: "min-h-[60vh]",
    xl: "min-h-[70vh]"
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center"
  };

  return (
    <section className={`relative ${heightClasses[minHeight]} flex flex-col py-12`}>
      <div className="absolute inset-0 z-0">
        <img
          src={currentBackgroundImage}
          loading="lazy"
          decoding="async"
          alt="Фон"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[4px] dark:backdrop-blur-[4px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-beige via-beige/60 to-transparent backdrop-blur-[1px] dark:from-brown dark:via-brown/40 dark:to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-beige via-beige/60 to-transparent backdrop-blur-[1px] dark:from-brown dark:via-brown/40 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-beige/30 dark:to-brown/30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-center relative z-10">
        <div className={`max-w-8xl mx-auto w-full ${alignmentClasses[alignment]}`}>
          {badgeText && (
            <Button
              onClick={handleBadgeClick}
              className={`
    relative
    overflow-hidden
    inline-flex items-center gap-2 px-4 py-2 
    border border-brown-dark 
    text-brown-dark text-sm font-medium
    transition-all duration-1000 ease-out
    group
    mb-10 my-4
    ring-0 focus:ring-0 focus:ring-offset-0
outline-none focus:outline-none focus-visible:outline-none
active:outline-none active:ring-0
    
    hover:text-brown-dark 
    bg-transparent 
    hover:bg-transparent
  `}
              data-testid="hero-badge"
              variant={onBadgeClick ? "default" : "outline"}
            >
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-beige-light/30 to-transparent" />
              <span className="relative z-10 transition-all duration-300">
                {badgeText}
              </span>
            </Button>
          )}

          <h1 className={`font-Montserrat ${titleSizes[titleSize]} font-bold text-brown-dark mb-4 leading-tight`}>
            {title}
          </h1>

          <p className="text-base md:text-lg font-medium text-brown-dark leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}