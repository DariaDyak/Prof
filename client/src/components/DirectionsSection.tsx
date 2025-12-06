import { Card } from "@/components/ui/card";
import {
  Server as BuildingInfo,
  BarChart3 as Analiz,
  Settings as Paperwork,
  FileText as Registration,
  Users as Study,
  Headphones as Support,
  ClipboardCheck as Audit,
  Package as PO,
} from "lucide-react";

export default function DirectionsSection() {
  const directions = [
    {
      icon: BuildingInfo,
      title: "Проектирование информационных технологий",
      description:
        "Создание комплексных IT-инфраструктур и систем кибербезопасности.",
    },
    {
      icon: Paperwork,
      title: "Сопровождение 1С",
      description:
        "Обслуживание, обновление и настройка платформы 1С для автоматизации бизнес-процессов.",
    },
    {
      icon: Audit,
      title: "Аудит информационных технологий",
      description:
        "Комплексная проверка IT-инфраструктуры на соответствие стандартам.",
    },
    {
      icon: Registration,
      title: "Разработка документации",
      description:
        "Создание технических заданий, регламентов, инструкций и политик безопасности для IT-систем.",
    },
    
    {
      icon: Analiz,
      title: "Анализ информационной безопасности",
      description:
        "Выявление уязвимостей и разработка рекомендаций по усилению защиты данных и систем.",
    },
    {
      icon: PO,
      title: "Поставка оборудования и ПО",
      description:
        "Подбор, закупка и внедрение серверов, сетевого оборудования, лицензионного ПО и средств защиты.",
    },
    {
      icon: Study,
      title: "Обучение сотрудников",
      description:
        "Проведение тренингов по кибербезопасности, работе с ПО и соблюдению IT-стандартов.",
    },
    {
      icon: Support,
      title: "Техническая поддержка",
      description:
        "Оперативное решение проблем, обслуживание оборудования и программного обеспечения.",
    },
  ];

  const handleDirectionClick = (title: string) => {
    console.log(`Direction ${title} clicked`);
  };

  return (
    <section id="directions" className="pt-10 pb-16 from-slate-50 to-slate-100  dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Направления деятельности
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы работаем с различными отраслями и имеем глубокую экспертизу в
            создании специализированных решений для каждой сферы
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {directions.map((direction, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              data-testid={`card-direction-${index}`}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Верхняя часть - заголовок и иконка */}
                <div className="flex-1">
                  {/* Иконка со статичным фоном */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4">
                    {/* Фоновый квадратик */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {/* Иконка */}
                      <div className="text-white">
                        <direction.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Заголовок притягивается к верху */}
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {direction.title}
                  </h3>
                </div>

                {/* Нижняя часть - текст притягивается к низу */}
                <div className="mt-auto">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {direction.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}