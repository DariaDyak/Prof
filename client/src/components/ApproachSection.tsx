import { Search, Target, Settings, Shield } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      icon: <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Анализ и аудит",
      description: "Глубокое исследование текущей IT-инфраструктуры, выявление узких мест и потенциала для оптимизации"
    },
    {
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Стратегия решения",
      description: "Разработка комплексной архитектуры с учетом специфики бизнеса и перспектив развития"
    },
    {
      icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Реализация",
      description: "Поэтапное внедрение решений с минимальным влиянием на текущие бизнес-процессы"
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Поддержка",
      description: "Непрерывный мониторинг, оптимизация и масштабирование системы по мере роста бизнеса"
    }
  ];

  return (
    <section className="pt-16 pb-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Пошаговая методология внедрения <span className="block text-blue-600 dark:text-blue-400">комплексных IT-решений</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Процесс оценки текущего состояния ИТ-инфраструктуры компании включает анализ всех аспектов
            информационных технологий
          </p>
        </div>

        {/* Контейнер для центрирования колонок */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-none">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl dark:hover:shadow-none transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Иконка */}
                  <div className="flex-shrink-0">
                    <div className="
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                      bg-gradient-to-br from-blue-500 to-purple-600 
                      rounded-lg sm:rounded-xl flex items-center justify-center 
                      shadow-lg 
                      dark:shadow-blue-900/30 
                      group-hover:shadow-xl 
                      group-hover:shadow-blue-500/30 
                      dark:group-hover:shadow-blue-600/40 
                      transition-all duration-300
                    ">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}