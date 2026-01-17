import P1 from "@assets/generated_images/P1.png";
import P2 from "@assets/generated_images/P2(2).png";
import P3 from "@assets/generated_images/P3.png";
import P4 from "@assets/generated_images/P4.png";
import P5 from "@assets/generated_images/P5.png";

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
    }
  ];

  return (
   
    <section id="partners" className="py-8 sm:py-20 bg-beige/20">
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

        {/* Сетка для мобильных, flex для десктопа */}
<div className="
  grid grid-cols-2 gap-6 sm:gap-8
  lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-10 lg:gap-20
">
  {partners.map((partner, index) => (
    <a 
      key={partner.name}
      href={partner.website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="
        flex flex-col items-center group
        lg:w-auto
      "
    >
      {/* Круглый элемент с логотипом */}
      <div className="
        w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32
        bg-white 
        rounded-full 
        shadow-lg 
        hover:shadow-xl 
        border border-gray-200
        dark:border-beige/20
        p-3 sm:p-4 lg:p-5 lg:p-6
        flex items-center justify-center
        mb-2 sm:mb-3 lg:mb-4
        transition-all duration-300
        lg:hover:scale-105
        lg:hover:-translate-y-1
      ">
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={partner.image}
            alt={`Логотип ${partner.name}`}
            className="max-w-full max-h-full object-contain p-1 sm:p-2"
          />
        </div>
      </div>
      
      {/* Название партнера под кругом */}
      <div className="text-center max-w-[120px] sm:max-w-[140px] lg:max-w-[150px]">
        <h3 className="
          text-xs sm:text-sm lg:text-base 
          font-medium text-brown-dark 
          dark:text-beige
          transition-colors duration-300
          lg:group-hover:text-brown-dark/80
          leading-tight
        ">
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