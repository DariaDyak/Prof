import { Search, Target, Settings, Shield } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      icon: <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Анализ и аудит",
      description: "Исследование текущей IT-инфраструктуры, выявление потенциала для оптимизации"
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
    <section className="pt-12 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark dark:text-beige-light mb-6 sm:mb-5 lg:mb-6">
            Пошаговая методология внедрения <span className="block text-brown/70 dark:text-beige/80">комплексных IT-решений</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige-light leading-relaxed mb-6">
            Процесс оценки текущего состояния ИТ-инфраструктуры компании включает анализ всех аспектов
            информационных технологий
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-none">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-brown-dark/95 rounded-xl sm:rounded-2xl p-4 sm:p-6 border shadow-lg "
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                      bg-brown-dark 
                      dark:from-beige/20 dark:to-beige/10
                      rounded-lg sm:rounded-xl flex items-center justify-center 
                      shadow-lg 
                      shadow-brown/20 
                      transition-all duration-300
                    ">
                      <div className="text-beige-light dark:text-beige">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base lg:text-base xl:text-base font-bold text-brown-dark transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark leading-relaxed mt-2">
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