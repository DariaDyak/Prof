import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Импортируйте ваше изображение логотипа
import LogoImage from '@assets/generated_images/log.png'; // Замените на путь к вашему изображению

const LoadingScreen = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Предзагрузка изображения
    const img = new Image();
    img.src = LogoImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + Math.random() * 15;
        });
      }, 500);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen overflow-hidden"
        style={{ backgroundColor: '#1E1915' }}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { 
            duration: 1.2,
            ease: "easeInOut"
          }
        }}
      >
        {/* Центральный контейнер для текста */}
        <div className="relative flex flex-col items-center justify-center gap-8">
          
          {/* Логотип (если нужно вернуть) */}
          {/* 
          <motion.div
            className="relative z-50 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              opacity: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          >
            {imageLoaded ? (
              <img 
                src={LogoImage} 
                alt="ПРОФ ИТ"
                className="w-32 h-32 object-contain"
              />
            ) : null}
          </motion.div>
          */}

          {/* Заголовок - появляется сверху в центр */}
          <motion.div
            className="text-center"
            initial={{ 
              y: -100, 
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div 
              className="text-7xl md:text-8xl font-bold leading-tight tracking-wide"
              style={{ 
                color: '#a79585ff',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              ПРОФ ИТ
            </div>
          </motion.div>

          {/* Подзаголовок - появляется снизу в центр */}
          <motion.div
            className="text-center"
            initial={{ 
              y: 100, 
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div 
              className="text-2xl md:text-3xl font-light italic leading-relaxed tracking-wider"
              style={{ 
                color: '#d4c9bd',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              Эффективность через автоматизацию
            </div>
          </motion.div>

        </div>

        
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;