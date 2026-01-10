// components/BackButtonSimple.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  text?: string;
  className?: string;
  scrollTo?: string; // ID элемента для скролла
}

export default function BackButtonSimple({
  text = "Назад к разработкам",
  className = "",
  scrollTo = "cases",

}: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (scrollTo) {
      // Переходим на главную
      navigate("/");
      // Ждем перехода и скроллим
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto mt-8 px-2 lg:px-4 relative z-10">
      <button
        onClick={handleClick}
        className={`
          inline-flex items-center gap-2
          py-3 px-4
          transition-all duration-300 ease-out
          font-medium
          focus:outline-none focus:text-brown-dark 
          group
          text-brown-dark hover:text-brown-dark
          bg-transparent border-none cursor-pointer
          ${className}
        `}
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="relative inline-block">
          {text}
          <div className={`
            absolute bottom-0 left-0 w-full h-0.5 bg-brown-dark rounded-full
            transition-all duration-300 ease-out
            opacity-0 transform scale-0 group-hover:opacity-100 group-hover:transform group-hover:scale-100
          `} />
        </span>
      </button>
    </div>
  );
}
