import { Card } from "@/components/ui/card";

export default function DirectionsSection() {
  const directions = [
    {
      title: "Проектирование информационных технологий",
      description:
        "Создание комплексных IT-инфраструктур и систем кибербезопасности.",
    },
    {
      title: "Сопровождение 1С",
      description:
        "Обслуживание, обновление и настройка платформы 1С для автоматизации бизнес-процессов.",
    },
    {
      title: "Аудит информационных технологий",
      description:
        "Комплексная проверка IT-инфраструктуры на соответствие стандартам.",
    },
    {
      title: "Разработка документации",
      description:
        "Создание технических заданий, регламентов, инструкций и политик безопасности для IT-систем.",
    },
    {
      title: "Анализ информационной безопасности",
      description:
        "Выявление уязвимостей и разработка рекомендаций по усилению защиты данных и систем.",
    },
    {
      title: "Поставка оборудования и ПО",
      description:
        "Подбор, закупка и внедрение серверов, сетевого оборудования, лицензионного ПО и средств защиты.",
    },
    {
      title: "Обучение сотрудников",
      description:
        "Проведение тренингов по кибербезопасности, работе с ПО и соблюдению IT-стандартов.",
    },
    {
      title: "Техническая поддержка",
      description:
        "Оперативное решение проблем, обслуживание оборудования и программного обеспечения.",
    },
  ];

  const handleDirectionClick = (title: string) => {
    console.log(`Direction ${title} clicked`);
  };

  return (
    <section id="directions" className="pt-10 pb-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
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
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-50 dark:hover:from-blue-900/20 dark:hover:to-blue-900/20 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              data-testid={`card-direction-${index}`}
              onClick={() => handleDirectionClick(direction.title)}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Верхняя часть - заголовок */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {direction.title}
                  </h3>
                </div>

                {/* Нижняя часть - описание */}
                <div className="mt-auto">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
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