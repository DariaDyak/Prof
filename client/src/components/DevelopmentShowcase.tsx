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
    <section className="pt-16 pb-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Комплексные решения
            <span className="block text-blue-600 dark:text-blue-400">для вашего бизнеса</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Разрабатываем программное обеспечение любой сложности и масштаба,
            становясь надежным технологическим партнером для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 dark:hover:shadow-none hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  {/* Обновленный блок иконки с новой анимацией */}
                  <div className="
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
            bg-gradient-to-br from-blue-500 to-purple-600 
            rounded-lg sm:rounded-xl 
            flex items-center justify-center text-white
            shadow-lg 
            dark:shadow-blue-900/30
            group-hover:shadow-xl 
            group-hover:shadow-blue-500/30 
            dark:group-hover:shadow-blue-700/50
            transition-all duration-300
            mb-3 sm:mb-4
          ">
                    {solution.icon}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className="space-y-1 sm:space-y-2 mt-auto pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-foreground/80 leading-tight">{feature}</span>
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