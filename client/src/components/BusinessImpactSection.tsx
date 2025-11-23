// components/BusinessImpactSection.jsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, DollarSign, ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

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
      description: "Разрабатываем индивидуальную стратегию развития ИТ-инфраструктуры"
    },
    {
      icon: Shield,
      title: "Безопасность и надежность",
      description: "Обеспечиваем защиту данных и стабильность работы систем"
    },
    {
      icon: DollarSign,
      title: "Экономическая эффективность",
      description: "Оптимизируем затраты и повышаем ROI от ИТ-инвестиций"
    },
    {
      icon: Zap,
      title: "Технологическое превосходство",
      description: "Внедряем передовые решения для конкурентного преимущества"
    }
  ];

  return (
    <section className="bg-card from-slate-50 to-slate-100  dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-8 mt-10 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Стратегическое <span className="text-blue-600">преимущество</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Превращаем ИТ-инфраструктуру в мощный инструмент роста вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 items-start">
          {/* Левый столбец */}
          <div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="space-y-4 sm:space-y-6">
              {/* Основной текстовый блок */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg overflow-hidden">
                {/* Эффект градиентной границы при наведении */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800"></div>
                </div>

                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-blue-600 transition-colors leading-tight">
                        Комплексный подход к развитию
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Наша команда специалистов помогает компании сформулировать стратегию развития
                        ИТ-инфраструктуры, которая позволит улучшить работу бизнес-процессов и повысить
                        эффективность использования информационных технологий.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-blue-600 transition-colors leading-tight">
                        Измеримые результаты
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Комплексный ИТ-аудит является важным инструментом для повышения эффективности
                        работы компании и обеспечения ее конкурентоспособности.
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
                    className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      {/* Иконка слева */}
                      <div className="flex-shrink-0">
                        <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Текст с выравниванием по левому краю */}
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                          {metric.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
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
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="flex flex-col h-full">
              <div className="space-y-4 sm:space-y-6 flex-1">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Иконка со статичным фоном */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                        {/* Фоновый квадратик */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {/* Иконка */}
                          <div className="text-white">
                            <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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

        
       {/* CTA блок */}
<div className={`w-full transition-all duration-700 delay-500 mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
  <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-8 lg:p-12 text-center overflow-hidden shadow-2xl border border-blue-500/30">
    {/* Декоративные элементы */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 translate-y-24"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>

    <div className="relative z-10">
      <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4 text-white">
        Готовы к цифровой трансформации?
      </h3>
      <p className="text-sm sm:text-base lg:text-base xl:text-base text-blue-100 mb-8 max-w-2xl mx-auto">
        Начните свой путь к повышению эффективности и снижению затрат уже сегодня.
        Наши эксперты готовы провести комплексный аудит и предложить оптимальные решения.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
        {/* Основная кнопка */}
        <button 
          className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center hover:shadow-2xl justify-center gap-2 flex-1"
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
          <span className="truncate">Запросить консультацию</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 flex-shrink-0" />
        </button>

        {/* Вторичная кнопка */}
        <Link 
          to="/cases"
          className="group border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:shadow-2xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-2 flex-1 min-w-0 backdrop-blur-sm"
        >
          <span className="truncate">Изучить кейсы</span>
        </Link>
      </div>
    </div>
  </div>
</div>
      </div>
      
    </section>
  );
}