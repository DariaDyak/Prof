// components/BusinessImpactSection.jsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
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
        <div className="text-center mt-10 mb-16">
          <h2 className="font-Montserrat text-2xl lg:text-4xl font-bold text-foreground mb-6">
            Стратегическое <span className="text-blue-600">преимущество</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Превращаем ИТ-инфраструктуру в мощный инструмент роста вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* Левый столбец */}
          <div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="space-y-6">
              {/* Основной текстовый блок */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg overflow-hidden">
                {/* Эффект градиентной границы при наведении */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-slate-800"></div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-blue-600 transition-colors">
                        Комплексный подход к развитию
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Наша команда специалистов помогает компании сформулировать стратегию развития
                        ИТ-инфраструктуры, которая позволит улучшить работу бизнес-процессов и повысить
                        эффективность использования информационных технологий.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-2 text-green-600 transition-colors duration-300">
                        Измеримые результаты
                      </h4>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Комплексный ИТ-аудит является важным инструментом для повышения эффективности
                        работы компании и обеспечения ее конкурентоспособности.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блок с метриками */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="group text-center bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <metric.icon className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">{metric.value}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

                    {/* Правый столбец - Блок с преимуществами */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="flex flex-col h-full">
              <div className="space-y-6 flex-1">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Иконка со статичным фоном */}
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                        {/* Фоновый квадратик */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {/* Иконка */}
                          <div className="text-white">
                            <feature.icon className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
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
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-500 mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white text-center overflow-hidden shadow-2xl">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 translate-y-24"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Готовы к цифровой трансформации?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Начните свой путь к повышению эффективности и снижению затрат уже сегодня.
                Наши эксперты готовы провести комплексный аудит и предложить оптимальные решения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
  className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 shadow-lg hover:shadow-xl flex items-center gap-2"
  onClick={() => {
    // Если мы не на главной странице, переходим на главную
    if (window.location.pathname !== '/') {
      window.location.href = '/#contacts';
    } else {
      // Если уже на главной, скроллим к контактам
      const element = document.getElementById('contacts');
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }}
>
  Запросить консультацию
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
</button>
                <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Изучить кейсы
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}