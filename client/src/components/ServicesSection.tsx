import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Workflow, Wrench, Code } from "lucide-react"; // Добавлены иконки
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
        "Предлагаем комплексный аудит текущей ИТ-инфраструктуры с последующей разработкой стратегии развития. Реализуем необходимые преобразования для оптимизации бизнес-процессов и укрепления позиций на рынке.",
      image: U1,
      link: "/decisions",
      icon: Settings
    },
    {
      title: "Автоматизация и оптимизация бизнес-процессов компании",
      description:
        "Проводим детальный анализ ваших рабочих процессов и создаем индивидуальные решения, которые экономят время, снижают операционные расходы и предотвращают возможные ошибки.",
      image: U2,
      link: "/automationpage",
      icon: Workflow
    },
    {
      title: "1С сопровождение",
      description:
        "Мы обеспечиваем бесперебойную работу вашей системы 1С, оптимизируем бизнес-процессы и поддерживаем актуальность конфигураций для максимальной эффективности.",
      image: U3,
      link: "/cSupportPage",
      icon: Wrench
    },
    {
      title: "Разработка ПО",
      description:
        "Профессиональные разработчики реализуют кастомные программные решения, полностью адаптированные под специфические требования каждого клиента.",
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
    <section id="services" className="pt-10 pb-14 bg-card from-slate-50 to-slate-100  dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Наши услуги
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Команда ООО «Проф ИТ» сделает все возможное, чтобы помочь Вам
            достичь Ваших целей в области информационных технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg transition-all duration-300 overflow-hidden flex flex-col bg-white"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0  from-background/30 via-background/15 to-transparent" />
                  <div className="absolute bottom-4 right-4"></div>
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg lg:text-xl flex items-start gap-2 sm:gap-3">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="leading-tight">{service.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 flex flex-col flex-grow p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <Button
  variant="ghost"
  className="relative overflow-hidden inline-flex items-center justify-start gap-2 rounded-full 
    text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
    font-semibold sm:font-bold
    group
    px-0 py-2 sm:py-3
    text-sm sm:text-base
    hover:bg-transparent
    transition-all duration-300"
  onClick={() => handleLearnMore(service.link)}
  disabled={!service.link || service.link === "#"}
  data-testid={`button-service-${index}`}
>
  <span className="relative z-10">
    Узнать подробнее
  </span>
  <ArrowRight className="relative z-10 h-3 w-3 sm:h-4 sm:w-4 " />
</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}