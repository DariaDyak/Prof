import { Card, CardContent } from "@/components/ui/card";

export default function ResultsSection() {
  return (
    <section className="bg-white dark:bg-slate-900 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="bg-gradient-to-br from-white to-blue-50/50 group bg-white dark:bg-slate-800 rounded-2xl dark:border-slate-700 border-blue-300 dark:hover:border-blue-600 shadow-lg hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Результат нашего сотрудничества
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Результатом нашей работы будет повышение эффективности работы бизнес-процессов, увеличение производительности и конкурентоспособности вашей компании. Мы обеспечиваем стабильность и надежность работы ИТ-систем, 
                  а также оказываем поддержку на всех этапах использования 1С системы.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
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