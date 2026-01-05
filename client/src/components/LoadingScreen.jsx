// @/components/LoadingScreen.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      // Имитация прогресса загрузки
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      // Анимация завершения загрузки
      setProgress(100);
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { 
            duration: 0.5,
            delay: 0.3 
          }
        }}
      >
        {/* Логотип с анимацией */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            rotate: {
              delay: 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <div className="relative">
            {/* Ваш логотип */}
            <div className="h-24 w-24 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <svg
                className="h-16 w-16 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            
            {/* Анимированная обводка */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-blue-500 dark:border-blue-400"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </motion.div>

        {/* Текст с названием компании */}
        <motion.h1
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ваша Компания
        </motion.h1>
        
        <motion.p
          className="mb-8 text-gray-600 dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Загрузка...
        </motion.p>

        {/* Прогресс бар */}
        <div className="w-64">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="absolute left-0 top-0 h-full bg-blue-600 dark:bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div
            className="mt-2 text-right text-sm text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Индикатор загрузки */}
        {isLoading && (
          <motion.div
            className="mt-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"
                  animate={{ 
                    y: ["0%", "-50%", "0%"],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Подготовка...
            </span>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;