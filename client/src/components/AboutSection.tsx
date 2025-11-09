import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Aboutcompany from "@assets/generated_images/aboutcompany.png";

export default function AboutSection() {
  const services = [
    "проектирование и сопровождение компьютерных систем",
    "сервисное обслуживание компьютерного оборудования",
    "реализация комплекса мероприятий по обеспечению защиты информации",
    "разработка программного обеспечения"
  ];

  return (
    <section id="about" className="pt-20 pb-16">
  <div className="container mx-auto px-4 lg:px-8 ">
    <div className="grid lg:grid-cols-2 gap-12 items-start ">

      {/* Текстовый контент */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            О компании
          </h2>
        </div>

        <Card className="flex flex-col shadow-2xl"> {/* Убрал pt-6, добавим padding внутри */}
          <CardContent className="space-y-4 flex flex-col flex-1 p-6 "> {/* Добавил p-6 */}
            <div className="space-y-4 flex-1">
              <p className="text-muted-foreground leading-relaxed">
                <strong>ООО «ПРОФ ИТ»</strong> — профильная компания,
                предоставляющая спектр ИТ-услуг:
              </p>

              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Наши специалисты смогут подобрать оптимальные решения для
                автоматизации и развития Вашего бизнеса, не зависимо от
                направления деятельности и размера компании.
              </p>
            </div>

            <div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Государственная аккредитация
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Изображение с использованием Card */}
      <div className="lg:order-last flex flex-col ">
        {/* Невидимый заголовок для выравнивания высоты */}
        <div className="invisible">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            О компании
          </h2>
        </div>
        
        <Card className="overflow-hidden border-0 h-[430px] shadow-2xl"> {/* Убрал фиксированную высоту, добавил flex-1 */}
          <div className="relative group h-full "> {/* Добавил h-full */}
            <img
              src={Aboutcompany}
              alt="Компьютерный офис компании ПРОФ ИТ"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>
  );
}