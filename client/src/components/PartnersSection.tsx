import P1 from "@assets/generated_images/P1.png";
import P2 from "@assets/generated_images/P2.png";
import P3 from "@assets/generated_images/P3.png";
import P4 from "@assets/generated_images/P4.png";

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
    }
  ];

  return (
    <section className="pt-14 pb-16 bg-white dark:bg-beige overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark mb-4 sm:mb-5 lg:mb-6">
             Наши партнеры
          </h2>
          <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark max-w-3xl mx-auto leading-relaxed">
            ООО "ПРОФ ИТ" предлагает своим партнерам уникальные условия сотрудничества, 
            которые позволяют получать выгоду от совместной работы
          </p>
        </div>

        {/* Сетка партнеров */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <a 
              key={partner.name}
              href={partner.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-6 flex flex-col items-center text-center group hover:transform hover:-translate-y-1 h-full"
            >
              {/* Контейнер для изображения - занимает все доступное пространство */}
              <div className="flex-1 w-full flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-full flex items-center justify-center p-2 sm:p-3">
                  <img 
                    src={partner.image}
                    alt={`Логотип ${partner.name}`}
                    className="max-w-full max-h-32 object-contain"
                  />
                </div>
              </div>
              
              {/* Название партнера - фиксировано внизу */}
              <div className="w-full">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-brown-dark mt-auto">
                  {partner.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}