import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, TrendingUp, Shield, Brain, Target } from "lucide-react";

export default function AutomationSection() {
  const benefits = [
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Повышение эффективности",
      description: "Сокращение времени выполнения операционных процессов до 70% за счет автоматизации рутинных задач",
      metrics: "Эффективность ↑ 70%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Экономия времени",
      description: "Значительное сокращение временных затрат на выполнение повторяющихся бизнес-процессов",
      metrics: "Время ↓ 60%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Снижение затрат",
      description: "Оптимизация расходов на выполнение операционных процессов и уменьшение операционных ошибок",
      metrics: "Затраты ↓ 45%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Повышение качества",
      description: "Минимизация человеческого фактора и стандартизация процессов для стабильно высокого качества",
      metrics: "Качество ↑ 85%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Умная аналитика",
      description: "Мониторинг и анализ эффективности процессов с рекомендациями по дальнейшей оптимизации",
      metrics: "Аналитика ↑ 90%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Конкурентное преимущество",
      description: "Ускорение бизнес-процессов дает значительное преимущество на рынке",
      metrics: "Продуктивность ↑ 65%",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    }
  ];

  return (
    <section className="pt-16 pb-10 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Оптимизация затрат<span className="block text-blue-600 dark:text-blue-400"> и повышение качества </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Результатом нашей работы будет повышение эффективности бизнес-процессов, увеличение производительности и сокращение затрат на их выполнение
          </p>
        </div>

        {/* Основные преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-14">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              
              <CardContent className="p-4 sm:p-6 lg:p-8 relative flex flex-col h-full">
                {/* Иконка */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Заголовок */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                  {benefit.title}
                </h3>
                
                {/* Описание */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-1">
                  {benefit.description}
                </p>
                
                {/* Метрики - в левом нижнем углу */}
                <div className="flex items-center justify-start mt-auto pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
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