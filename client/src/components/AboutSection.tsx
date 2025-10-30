import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image_1 from "@assets/generated_images/image_1.jpeg";

export default function AboutSection() {
  const services = [
    "проектирование и сопровождение компьютерных систем",
    "сервисное обслуживание компьютерного оборудования",
    "реализация комплекса мероприятий по обеспечению защиты информации",
    "разработка программного обеспечения"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Текстовый контент */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                О КОМПАНИИ
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
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

                <div className="space-y-3 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Наши специалисты смогут подобрать оптимальные решения для
                    автоматизации и развития Вашего бизнеса, не зависимо от
                    направления деятельности и размера компании.
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Государственная аккредитация
                    </Badge>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Изображение с использованием Card */}
          <div className="lg:order-last">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative group">
                <img
                  src={Image_1}
                  alt="Компьютерный офис компании ПРОФ ИТ"
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}