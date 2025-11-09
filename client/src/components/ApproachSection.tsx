import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Target, Settings, Shield } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Анализ и аудит",
      description: "Глубокое исследование текущей IT-инфраструктуры, выявление узких мест и потенциала для оптимизации"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Стратегия решения",
      description: "Разработка комплексной архитектуры с учетом специфики бизнеса и перспектив развития"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Реализация",
      description: "Поэтапное внедрение решений с минимальным влиянием на текущие бизнес-процессы"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Поддержка",
      description: "Непрерывный мониторинг, оптимизация и масштабирование системы по мере роста бизнеса"
    }
  ];

  return (
    <section className="pt-20 pb-16 bg-white dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
     <div className="container mx-auto px-4 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
      Пошаговая методология внедрения <span className="block text-blue-600 dark:text-blue-400">комплексных IT-решений</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      Процесс оценки текущего состояния ИТ-инфраструктуры компании включает анализ всех аспектов 
      информационных технологий
    </p>
  </div>

  {/* Контейнер для центрирования колонок */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-none">
      {steps.map((step, index) => (
        <div 
          key={index}
          className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="flex items-start gap-4">
            {/* Иконка со статичным фоном */}
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
              {/* Фоновый квадратик */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                {/* Иконка */}
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
}