import { Card, CardContent } from "@/components/ui/card";

export default function AutomationBenefits() {
  return (
    <section className="from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Профессиональный подход к автоматизации <span className="block text-blue-600 dark:text-blue-400">бизнес-процессов</span>
          </h2>
        </div>

        <Card className="group bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:hover:shadow-none dark:border-slate-700/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-600/50 mb-20">
  <CardContent className="p-8">
    {/* Основной текст */}
    <div className="space-y-6">
      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground leading-relaxed text-lg">
        <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Автоматизация операционных процессов
        </strong> — ключевой этап в цифровой трансформации компании, 
        позволяющий достичь значительного роста производительности и оптимизации ресурсов.
        Наша команда проводит детальный анализ бизнес-процессов, выявляя области для автоматизации, 
        и разрабатывает индивидуальные решения с применением современных технологий.
      </p>
      
      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground leading-relaxed text-lg">
        Внедрение автоматизированных систем позволяет не только сократить временные и финансовые затраты, 
        но и минимизировать человеческий фактор, обеспечивая стабильно высокое качество выполнения задач.
      </p>
    </div>

    {/* Итоговый блок */}
    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-inner">
      <div className="flex items-start space-x-4">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-800 dark:text-blue-200 font-semibold leading-relaxed">
          Результат: увеличение эффективности работы на 40-60% и снижение затрат на выполнение бизнес-процессов
        </p>
      </div>
    </div>
  </CardContent>
</Card>
      </div>
    </section>
  );
}