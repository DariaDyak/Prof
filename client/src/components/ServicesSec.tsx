import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Техническая поддержка",
    description: "Помощь специалистов",
    color: "from-blue-500 to-purple-600",
    details: [
      "Консультации специалистов",
      "Удаленная поддержка", 
      "Экстренная помощь",
      "Обучение пользователей"
    ]
  },
  {
    icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Обновления и доработки",
    description: "Адаптация под ваш бизнес",
    color: "from-blue-500 to-purple-600",
    details: [
      "Регулярные обновления",
      "Индивидуальные доработки",
      "Интеграции с системами",
      "Оптимизация работы"
    ]
  },
  {
    icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Мониторинг и аналитика",
    description: "Проактивный контроль",
    color: "from-blue-500 to-purple-600",
    details: [
      "Проактивный мониторинг",
      "Анализ эффективности",
      "Регулярная отчетность",
      "Рекомендации по улучшению"
    ]
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Консультации",
    description: "Экспертная помощь",
    color: "from-blue-500 to-purple-600",
    details: [
      "Бизнес-консультации",
      "Оптимизация процессов",
      "Обучение сотрудников",
      "Лучшие практики"
    ]
  }
];

export default function ServicesSec() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Наши услуги</h3>
        
        {/* Табы */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center ${
                activeTab === index
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg border-transparent'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-600'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Контент таба */}
        <div className="space-y-3 sm:space-y-4">
          {/* Заголовок и описание */}
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center text-white flex-shrink-0`}>
              {services[activeTab].icon}
            </div>
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                {services[activeTab].title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {services[activeTab].description}
              </p>
            </div>
          </div>

          {/* Детали услуги */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {services[activeTab].details.map((detail, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-foreground leading-tight">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}