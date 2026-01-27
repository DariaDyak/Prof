import { useEffect, useRef } from 'react';
import P1 from "@assets/generated_images/P1.png";
import P2 from "@assets/generated_images/P2(2).png";
import P3 from "@assets/generated_images/P3.png";
import P4 from "@assets/generated_images/P4.png";
import P5 from "@assets/generated_images/P5.png";
import P6 from "@assets/generated_images/P6.png";

export default function PartnersSection() {
  const partners = [
    {
      name: "1С:Франчайзинг",
      image: P1,
      website: "https://1c.ru"
    },
    {
      name: "Лаборатория Касперского",
      image: P2,
      website: "https://www.kaspersky.ru"
    },
    {
      name: "ООО АТОМ Безопасность",
      image: P3,
      website: "https://www.staffcop.ru"
    },
    {
      name: "ООО «Клеверенс Софт»",
      image: P4,
      website: "https://www.cleverence.ru"
    },
    {
      name: "АО «амоЦРМ»",
      image: P5,
      website: "https://www.amocrm.ru"
    },
    {
      name: "Санаторий Бирюза",
      image: P6,
      website: "https://biruza.net"
    }
  ];

  const infinitePartnersRow1 = [...partners, ...partners];

  const marqueeStyle = {
    animation: 'marquee 30s linear infinite',
    width: 'calc(200%)'
  };

  useEffect(() => {
    const styleId = 'marquee-mobile-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section id="partners" className="py-12 bg-beige/20 overflow-hidden">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="text-left mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-5xl font-bold text-brown-dark dark:text-beige mb-3">
            Наши партнеры
          </h2>
          <p className="text-brown-dark dark:text-beige text-sm sm:text-lg mb-3">
            ООО "ПРОФ ИТ" предлагает своим партнерам уникальные условия сотрудничества,
            которые позволяют получать выгоду от совместной работы
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-beige/10">
        {/* Градиенты по краям */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-beige/20 via-beige/5 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-beige/20 via-beige/5 to-transparent z-10 pointer-events-none"></div>

        {/* Десктоп версия */}
        <div className="hidden md:block relative">
          <div
            className="flex whitespace-nowrap items-center mb-6 md:mb-8"
            style={marqueeStyle}
          >
            {infinitePartnersRow1.map((partner, index) => (
              <div
                key={`desktop-${partner.name}-${index}`}
                className="inline-flex items-center justify-center mx-4 md:mx-6 lg:mx-8 flex-shrink-0"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 block"
                >
                  <div className="
                    w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                    bg-gradient-to-br from-white/40 to-white/10
                    backdrop-blur-lg
                    rounded-2xl
                    flex items-center justify-center
                    p-3 md:p-4
                    shadow-lg shadow-black/10
                    transition-all duration-300
                    group-hover:shadow-lg group-hover:shadow-black/20
                    border border-white/30
                    group-hover:border-white/50
                  ">
                    <img
                      src={partner.image}
                      alt={`Логотип ${partner.name}`}
                      className="max-w-full max-h-full object-contain rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
            {/* Дубликат для плавного перехода */}
            {infinitePartnersRow1.map((partner, index) => (
              <div
                key={`desktop-duplicate-${partner.name}-${index}`}
                className="inline-flex items-center justify-center mx-4 md:mx-6 lg:mx-8 flex-shrink-0"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 block"
                >
                  <div className="
                    w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                    bg-gradient-to-br from-white/40 to-white/10
                    backdrop-blur-lg
                    rounded-2xl
                    flex items-center justify-center
                    p-3 md:p-4
                    shadow-lg shadow-black/10
                    transition-all duration-300
                    group-hover:shadow-lg group-hover:shadow-black/20
                    border border-white/30
                    group-hover:border-white/50
                  ">
                    <img
                      src={partner.image}
                      alt={`Логотип ${partner.name}`}
                      className="max-w-full max-h-full object-contain rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Мобильная версия */}
        <div className="block md:hidden relative">
          <div
            className="flex whitespace-nowrap items-center mb-6"
            style={marqueeStyle}
          >
            {infinitePartnersRow1.map((partner, index) => (
              <div
                key={`mobile-${partner.name}-${index}`}
                className="inline-flex items-center justify-center mx-3 flex-shrink-0"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 block"
                >
                  <div className="
                    w-20 h-20
                    bg-gradient-to-br from-white/40 to-white/10
                    backdrop-blur-lg
                    rounded-xl
                    flex items-center justify-center
                    p-2
                    shadow-lg shadow-black/10
                    transition-all duration-300
                    group-hover:shadow-lg group-hover:shadow-black/20
                    border border-white/30
                    group-hover:border-white/50
                  ">
                    <img
                      src={partner.image}
                      alt={`Логотип ${partner.name}`}
                      className="max-w-full max-h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
            {/* Дубликат для плавного перехода */}
            {infinitePartnersRow1.map((partner, index) => (
              <div
                key={`mobile-duplicate-${partner.name}-${index}`}
                className="inline-flex items-center justify-center mx-3 flex-shrink-0"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 block"
                >
                  <div className="
                    w-20 h-20
                    bg-gradient-to-br from-white/40 to-white/10
                    backdrop-blur-lg
                    rounded-xl
                    flex items-center justify-center
                    p-2
                    shadow-lg shadow-black/10
                    transition-all duration-300
                    group-hover:shadow-lg group-hover:shadow-black/20
                    border border-white/30
                    group-hover:border-white/50
                  ">
                    <img
                      src={partner.image}
                      alt={`Логотип ${partner.name}`}
                      className="max-w-full max-h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}