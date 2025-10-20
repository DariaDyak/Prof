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
    <section className="py-20 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
        Пошаговая методология внедрения <span className="block text-blue-600 dark:text-blue-400">комплексных IT-решений</span>
      </h2>
      <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Процесс оценки текущего состояния ИТ-инфраструктуры компании включает анализ всех аспектов 
        информационных технологий: аппаратное и программное обеспечение, сети, безопасность и базы данных.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {steps.map((step, index) => (
        <div 
          key={index}
          className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-white w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground  group-hover:text-blue-600 transition-colors duration-300">
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
</section>
  );
}