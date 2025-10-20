import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Settings, BarChart3, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Техническая поддержка",
    color: "from-blue-500 to-cyan-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
    <>
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-800 dark:to-purple-900/20">
  <CardContent className="p-8">
    <h3 className="text-2xl font-bold text-foreground mb-6">Наши услуги</h3>
    
    {/* Табы */}
    <div className="flex flex-wrap gap-2 mb-6">
      {services.map((service, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 min-w-[140px] text-center ${
            activeTab === index
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {service.title}
        </button>
      ))}
    </div>

    {/* Контент таба с фиксированными высотами */}
<div className="space-y-0">
  <div className="flex items-start space-x-4 min-h-[80px]">
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
      {services[activeTab].icon}
    </div>
    <div className="min-h-[80px] flex flex-col">
      <h4 className="text-base font-semibold text-foreground leading-tight">
        {services[activeTab].title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {services[activeTab].description}
      </p>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-3 min-h-[120px]">
    {services[activeTab].details.map((detail, idx) => (
      <div 
        key={idx} 
        className="flex items-center space-x-2 p-3 bg-white/50 dark:bg-slate-700/30 rounded-lg border border-gray-200 dark:border-gray-600 min-h-[48px]"
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
        <span className="text-sm text-foreground leading-tight">{detail}</span>
      </div>
    ))}
  </div>
</div>
  </CardContent>
</Card>

      {/* CTA блок */}
      <Card className="border-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardContent className="p-6 text-center">
          <h4 className="text-lg font-semibold mb-2">Готовы к сотрудничеству?</h4>
          <p className="text-blue-100 text-sm mb-4">
            Оставьте заявку и получите бесплатную консультацию
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center mx-auto">
            Обсудить проект
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </CardContent>
      </Card>
    </>
  );
}