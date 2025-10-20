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
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Наш подход к работе</h3>
        
        {/* Шаги процесса */}
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-slate-700/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{step.step}</h4>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
            Команда специалистов ООО «Проф ИТ» предлагает полный спектр услуг по сопровождению, включая техническую поддержку, консультационные услуги, разработку обновлений и доработок.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}