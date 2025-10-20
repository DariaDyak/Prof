import ProcessWorkflow from "./ProcessWorkflow";
import ServicesSec from "./ServicesSec";
import ResultsSection from "./ResultsSection";

export default function InteractiveSupportSection() {
  return (
    <>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Надежное сопровождение <span className="block text-blue-600 dark:text-blue-400">вашей системы 1С</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              1С сопровождение — это услуга, которая позволяет компаниям поддерживать работоспособность и эффективность системы управления и автоматизации бизнес-процессов в 1С.
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