import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Анализ процессов",
      description: "Детальное исследование текущих бизнес-процессов и выявление точек для автоматизации"
    },
    {
      step: "02",
      title: "Разработка решения",
      description: "Создание индивидуальной архитектуры автоматизации с использованием передовых технологий"
    },
    {
      step: "03",
      title: "Внедрение",
      description: "Поэтапная имплементация с минимальным влиянием на текущие операционные процессы"
    },
    {
      step: "04",
      title: "Оптимизация",
      description: "Непрерывный мониторинг и улучшение автоматизированных систем"
    }
  ];

  return (
    <section className="pb-6 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Обводка вокруг всей секции */}
        <div className="rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-6">
              Процесс внедрения автоматизации
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Комплексный подход к автоматизации, обеспечивающий плавный переход и максимальную эффективность
            </p>
          </div>

          {/* Сетка шагов процесса */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Карточка шага */}
                <Card className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 h-full">
                  <CardContent className="p-0">
                    {/* Номер шага */}
                    <div className="text-5xl font-black text-slate-200 dark:text-slate-700 mb-4 group-hover:text-primary/20 transition-colors">
                      {step.step}
                    </div>

                    {/* Заголовок и описание */}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}