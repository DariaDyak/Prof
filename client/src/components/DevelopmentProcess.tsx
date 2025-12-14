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
    <section className="pt-10 pb-16 bg-card from-slate-50 to-slate-100  dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Процесс разработки
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Четко структурированный подход к созданию программного обеспечения,
            обеспечивающий качество и соблюдение сроков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((item, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl dark:hover:shadow-none border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 relative z-10">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {item.step}
                    </span>
                  </div>

                  {/* Обновленный блок иконки с новой анимацией */}
                  <div className="
        w-10 h-10 sm:w-12 sm:h-12 
        bg-gradient-to-br from-blue-500 to-purple-600 
        rounded-lg sm:rounded-xl 
        flex items-center justify-center text-white
        shadow-lg 
        dark:shadow-blue-900/30
        group-hover:shadow-xl 
        group-hover:shadow-blue-500/30 
        dark:group-hover:shadow-blue-700/50
        transition-all duration-300
      ">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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