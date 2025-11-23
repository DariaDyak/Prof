import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  { 
    step: "Анализ", 
    description: "Диагностика текущего состояния системы",
  },
  { 
    step: "Планирование", 
    description: "Разработка индивидуального плана работ",
  },
  { 
    step: "Реализация", 
    description: "Выполнение согласованных работ и поддержка",
  },
  { 
    step: "Контроль", 
    description: "Мониторинг и постоянная оптимизация",
  }
];

export default function ProcessWorkflow() {
  return (
    <Card className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Наш подход к работе</h3>
        
        {/* Шаги процесса */}
        <div className="space-y-4 sm:space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">{step.step}</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 text-center leading-relaxed">
            Команда специалистов ООО «Проф ИТ» предлагает полный спектр услуг по сопровождению, включая техническую поддержку, консультационные услуги, разработку обновлений и доработок.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}