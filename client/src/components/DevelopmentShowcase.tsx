import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Shield, Zap, Users } from "lucide-react";

const solutions = [
  {
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Веб-приложения",
    description: "Современные веб-решения с адаптивным дизайном и высокой производительностью",
    features: ["Сайты", "Админ панели", "Дашборды"]
  },
  {
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Базы данных",
    description: "Проектирование и оптимизация баз данных для эффективного хранения и обработки информации",
    features: ["SQL/Postgres", "Миграции", "Бэкапы"]
  },
  {
    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Десктоп приложения",
    description: "Кроссплатформенные настольные приложения для решения бизнес-задач",
    features: ["Windows/Linux", "Нативный UI", "Интеграции"]
  },
  {
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    title: "Безопасность",
    description: "Внедрение систем безопасности и защита данных на всех уровнях приложения",
    features: ["Шифрование", "Аудит", "Защита от атак"]
  }
];

export default function DevelopmentShowcase() {
  return (
    <section className="pt-16 pb-16 bg-beige-light dark:bg-brown-dark overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold dark:text-beige text-brown-dark mb-4 sm:mb-5 lg:mb-6">
            Комплексные решения
            <span> для вашего бизнеса</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-base xl:text-base dark:text-beige text-brown-dark max-w-3xl mx-auto leading-relaxed">
            Разрабатываем программное обеспечение любой сложности и масштаба,
            становясь надежным технологическим партнером для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group bg-white  rounded-xl sm:rounded-2xl border  dark:hover:shadow-none  shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  {/* Обновленный блок иконки с новой анимацией */}
                  <div className="
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
            bg-brown-dark 
            rounded-lg sm:rounded-xl 
            flex items-center justify-center text-white
            transition-all duration-300
            mb-3 sm:mb-4
          ">
                    {solution.icon}
                  </div>

                  <h3 className="text-base sm:text-base lg:text-base font-bold text-brown-dark mb-2 sm:mb-3 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brown-dark mb-3 sm:mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className="space-y-1 sm:space-y-2 mt-auto pt-3 sm:pt-4 border-t">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-1.5 bg-brown-dark rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-brown-dark leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}