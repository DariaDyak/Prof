import { Card, CardContent } from "@/components/ui/card";

export default function AutomationBenefits() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Профессиональный подход к автоматизации
            <span className="block text-blue-600 dark:text-blue-400">бизнес-процессов</span>
          </h2>
        </div>

        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-3xl transition-all duration-500 mb-20">
          <CardContent className="p-8">
            {/* Основной текст */}
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-lg">
                <strong>Автоматизация операционных процессов</strong> — ключевой этап в цифровой трансформации компании, 
                позволяющий достичь значительного роста производительности и оптимизации ресурсов.
                Наша команда проводит детальный анализ бизнес-процессов, выявляя области для автоматизации, 
                и разрабатывает индивидуальные решения с применением современных технологий.</p>
              
              <p className="text-foreground leading-relaxed text-lg">
                Внедрение автоматизированных систем позволяет не только сократить временные и финансовые затраты, 
                но и минимизировать человеческий фактор, обеспечивая стабильно высокое качество выполнения задач.
              </p>
            </div>

            {/* Итоговый блок */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center justify-center space-x-3">
                
                <p className="text-lg text-blue-700 dark:text-blue-300 text-center font-semibold">
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