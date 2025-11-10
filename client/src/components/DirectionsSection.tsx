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
        "Создание комплексных IT-инфраструктур и систем кибербезопасности, включая сети, серверы и контроля доступа.",
    },
    {
      icon: Analiz,
      title: "Анализ информационной безопасности",
      description:
        "Выявление уязвимостей, тестирование на проникновение и разработка рекомендаций по усилению защиты данных и систем.",
    },
    {
      icon: Audit,
      title: "Аудит информационных технологий",
      description:
        "Комплексная проверка IT-инфраструктуры на соответствие стандартам, эффективность и безопасность.",
    },
    {
      icon: PO,
      title: "Поставка оборудования и программного обеспечения",
      description:
        "Подбор, закупка и внедрение серверов, сетевого оборудования, лицензионного ПО и средств защиты.",
    },
    {
      icon: Paperwork,
      title: "Сопровождение 1С",
      description:
        "Обслуживание, обновление и настройка платформы 1С для автоматизации бизнес-процессов предприятия.",
    },
    {
      icon: Registration,
      title: "Разработка документации",
      description:
        "Создание технических заданий, регламентов, инструкций и политик безопасности для IT-систем и процессов.",
    },
    {
      icon: Study,
      title: "Обучение сотрудников",
      description:
        "Проведение тренингов по кибербезопасности, работе с ПО и соблюдению корпоративных IT-стандартов.",
    },
    {
      icon: Support,
      title: "Техническая поддержка",
      description:
        "Оперативное решение проблем пользователей, обслуживание оборудования и программного обеспечения.",
    },
  ];

const handleDirectionClick = (title: string) => {
  console.log(`Direction ${title} clicked`);
};

return (
  <section id="directions" className="pt-10 pb-16 bg-white dark:from-slate-900 dark:to-slate-800/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
          Направления деятельности
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Мы работаем с различными отраслями и имеем глубокую экспертизу в
          создании специализированных решений для каждой сферы
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {directions.map((direction, index) => (
          <Card
            key={index}
            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
            data-testid={`card-direction-${index}`}
          >
            <div className="flex flex-col h-full">
              {/* Иконка со статичным фоном */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center mb-4 mt-4 ">
                {/* Фоновый квадратик */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {/* Иконка */}
                  <div className="text-white">
                    <direction.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              {/* Контент */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {direction.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {direction.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);}