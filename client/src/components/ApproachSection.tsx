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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Пошаговая методология внедрения <span className="block text-blue-600 dark:text-blue-400">комплексных IT-решений</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Процесс оценки текущего состояния ИТ-инфраструктуры компании включает анализ всех аспектов 
            информационных технологий: аппаратное и программное обеспечение, сети, безопасность и базы данных.
          </p>
          
        </div>
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 md:px-6">
  {steps.map((step, index) => (
    <Card key={index} className="bg-blue-50 group hover:shadow-lg transition-all duration-300 border-0">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {step.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
      
    </section>
  );
}