import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Shield className="w-6 h-6" />,
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
    icon: <Settings className="w-6 h-6" />,
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
    icon: <BarChart3 className="w-6 h-6" />,
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
    icon: <Users className="w-6 h-6" />,
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
    <Card className="bg-white dark:border-slate-700 shadow-2xl transition-all border-blue-300 duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-6">Наши услуги</h3>
        
        {/* Табы */}
        <div className="flex flex-wrap gap-2 mb-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 min-w-[140px] text-center ${
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
        <div className="space-y-4">
          {/* Заголовок и описание */}
          <div className="flex items-start gap-4 mb-4 ">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center text-white flex-shrink-0`}>
              {services[activeTab].icon}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-foreground">
                {services[activeTab].title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {services[activeTab].description}
              </p>
            </div>
          </div>

          {/* Детали услуги */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services[activeTab].details.map((detail, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}