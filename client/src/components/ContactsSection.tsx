import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapPin, ArrowRight, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

//import Service1 from "@assets/generated_images/Service1.jpg";
//import Service3 from "@assets/generated_images/Service2.jpg";
//import Service2 from "@assets/generated_images/Service4.jpg";

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Состояния для слайдера - ПЕРЕМЕСТИТЬ ВНУТРЬ КОМПОНЕНТА
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
     // image: Service1,
      title: "IT-инфраструктура",
      description: "Современные решения для вашего бизнеса"
    },
    {
     // image: Service2,
      title: "Автоматизация", 
      description: "Оптимизация бизнес-процессов"
    },
    {
      //image: Service3,
      title: "1С Сопровождение",
      description: "Профессиональная техническая поддержка"
    }
  ];

  // useEffect должен быть внутри компонента
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Функции для слайдера - ПЕРЕМЕСТИТЬ ВНУТРЬ КОМПОНЕНТА
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Краснодар, ул. Рашпилевская, д. 244, этаж 3",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (800) 200-29-70",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@it4prof.ru",
    },
    {
      icon: Clock,
      title: "Часы работы",
      content: "Пн-Пт: 8:00 - 17:00",
    },
  ];

  return (
    <section id="contacts" className="pt-10 pb-16 bg-card dark:from-slate-900 dark:to-blue-900/20">
      <div className="container mx-auto px-4 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
      Контакты
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
    </p>
  </div>

  {/* Блок с формой и слайдером */}
  <div className="mb-16">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* Форма обратной связи - слева */}
      <div>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Обратная связь
        </h3>

        <Card className="rounded-2xl border-blue-300 shadow-xl bg-white/80 dark:bg-slate-800/80">
  <CardContent className="p-8">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
  <label className="text-sm font-medium text-foreground">
    Имя *
  </label>
  <Input
    type="text"
    value={formData.name}
    onChange={(e) => handleInputChange("name", e.target.value)}
    placeholder="Ваше имя"
    required
    className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-200 dark:focus:border-slate-700 transition-all duration-300"/>
</div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Телефон
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+7 (000) 000-00-00"
            className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="your@email.com"
          required
          className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Сообщение *
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Расскажите о вашем проекте, задачах и целях..."
          rows={5}
          className="rounded-lg border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 resize-none min-h-[120px]"
          required
        />
      </div>
      
      <div className="pt-2">
        <Button
          type="submit"
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
        >
          {/* Бегущий луч */}
          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <span className="relative z-10 transition-all delay-100">
            Отправить заявку 
          </span>
          <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 delay-1400" />
        </Button>
      </div>
    </form>
  </CardContent>
</Card>
      </div>

            {/* Слайдер с картинками - справа */}
            <div 
              className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <img 
                      //src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h4 className="text-2xl font-bold mb-2">{slide.title}</h4>
                        <p className="text-blue-100">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Индикаторы слайдов */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Кнопки навигации */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Блок с картой и контактной информацией - без отступов */}
<div className="grid lg:grid-cols-2 gap-8">
  {/* Карта без белых отступов */}
  <div className="rounded-2xl overflow-hidden shadow-2xl">
    <div className="aspect-video">
      <YMaps>
        <Map
          defaultState={{
            center: [45.061325, 38.972744],
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          width="100%"
          height="100%"
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            geometry={[45.061325, 38.972744]}
            options={{
              preset: "islands#blueBusinessIcon",
            }}
          />
        </Map>
      </YMaps>
    </div>
  </div>

  {/* Контактная информация с белым фоном и центрированными иконками */}
  <div className="grid gap-4">
    {contactInfo.map((info, index) => (
      <div 
        key={index} 
        className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
      >
        <div className="flex items-center justify-center h-12 w-12 flex-shrink-0">
          <info.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-grow">
          <h4 className="font-bold text-foreground mb-2">
            {info.title}
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            {info.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</section>
  );
}