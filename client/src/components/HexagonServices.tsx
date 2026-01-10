import ProcessWorkflow from "./ProcessWorkflow";
import ServicesSec from "./ServicesSec";


export default function InteractiveSupportSection() {
  return (
    <>
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark mb-4 sm:mb-5 lg:mb-6">
              Надежное сопровождение вашей системы 1С
            </h2>
            <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark max-w-3xl mx-auto leading-relaxed">
              1C сопровождение представляет собой комплексную поддержку информационных систем на платформе 1С:Предприятие
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

    </>
  );
}