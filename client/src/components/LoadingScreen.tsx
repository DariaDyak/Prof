// @/components/LoadingScreen.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);

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
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ backgroundColor: '#B6A593' }}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { 
            duration: 0.8,
            delay: 0.3 
          }
        }}
      >
        {/* Единый логотип из 3 частей */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Центральная часть - основной логотип */}
          <motion.div
            className="relative z-30"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{
              scale: {
                duration: 1.2,
                delay: 0.3,
                type: "spring",
                stiffness: 200
              },
              rotate: {
                duration: 1.5,
                delay: 0.3,
                ease: "backOut"
              },
              opacity: {
                duration: 0.8,
                delay: 0.3
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div 
              className="h-32 w-32 rounded-2xl flex items-center justify-center relative"
              style={{ 
                backgroundColor: 'rgba(56, 46, 37, 0.15)',
                border: '4px solid #382E25',
                boxShadow: '0 15px 35px rgba(56, 46, 37, 0.25)'
              }}
            >
              {/* Центральная иконка */}
              <div className="h-20 w-20 rounded-xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#382E25',
                  boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
              >
                <motion.svg
                  className="h-12 w-12"
                  style={{ color: '#B6A593' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-2.33C20.4 18.37 22 15.06 22 12c0-5.18-3.95-9.45-9-9.95zM11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.195 8.195 0 0 1 11 4V2zM4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.2-1.42.86-2.7 1.86-3.78L4.2 5.68zM2 13c.2 1.95.97 3.8 2.21 5.32l1.42-1.42A8.21 8.21 0 0 1 4 13H2zm5.63 4.9l-1.42 1.42C7.2 21.04 9.05 21.8 11 22v-2c-1.42-.2-2.7-.86-3.78-1.86L7.63 17.9z" />
                </motion.svg>
              </div>

              {/* Свечение вокруг центрального логотипа */}
              <motion.div
                className="absolute -inset-4 rounded-2xl"
                style={{ 
                  border: '3px solid #382E25',
                  boxShadow: '0 0 40px rgba(56, 46, 37, 0.4)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Левая часть - PROF (logo1) */}
          <motion.div
            className="absolute -right-48 z-20"
            initial={{ x: 100, opacity: 0, scale: 0.5 }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scale: 1,
              rotate: [0, -2, 2, 0]
            }}
            transition={{
              x: {
                duration: 1,
                delay: 0.6,
                type: "spring",
                stiffness: 150,
                damping: 12
              },
              opacity: {
                duration: 0.8,
                delay: 0.6
              },
              scale: {
                duration: 1,
                delay: 0.6,
                type: "spring"
              },
              rotate: {
                delay: 1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div 
              className="h-20 w-40 rounded-xl flex items-center justify-center px-4"
              style={{ 
                backgroundColor: 'rgba(56, 46, 37, 0.12)',
                border: '3px solid #382E25',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Замените на ваше изображение PROF */}
              <div className="text-center">
                <motion.h2 
                  className="text-4xl font-black tracking-widest"
                  style={{ color: '#382E25' }}
                  initial={{ letterSpacing: "0.5em" }}
                  animate={{ letterSpacing: "0.2em" }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    ease: "easeOut"
                  }}
                >
                  PROF
                </motion.h2>
              </div>
            </div>

            {/* Соединительная линия справа */}
            <motion.div
              className="absolute -left-6 top-1/2 w-6 h-1"
              style={{ backgroundColor: '#382E25' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Правая часть - IT (logo2) */}
          <motion.div
            className="absolute -left-48 z-20"
            initial={{ x: -100, opacity: 0, scale: 0.5 }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scale: 1,
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              x: {
                duration: 1,
                delay: 0.8,
                type: "spring",
                stiffness: 150,
                damping: 12
              },
              opacity: {
                duration: 0.8,
                delay: 0.8
              },
              scale: {
                duration: 1,
                delay: 0.8,
                type: "spring"
              },
              rotate: {
                delay: 1.2,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div 
              className="h-20 w-32 rounded-xl flex items-center justify-center px-4"
              style={{ 
                backgroundColor: 'rgba(56, 46, 37, 0.12)',
                border: '3px solid #382E25',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Замените на ваше изображение IT */}
              <div className="text-center">
                <motion.h2 
                  className="text-4xl font-black tracking-widest"
                  style={{ color: '#382E25' }}
                  initial={{ letterSpacing: "0.5em" }}
                  animate={{ letterSpacing: "0.2em" }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2,
                    ease: "easeOut"
                  }}
                >
                  IT
                </motion.h2>
              </div>
            </div>

            {/* Соединительная линия слева */}
            <motion.div
              className="absolute -right-6 top-1/2 w-6 h-1"
              style={{ backgroundColor: '#382E25' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Нижняя часть - надпись (logo3) */}
          <motion.div
            className="absolute -bottom-24 z-20"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1
            }}
            transition={{
              y: {
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 120
              },
              opacity: {
                duration: 0.8,
                delay: 1
              },
              scale: {
                duration: 1,
                delay: 1,
                type: "spring"
              },
              
            }}
          >
            <div 
              className="h-16 w-64 rounded-lg flex items-center justify-center"
              style={{ 
                backgroundColor: 'rgba(56, 46, 37, 0.1)',
                border: '2px solid #382E25'
              }}
            >
              {/* Замените на вашу надпись */}
              <motion.p
                className="text-xl font-bold tracking-wide"
                style={{ color: '#382E25' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Digital Experience
              </motion.p>
            </div>

            {/* Соединительная линия сверху */}
            <motion.div
              className="absolute left-1/2 -top-6 w-1 h-6 transform -translate-x-1/2"
              style={{ backgroundColor: '#382E25' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Декоративные элементы соединения */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Дуги соединения */}
            <motion.path
              d="M 50% 50% Q 65% 40%, 75% 50%"
              fill="none"
              stroke="#382E25"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeOut"
              }}
            />
            <motion.path
              d="M 50% 50% Q 35% 40%, 25% 50%"
              fill="none"
              stroke="#382E25"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.9,
                ease: "easeOut"
              }}
            />
            <motion.path
              d="M 50% 50% Q 50% 65%, 50% 75%"
              fill="none"
              stroke="#382E25"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.1,
                ease: "easeOut"
              }}
            />
          </svg>
        </div>

        {/* Индикатор загрузки */}
        <div className="w-80 mt-20">
          <motion.div 
            className="text-center mb-4 text-lg font-medium tracking-wide"
            style={{ color: '#382E25' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            Инициализация системы {Math.round(progress)}%
          </motion.div>
          
          <div className="relative h-3 overflow-hidden rounded-full"
            style={{ backgroundColor: 'rgba(56, 46, 37, 0.15)' }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ 
                backgroundColor: '#382E25',
                background: 'linear-gradient(90deg, #382E25, #5D4E3E, #382E25)'
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            />
            
            {/* Эффект свечения прогресс-бара */}
            <motion.div
              className="absolute top-0 h-full w-8 rounded-full"
              style={{ 
                backgroundColor: '#B6A593',
                boxShadow: '0 0 20px #B6A593'
              }}
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                left: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>

          {/* Анимированные точки */}
          <motion.div 
            className="flex justify-center gap-1 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: '#382E25' }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
            style={{ 
              backgroundColor: 'rgba(56, 46, 37, 0.03)',
              border: '1px solid rgba(56, 46, 37, 0.1)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
            style={{ 
              backgroundColor: 'rgba(56, 46, 37, 0.03)',
              border: '1px solid rgba(56, 46, 37, 0.1)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;