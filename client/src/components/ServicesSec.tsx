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
    <Card className="bg-white rounded-xl sm:rounded-2xl border border-beige/30 shadow-lg transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-brown-dark mb-4 sm:mb-6">Наши услуги</h3>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center ${
                activeTab === index
                  ? 'bg-brown-dark text-white dark:text-white shadow-lg border-transparent'
                                    : 'bg-white dark:text-brown-dark hover:bg-beige dark:hover:text-brown-dark dark:hover:bg-beige'
                                    }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Контент таба */}
        <div className="space-y-3 sm:space-y-4">
          {/* Заголовок и описание */}
          <div className="flex items-start gap-3 sm:gap-4 mb-3 mt-6 sm:mb-4">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brown-dark flex items-center justify-center text-beige-light flex-shrink-0`}>
              {services[activeTab].icon}
            </div>
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-semibold text-brown-dark leading-tight">
                {services[activeTab].title}
              </h4>
              <p className="text-xs sm:text-sm text-brown-dark mt-1">
                {services[activeTab].description}
              </p>
            </div>
          </div>

          {/* Детали услуги */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {services[activeTab].details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-beige/30 transition-all duration-300 bg-white hover:shadow-md hover:border-beige/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-brown-dark leading-tight">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 bg-gradient-to-r from-beige/10 to-beige/30 rounded-2xl p-6 border border-beige/30">
          <h3 className="text-lg sm:text-xl font-bold text-brown-dark mb-4 sm:mb-6">Мы гарантируем:</h3>
          <ul className="space-y-5">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
              <span className="text-brown-dark text-xs sm:text-sm">Бесперебойную работу системы</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
              <span className="text-brown-dark text-xs sm:text-sm">Сокращение времени выполнения задач</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
              <span className="text-brown-dark text-xs sm:text-sm">Повышение качества обслуживания</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
              <span className="text-brown-dark text-xs sm:text-sm">Адаптацию под индивидуальные потребности</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}