import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, TrendingUp, Shield, Brain, Target } from "lucide-react";

export default function AutomationSection() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Повышение эффективности",
      description: "Сокращение времени выполнения операционных процессов до 70% за счет автоматизации рутинных задач",
      metrics: "Эффективность ↑ 70%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Экономия времени",
      description: "Значительное сокращение временных затрат на выполнение повторяющихся бизнес-процессов",
      metrics: "Время ↓ 60%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Снижение затрат",
      description: "Оптимизация расходов на выполнение операционных процессов и уменьшение операционных ошибок",
      metrics: "Затраты ↓ 45%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Повышение качества",
      description: "Минимизация человеческого фактора и стандартизация процессов для стабильно высокого качества",
      metrics: "Качество ↑ 85%",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Умная аналитика",
      description: "Мониторинг и анализ эффективности процессов с рекомендациями по дальнейшей оптимизации",
      metrics: "Аналитика ↑ 90%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Конкурентное преимущество",
      description: "Ускорение бизнес-процессов дает значительное преимущество на рынке",
      metrics: "Продуктивность ↑ 65%",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Оптимизация затрат и <span className="block text-blue-600 dark:text-blue-400">повышение качества </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Результатом нашей работы будет повышение эффективности бизнес-процессов, увеличение производительности и сокращение затрат на их выполнение, что позволит вашей компании быть более конкурентоспособной на рынке
          </p>
          
        </div> 


        {/* Основные преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <CardContent className="p-8 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground/70">
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