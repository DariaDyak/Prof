import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Workflow, Wrench, Code } from "lucide-react"; // Добавлены иконки
import U1 from "@assets/generated_images/U1.png";
import U2 from "@assets/generated_images/U2.png";
import U3 from "@assets/generated_images/U1.png";
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
      icon: Settings // Иконка для этой услуги
    },
    {
      title: "Автоматизация и оптимизация бизнес-процессов компании",
      description:
        "Проводим детальный анализ ваших рабочих процессов и создаем индивидуальные решения, которые экономят время, снижают операционные расходы и предотвращают возможные ошибки.",
      image: U2,
      link: "/automationpage",
      icon: Workflow // Иконка для этой услуги
    },
    {
      title: "1С сопровождение",
      description:
        "Мы обеспечиваем бесперебойную работу вашей системы 1С, оптимизируем бизнес-процессы и поддерживаем актуальность конфигураций для максимальной эффективности.",
      image: U3,
      link: "/cSupportPage",
      icon: Wrench // Иконка для этой услуги
    },
    {
      title: "Разработка ПО",
      description:
        "Профессиональные разработчики реализуют кастомные программные решения, полностью адаптированные под специфические требования каждого клиента.",
      image: U4,
      link: "/developmentPage",
      icon: Code // Иконка для этой услуги
    },
  ];

  const handleLearnMore = (link: string) => {
    if (link && link !== "#") {
      navigate(link);
    }
  };

  return (
    <section id="services" className="pt-10 pb-16 bg-card from-slate-50 to-slate-100  dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto ">
            Команда ООО «Проф ИТ» сделает все возможное, чтобы помочь Вам
            достичь Ваших целей в области информационных технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon; // Получаем компонент иконки
            return (
              <Card
                key={index}
                className="group transition-all duration-300 shadow-lg overflow-hidden flex flex-col bg-white"
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

                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3"> {/* Добавлен flex для выравнивания */}
                    {IconComponent && (
                      <IconComponent className="h-5 w-5 text-blue-600 flex-shrink-0" /> // Маленькая иконка
                    )}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col flex-grow">
                  <p className="leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <Button
                    className="
                      relative
                      overflow-hidden
                      inline-flex items-center gap-2 px-4 py-2 rounded-full 
                      bg-blue-500/20 border border-blue-800/30 
                      text-blue-600 dark:text-blue-400 text-sm font-bold
                      backdrop-blur-sm
                      transition-all duration-1000 ease-out
                      group
                      mt-auto
                      self-start
                    "
                    onClick={() => handleLearnMore(service.link)}
                    disabled={!service.link || service.link === "#"}
                    data-testid={`button-service-${index}`}
                  >
                    {/* Бегущий луч */}
                    <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <span className="relative z-10 transition-all delay-100">
                      Узнать больше
                    </span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 delay-1400" />
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