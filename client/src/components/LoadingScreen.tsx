import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

      setTimeout(() => setIsVisible(true), 100);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const revealAnimation = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      opacity: 0
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        clipPath: {
          duration: 1.2,
          ease: [0.83, 0, 0.17, 1]
        }
      }
    }
  };

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
        <div className="relative flex flex-col items-center justify-center gap-12">

          <div className="relative overflow-hidden">
            <motion.div
              className="text-center"
              variants={revealAnimation}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
            >
              <div
                className="text-2xl md:text-2xl font-bold leading-tight tracking-wide relative"
                style={{
                  color: '#E7E3DB',
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
              >
                ПРОФ ИТ

                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5"
                  style={{
                    backgroundColor: '#E7E3DB',
                    width: 0,
                    transform: 'translateX(-50%)'
                  }}
                  initial={{
                    width: 0,
                    opacity: 0
                  }}
                  animate={{
                    width: '100%',
                    opacity: 1
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;