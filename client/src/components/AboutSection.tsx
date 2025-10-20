import Image_1 from '@/assets/generated_images/background-B09EPi58.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-Montserrat text-3xl lg:text-4xl font-bold text-foreground mb-6">
              О компании
            </h2>

            <div className="font-Montserrat text-base text-muted-foreground mb-8 leading-relaxed text-justify">
              <p className="mb-4">
                <strong>ООО «ПРОФ ИТ»</strong> — профильная компания,
                предоставляющая спектр ИТ-услуг, таких как:
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>проектирование и сопровождение компьютерных систем</li>
                <li>сервисное обслуживание компьютерного оборудования</li>
                <li>
                  реализация комплекса мероприятий по обеспечению защиты
                  информации
                </li>
                <li>разработка программного обеспечения.</li>
              </ul>

              <p className="mb-4">
                Наши специалисты смогут подобрать оптимальные решения для
                автоматизации и развития Вашего бизнеса, не зависимо от
                направления деятельности и размера компании.
              </p>

              <p>
                Компания имеет действующую{" "}
                <strong>государственную аккредитацию</strong> в области
                информационных технологий.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <div className="relative group">
              <img
                src={Image_1}
                alt="Компьютерный офис"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg 
               transition-transform duration-300 ease-in-out
               group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t to-transparent rounded-lg 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
