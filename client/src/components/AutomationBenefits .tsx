import { Card, CardContent } from "@/components/ui/card";

export default function AutomationBenefits() {
  return (
    <section className="pt-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Профессиональный подход к автоматизации <span className="block text-blue-600 dark:text-blue-400">бизнес-процессов</span>
          </h2>
        </div>

        <div className="group backdrop-blur-sm transition-all duration-500 mb-20">
          <div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-base xl:text-base text-foreground leading-relaxed text-justify">
                <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent ">
                  Автоматизация операционных процессов
                </strong> — ключевой этап в цифровой трансформации компании,
                позволяющий достичь значительного роста производительности и оптимизации ресурсов.
                Наша команда проводит детальный анализ бизнес-процессов, выявляя области для автоматизации,
                и разрабатывает индивидуальные решения с применением современных технологий.
              </p>

              <p className="text-sm sm:text-base lg:text-base xl:text-base text-foreground leading-relaxed text-justify">
                Внедрение автоматизированных систем позволяет не только сократить временные и финансовые затраты,
                но и минимизировать человеческий фактор, обеспечивая стабильно высокое качество выполнения задач.
              </p>
            </div>

            {/* Итоговый блок */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl shadow-inner">
              <div className="flex justify-center items-center text-center">
                <p className="text-sm sm:text-sm lg:text-base xl:text-base text-blue-800 dark:text-blue-200 font-semibold leading-relaxed">
                  Результат: увеличение эффективности работы и снижение затрат на выполнение бизнес-процессов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}