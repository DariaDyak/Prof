import { Card, CardContent } from "@/components/ui/card";

export default function ResultsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="group bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:hover:shadow-none dark:border-slate-700/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-600/50 mb-20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
                  Результат нашего сотрудничества
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Результатом нашей работы будет повышение эффективности работы бизнес-процессов, увеличение производительности и конкурентоспособности вашей компании. Мы обеспечиваем стабильность и надежность работы ИТ-систем, 
                  а также оказываем поддержку на всех этапах использования 1С системы.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">Бесперебойная работа системы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">Сокращение времени выполнения задач</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">Повышение качества обслуживания</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">Адаптация под индивидуальные потребности</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}