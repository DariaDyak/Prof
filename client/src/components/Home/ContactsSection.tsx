import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function ContactsSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (800) 200-29-70",
      type: "phone",
      href: "tel:+78002002970"
    },
    {
      icon: Mail,
      title: "Электронная почта",
      content: "info@it4prof.ru",
      type: "email",
      href: "mailto:info@it4prof.ru"
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Краснодар, ул. Рашпилевская, 244",
      type: "address"
    },
    {
      icon: Clock,
      title: "Часы работы",
      content: "Пн-Пт: 8:00-17:00",
      type: "hours"
    }
  ];

  return (
    <section id="contacts" className=" bg-beige/20 dark:bg-beige">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="pt-6 text-left">
          <h2 className="text-5xl font-bold text-brown-dark mb-6">
            Контакты
          </h2>
        </div>

        {/* Две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка: контакты */}
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const isLink = info.type === "phone" || info.type === "email";
                const Element = isLink ? "a" : "div";

                return (
                  <Element
                    key={index}
                    href={isLink ? info.href : undefined}
                    className={`
                      flex items-center gap-3 md:gap-4 p-4 md:p-5
                      rounded-xl 
                      bg-brown-dark
                      shadow-lg transition-all duration-300
                      hover:shadow-2xl
                      ${isLink ? 'cursor-pointer hover:bg-brown-dark/90' : ''}
                      w-full 
                    `}
                  >
                    <div className={`
                      flex items-center justify-center 
                      h-10 w-10 md:h-12 md:w-12
                      flex-shrink-0 rounded-full
                      bg-brown-dark/10 
                    `}>
                      <info.icon className="h-5 w-5 md:h-6 md:w-6 text-beige" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-beige mb-1 text-sm md:text-base">
                        {info.title}
                      </h4>
                      <p className="text-beige text-sm md:text-sm">
                        {info.content}
                      </p>
                    </div>
                  </Element>
                );
              })}
            </div>
          </div>

          {/* Правая колонка: карта */}
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
            <div style={{ width: '100%', height: '400px' }}>
              <YMaps>
                <Map
                  defaultState={{
                    center: [45.061325, 38.972744],
                    zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                  width="100%"
                  height="100%"
                >
                  <Placemark
                    geometry={[45.061325, 38.972744]}
                    options={{
                      preset: "islands#businessIcon",
                      iconColor: "#8B4513"
                    }}
                    properties={{
                      hintContent: "ООО ПРОФ ИТ",
                      balloonContent: "<strong>ООО 'ПРОФ ИТ'</strong><br/>Краснодар"
                    }}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}