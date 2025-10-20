import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Code2, TestTube2, Rocket, Settings } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    step: "Анализ",
    title: "Исследование и планирование",
    description: "Глубокий анализ бизнес-процессов и формирование технического задания"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    step: "Дизайн",
    title: "Проектирование архитектуры",
    description: "Создание прототипов, проектирование UX/UI и архитектуры решения"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    step: "Разработка",
    title: "Реализация проекта",
    description: "Написание кода, реализация функционала и интеграция систем"
  },
  {
    icon: <TestTube2 className="w-6 h-6" />,
    step: "Тестирование",
    title: "QA и оптимизация",
    description: "Всестороннее тестирование, исправление ошибок и оптимизация производительности"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    step: "Запуск",
    title: "Деплой и внедрение",
    description: "Развертывание на продакшн, обучение пользователей и запуск проекта"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    step: "Поддержка",
    title: "Сопровождение",
    description: "Техническая поддержка, обновления и развитие проекта"
  }
];

export default function DevelopmentProcess() {
  return (
    <section className=" dark:from-slate-900 dark:to-purple-900/10 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Процесс разработки
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Четко структурированный подход к созданию программного обеспечения, 
            обеспечивающий качество и соблюдение сроков
          </p>
        </div>

        <div className="pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm"
            >
              <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {item.step}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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