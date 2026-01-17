import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Workflow, Wrench, Code } from "lucide-react";
import U1 from "@assets/generated_images/U1.png";
import U2 from "@assets/generated_images/U2.png";
import U3 from "@assets/generated_images/U3.jpg";
import U4 from "@assets/generated_images/U4.jpg";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Комплексные IT-решения для бизнеса",
      description:
        "Предлагаем комплексный аудит текущей ИТ-инфраструктуры с последующей разработкой стратегии развития. Реализуем необходимые преобразования для оптимизации бизнес-процессов и укрепления позиций на рынке",
      image: U1,
      link: "/decisions",
      icon: Settings
    },
    {
      title: "Автоматизация и оптимизация бизнес-процессов компании",
      description:
        "Проводим детальный анализ ваших рабочих процессов и создаем индивидуальные решения, которые экономят время, снижают операционные расходы и предотвращают возможные ошибки",
      image: U2,
      link: "/automationpage",
      icon: Workflow
    },
    {
      title: "1С сопровождение",
      description:
        "Мы обеспечиваем бесперебойную работу вашей системы 1С, оптимизируем бизнес-процессы и поддерживаем актуальность конфигураций для максимальной эффективности",
      image: U3,
      link: "/cSupportPage",
      icon: Wrench
    },
    {
      title: "Разработка ПО",
      description:
        "Профессиональные разработчики реализуют кастомные программные решения, полностью адаптированные под специфические требования каждого клиента",
      image: U4,
      link: "/developmentPage",
      icon: Code
    },
  ];

  const handleLearnMore = (link: string) => {
    if (link && link !== "#") {
      navigate(link);
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 root:bg-white overflow-hidden">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="text-left mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-brown-dark dark:text-beige-light mb-3">
            Наши услуги
          </h2>
          
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0; // Четные индексы - текст слева, нечетные - текст справа
            
            return (
              <div
                key={index}
                className={`
                  flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16
                  ${isEven ? '' : 'lg:flex-row-reverse'}
                `}
              >
                {/* Блок с текстом */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {IconComponent && (
                      <div className="rounded-lg">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-brown dark:text-beige-light" />
                      </div>
                    )}
                    <h3 className="text-md sm:text-base lg:text-2xl xl:text-2xl font-bold text-brown-dark dark:text-beige-light">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm  text-justify lg:text-lg text-brown-dark dark:text-beige-light sm:text-lg leading-relaxed sm:leading-loose">
                    {service.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="relative overflow-hidden inline-flex items-center gap-2 rounded-full 
                  bg-brown-dark border border-brown-dark
                  text-beige-light  font-medium
                  dark:bg-beige dark:text-brown-dark
                  hover:bg-white hover:text-brown-dark
                  dark:hover:border-white
                  dark:hover:text-brown-dark dark:hover:bg-white
                  group
                  px-6
                  text-xs sm:text-sm
                  transition-all duration-300"
                
                    onClick={() => handleLearnMore(service.link)}
                    disabled={!service.link || service.link === "#"}
                    data-testid={`button-service-${index}`}
                  >
                    <span className="relative z-10">
                      Узнать подробнее
                    </span>
                    <ArrowRight className="relative z-10 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>







                {/* Блок с изображением */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Градиентное наложение */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Декор */}
                    <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}