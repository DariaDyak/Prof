import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, TrendingUp, Shield, Brain, Target } from "lucide-react";

export default function AutomationSection() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Повышение эффективности",
      description: "Сокращение времени выполнения операционных процессов до 70% за счет автоматизации рутинных задач",
      metrics: "Эффективность ↑ 70%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Экономия времени",
      description: "Значительное сокращение временных затрат на выполнение повторяющихся бизнес-процессов",
      metrics: "Время ↓ 60%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Снижение затрат",
      description: "Оптимизация расходов на выполнение операционных процессов и уменьшение операционных ошибок",
      metrics: "Затраты ↓ 45%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Повышение качества",
      description: "Минимизация человеческого фактора и стандартизация процессов для стабильно высокого качества",
      metrics: "Качество ↑ 85%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Умная аналитика",
      description: "Мониторинг и анализ эффективности процессов с рекомендациями по дальнейшей оптимизации",
      metrics: "Аналитика ↑ 90%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Конкурентное преимущество",
      description: "Ускорение бизнес-процессов дает значительное преимущество на рынке",
      metrics: "Продуктивность ↑ 65%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    }
  ];

  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
            Оптимизация затрат<span className="block text-blue-600 dark:text-blue-400"> и повышение качества </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Результатом нашей работы будет повышение эффективности бизнес-процессов, увеличение производительности и сокращение затрат на их выполнение
          </p>
        </div>

        {/* Основные преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              
              <CardContent className="p-8 relative flex flex-col h-full">
                {/* Иконка */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Заголовок */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                {/* Описание */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {benefit.description}
                </p>
                
                {/* Метрики - в левом нижнем углу */}
                <div className="flex items-center justify-start mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {benefit.metrics}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}