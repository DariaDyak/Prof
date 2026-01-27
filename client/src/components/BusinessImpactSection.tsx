"use client";
import { Target, Zap, Shield, DollarSign, ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

export default function BusinessImpactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const metrics = [
    { icon: TrendingUp, value: "40%", label: "Рост эффективности" },
    { icon: Users, value: "50%", label: "Снижение затрат" },
    { icon: Zap, value: "60%", label: "Ускорение процессов" },
    { icon: Clock, value: "24/7", label: "Стабильность работы" },
  ];

  const features = [
    {
      icon: Target,
      title: "Стратегическое планирование",
      description: "Разрабатываем стратегию развития ИТ-инфраструктуры"
    },
    {
      icon: Shield,
      title: "Безопасность и надежность",
      description: "Обеспечиваем защиту данных и стабильность работы систем"
    },
    {
      icon: DollarSign,
      title: "Экономическая эффективность",
      description: "ИТ-эффективность: больше результатов, меньше расходов"
    },
    {
      icon: Zap,
      title: "Технологическое превосходство",
      description: "Внедряем передовые решения"
    }
  ];

  return (
    <section className="dark:bg-[#1E1915] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center mb-6 mt-8 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark dark:text-beige-light ">
            Стратегическое преимущество
          </h2>
          <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige-light leading-relaxed mt-2">
            Превращаем ИТ-инфраструктуру в мощный инструмент роста вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 items-end items-stretch">
          {/* Левый столбец */}
          <div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="space-y-4 sm:space-y-6">
              <div className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 shadow-lg overflow-hidden flex-1">

               <div className="absolute inset-0 rounded-xl sm:rounded-2xl ">
                  <div className="absolute inset-[2px] rounded-xl sm:rounded-2xl bg-white"></div>
                </div>

                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 group mt-4 ">

                    <div className="flex-1">
                      <h3 className="text-base lg:text-base xl:text-base font-bold mb-2 text-brown-dark transition-colors leading-tight">
                        Комплексный подход к развитию
                      </h3>
                      <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark leading-relaxed text-justify duration-300">
                        Наша команда специалистов помогает компании сформулировать стратегию развития
                        ИТ-инфраструктуры, которая позволит улучшить работу бизнес-процессов и повысить
                        эффективность использования информационных технологий
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group">

                    <div className="flex-1 mb-4">
                      <h4 className="text-base lg:text-base xl:text-base font-bold mb-2 text-brown-dark transition-colors leading-tight">
                        Измеримые результаты
                      </h4>
                      <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark leading-relaxed text-justify transition-colors duration-300">
                        Комплексный ИТ-аудит является важным инструментом для повышения эффективности
                        работы компании и обеспечения ее конкурентоспособности на рынке
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блок с метриками */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <div className="flex-1 pl-2 sm:pl-3 lg:pl-4">
                        <div className="text-lg sm:text-xl lg:text-2xl  font-bold text-brown-dark transition-colors">
                          {metric.value}
                        </div>
                        <div className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark transition-colors leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правый столбец - Блок с преимуществами */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-100"} h-full`}>
            <div className="flex flex-col h-full">
              <div className="space-y-4 sm:space-y-6 flex-1 h-full">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:mt-1 sm:mb-1 mt-2 mb-2 lg:mt-1 lg:mb-1 shadow-lg transition-all duration-300 h-[calc(24%-13px)] sm:min-h-[60px]"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 h-full ">
                      <div className="flex-shrink-0">
                        <div className="
                w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-14 
                flex items-center justify-center
                transition-all duration-300
              ">
                          <feature.icon className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brown-dark" />
                        </div>
                      </div>

                      <div className="flex-1 pt-2 sm:pt-1 /* Отступ сверху для текстового блока */">
                        <div className="mb-3 sm:mb-4 lg:mb-5 /* Отступ после заголовка */">
                          <h3 className="text-base lg:text-base xl:text-base font-bold text-brown-dark transition-colors duration-300 leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA блок */}
      <div className={`w-full transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="relative dark:bg-beige-light p-8 text-center overflow-hidden ">

          <div className="relative z-10 text-center mb-4 sm:mb-6 lg:mb-8 ">
            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4 text-brown-dark">
              Готовы к цифровой трансформации?
            </h3>
            <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark mb-8 max-w-2xl mx-auto">
              Начните свой путь к повышению эффективности и снижению затрат уже сегодня.
              Наши эксперты готовы провести комплексный аудит и предложить оптимальные решения
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">

              <button
                className="group border-2 border-brown-dark text-brown-dark px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1 hover:bg-brown-dark hover:text-beige-light"
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('contacts');
                      if (element) {
                        const header = document.querySelector('header');
                        const headerHeight = header ? header.offsetHeight : 0;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  } else {
                    const element = document.getElementById('contacts');
                    if (element) {
                      const header = document.querySelector('header');
                      const headerHeight = header ? header.offsetHeight : 0;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
              >
                <span className="truncate text-sm md:text-base lg:text-lg">Запросить консультацию</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 flex-shrink-0" />
              </button>

              <button
                className="group border-2 border-brown-dark text-beige-light px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 flex-1 min-w-0 bg-brown-dark hover:bg-beige-light hover:text-brown-dark"
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('cases');
                      if (element) {
                        const header = document.querySelector('header');
                        const headerHeight = header ? header.offsetHeight : 0;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  } else {
                    const element = document.getElementById('cases');
                    if (element) {
                      const header = document.querySelector('header');
                      const headerHeight = header ? header.offsetHeight : 0;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
              >
                <span className="truncate text-sm md:text-base lg:text-lg">Изучить кейсы</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}