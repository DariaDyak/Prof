import { Card, CardContent } from "@/components/ui/card";

export default function ResultsSection() {
  return (
    <section className=" dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 mb-20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Результат нашего сотрудничества
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Результатом нашей работы будет повышение эффективности работы бизнес-процессов, увеличение производительности и конкурентоспособности вашей компании. Мы обеспечиваем стабильность и надежность работы ИТ-систем, а также оказываем поддержку на всех этапах использования 1С системы.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-foreground">Бесперебойная работа системы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-foreground">Сокращение времени выполнения задач</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-foreground">Повышение качества обслуживания</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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