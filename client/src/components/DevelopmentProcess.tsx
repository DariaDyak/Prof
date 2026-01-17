import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Code2, TestTube2, Rocket, Settings } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Анализ",
    title: "Исследование и планирование",
    description: "Глубокий анализ бизнес-процессов и формирование технического задания"
  },
  {
    icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Дизайн",
    title: "Проектирование архитектуры",
    description: "Создание прототипов, проектирование UX/UI и архитектуры решения"
  },
  {
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Разработка",
    title: "Реализация проекта",
    description: "Написание кода, реализация функционала и интеграция систем"
  },
  {
    icon: <TestTube2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Тестирование",
    title: "QA и оптимизация",
    description: "Всестороннее тестирование, исправление ошибок и оптимизация производительности"
  },
  {
    icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Запуск",
    title: "Деплой и внедрение",
    description: "Развертывание на продакшн, обучение пользователей и запуск проекта"
  },
  {
    icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    step: "Поддержка",
    title: "Сопровождение",
    description: "Техническая поддержка, обновления и развитие проекта"
  }
];

export default function DevelopmentProcess() {
  return (
    <section className="pt-8 pb-16 dark:bg-beige-light overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark mb-4 sm:mb-5 lg:mb-6">
            Процесс разработки
          </h2>
          <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark max-w-3xl mx-auto leading-relaxed">
            Четко структурированный подход к созданию программного обеспечения,
            обеспечивающий качество и соблюдение сроков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((item, index) => (
            <Card
  key={index}
  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 "
>
  <CardContent className="p-4 sm:p-6 relative z-10">
    <div className="flex justify-between items-start mb-3 sm:mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brown-dark text-beige-light text-xs flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-brown-dark">
          {item.step}
        </span>
      </div>

      {/* Обновленный блок иконки с новой анимацией */}
      <div className="
        w-10 h-10 sm:w-12 sm:h-12 
        bg-brown-dark
        rounded-lg sm:rounded-xl 
        flex items-center justify-center text-beige-light
        shadow-lg 
        transition-all duration-300
      ">
        {item.icon}
      </div>
    </div>

    <h3 className="text-base sm:text-lg font-bold text-brown-dark mb-2 leading-tight">
      {item.title}
    </h3>
    <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark leading-relaxed">
      {item.description}
    </p>
  </CardContent>
</Card>
          ))}
        </div>
      </div>
    </section>
  );
}