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
    <Card className="group bg-white dark:bg-brown-dark rounded-xl border sm:rounded-2xl dark:hover:shadow-none shadow-lg transition-all duration-300">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-brown-dark dark:text-beige mb-4 sm:mb-6">Подход к работе</h3>

        <div className="space-y-4 sm:space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border dark:border-brown transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brown-dark dark:bg-beige text-white dark:text-brown-dark flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-brown-dark dark:text-beige">{step.step}</h4>
                </div>
                <p className="text-xs sm:text-sm dark:text-beige text-brown-dark">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-beige/20 rounded-lg border dark:border-brown ">
          <p className="text-xs sm:text-sm dark:text-beige text-brown-dark text-center leading-relaxed">
            Команда специалистов ООО «Проф ИТ» предлагает полный спектр услуг по сопровождению, включая техническую поддержку, консультационные услуги, разработку обновлений и доработок.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}