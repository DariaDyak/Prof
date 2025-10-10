import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Analiz,
      title: "Анализ и оценка информационной безопасности",
      description:
        "Выявление уязвимостей, тестирование на проникновение и разработка рекомендаций по усилению защиты данных и систем.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Audit,
      title: "Аудит информационных технологий",
      description:
        "Комплексная проверка IT-инфраструктуры на соответствие стандартам, эффективность и безопасность.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: PO,
      title: "Поставка оборудования и программного обеспечения",
      description:
        "Подбор, закупка и внедрение серверов, сетевого оборудования, лицензионного ПО и средств защиты.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Paperwork,
      title: "Сопровождение 1С",
      description:
        "Обслуживание, обновление и настройка платформы 1С для автоматизации бизнес-процессов предприятия.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Registration,
      title: "Разработка документации",
      description:
        "Создание технических заданий, регламентов, инструкций и политик безопасности для IT-систем и процессов.",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Study,
      title: "Обучение сотрудников",
      description:
        "Проведение тренингов по кибербезопасности, работе с ПО и соблюдению корпоративных IT-стандартов.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Support,
      title: "Техническая поддержка",
      description:
        "Оперативное решение проблем пользователей, обслуживание оборудования и программного обеспечения.",
      gradient: "from-slate-600 to-slate-700",
    },
  ];

  const handleDirectionClick = (title: string) => {
    console.log(`Direction ${title} clicked`);
  };

  return (
    <section id="directions" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="
  inline-flex 
  items-center 
  gap-2 
  px-4 
  py-2 
  transition-all 
  duration-300 
  ease-in-out 
  rounded-full 
  bg-blue-500/10 
  border 
  border-blue-500/20 
  text-blue-600 
  dark:text-blue-400 
  text-sm 
  font-medium 
  mb-8 
  backdrop-blur-sm
  hover:scale-105
">
  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
  Наши услуги
</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Направления деятельности
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы работаем с различными отраслями и имеем глубокую экспертизу в
            создании специализированных решений для каждой сферы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm cursor-pointer"
              onClick={() => handleDirectionClick(direction.title)}
              data-testid={`card-direction-${index}`}
            >
              {/* Анимированный градиентный фон */}
              <div className={`absolute inset-0 bg-gradient-to-br ${direction.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Эффект свечения при наведении */}
              <div className={`absolute inset-0 bg-gradient-to-br ${direction.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 scale-150 group-hover:scale-100`}></div>
              
              <CardContent className="p-6 relative z-10 flex flex-col h-full">
                {/* Иконка с градиентом */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${direction.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <direction.icon className="h-6 w-6" />
                </div>

                {/* Заголовок */}
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight flex-grow">
                  {direction.title}
                </h3>

                {/* Описание */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {direction.description}
                </p>

                
              </CardContent>

              {/* Эффект границы при наведении */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${direction.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[1px] rounded-lg bg-white dark:bg-slate-800"></div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
}