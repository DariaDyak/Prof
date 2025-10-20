import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Service1 from "@assets/generated_images/Service1.jpg";
import Service3 from "@assets/generated_images/Service2.jpg";
import Service4 from "@assets/generated_images/Service3.jpg";
import Service2 from "@assets/generated_images/Service4.jpg";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Комплексные IT-решения для бизнеса",
      description:
        "Предлагаем комплексный аудит текущей ИТ-инфраструктуры с последующей разработкой стратегии развития. Реализуем необходимые преобразования для оптимизации бизнес-процессов и укрепления позиций на рынке.",
      image: Service1,
      link: "/decisions",
    },
    {
      title: "Автоматизация и оптимизация бизнес-процессов компании",
      description:
        "Проводим детальный анализ ваших рабочих процессов и создаем индивидуальные решения, которые экономят время, снижают операционные расходы и предотвращают возможные ошибки.",
      image: Service2,
      link: "/automationpage",
    },
    {
      title: "1С сопровождение",
      description:
        "Мы обеспечиваем бесперебойную работу вашей системы 1С, оптимизируем бизнес-процессы и поддерживаем актуальность конфигураций для максимальной эффективности.",
      image: Service3,
      link: "/cSupportPage",
    },
    {
      title: "Разработка ПО",
      description:
        "Профессиональные разработчики реализуют кастомные программные решения, полностью адаптированные под специфические требования каждого клиента.",
      image: Service4,
      link: "/developmentPage",
    },
  ];

  const handleLearnMore = (link: string) => {
    if (link && link !== "#") {
      navigate(link);
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/80">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="font-Montserrat text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Команда ООО «Проф ИТ» сделает все возможное, чтобы помочь Вам
            достичь Ваших целей в области информационных технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/15 to-transparent" />
                <div className="absolute bottom-4 right-4"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <Button
  className="
    relative 
    overflow-hidden 
    transition-all 
    ease-in-out 
    hover:shadow-lg 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 
    group
    border-0
    rounded-full 
  "
  onClick={() => handleLearnMore(service.link)}
  disabled={!service.link || service.link === "#"}
  data-testid={`button-service-${index}`}
>
  {/* Бегущий луч */}
  <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
  
  <span className="relative z-10 font-medium">Узнать больше</span>
  <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
