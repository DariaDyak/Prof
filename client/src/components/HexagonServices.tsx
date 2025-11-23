import ProcessWorkflow from "./ProcessWorkflow";
import ServicesSec from "./ServicesSec";
import ResultsSection from "./ResultsSection";

export default function InteractiveSupportSection() {
  return (
    <>
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Надежное сопровождение <span className="block text-blue-600 dark:text-blue-400">вашей системы 1С</span>
            </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Позволяет компаниям поддерживать работоспособность и эффективность системы управления и автоматизации бизнес-процессов
            </p>
        </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Левая колонка - Процесс работы */}
            <div className="space-y-8">
              <ProcessWorkflow />
            </div>

            {/* Правая колонка - Услуги с табами */}
            <div className="space-y-6">
              <ServicesSec />
            </div>
          </div>
        </div>
      </section>

      {/* Отдельная секция с итоговым блоком */}
      <ResultsSection />
    </>
  );
}