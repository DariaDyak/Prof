import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapPin, ArrowRight, Phone, Mail, Clock } from "lucide-react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";

import U1 from "@assets/generated_images/U1.png";
import U2 from "@assets/generated_images/U2.png";
import U3 from "@assets/generated_images/U3.jpg";

// URL API для бэкенда
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend.com/api' 
  : 'http://localhost:3001/api';

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Функция для обработки изменения телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Убираем все нецифровые символы кроме + для проверки
    const cleanValue = value.replace(/\D/g, '');
    
    // Если номер начинается не с +7, добавляем +7 автоматически
    if (!value.startsWith('+7') && cleanValue.length > 0) {
      const formattedValue = `+7 (${cleanValue.slice(1, 4)}) ${cleanValue.slice(4, 7)}-${cleanValue.slice(7, 9)}-${cleanValue.slice(9, 11)}`.trim();
      setFormData(prev => ({ ...prev, phone: `+7 (${cleanValue.slice(0, 3)}) ${cleanValue.slice(3, 6)}-${cleanValue.slice(6, 8)}-${cleanValue.slice(8, 10)}`.trim() }));
    } else {
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  // Состояния для слайдера
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: U1,
      title: "IT-инфраструктура",
      description: "Современные решения для вашего бизнеса"
    },
    {
      image: U2,
      title: "Автоматизация", 
      description: "Оптимизация бизнес-процессов"
    },
    {
      image: U3,
      title: "1С Сопровождение",
      description: "Профессиональная техническая поддержка"
    }
  ];

  // Автопрокрутка слайдера
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Функции для слайдера
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

  // Основная функция отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPolicyAccepted) return;

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка сервера');
      }

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsPolicyAccepted(false);
        
        // Автоскрытие сообщения об успехе через 5 секунд
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error(result.message || 'Неизвестная ошибка');
      }
      
    } catch (error) {
      setSubmitStatus("error");
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
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
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Контакты
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
          </p>
        </div>

        {/* Блок с формой и слайдером */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Форма обратной связи - слева */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
                Обратная связь
              </h3>

              <Card className="rounded-2xl border dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 dark:hover:shadow-none">
                <CardContent className="p-8">
                  {/* Сообщения о статусе отправки */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">
                        Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                      </p>
                    </div>
                  )}

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
                          disabled={isLoading}
                          className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Телефон
                        </label>
                        <InputMask
                          mask="+7 (999) 999-99-99"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            // Автодополнение при потере фокуса, если номер неполный
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length > 1 && value.length < 11) {
                              const paddedValue = value.padEnd(11, '_');
                              const formattedValue = `+7 (${paddedValue.slice(1, 4)}) ${paddedValue.slice(4, 7)}-${paddedValue.slice(7, 9)}-${paddedValue.slice(9, 11)}`.replace(/_/g, '0');
                              setFormData(prev => ({ ...prev, phone: formattedValue }));
                            }
                          }}
                          disabled={isLoading}
                        >
                          {/* @ts-ignore - игнорируем типы для children */}
                          {(inputProps: any) => (
                            <Input
                              {...inputProps}
                              type="tel"
                              placeholder="+7 (000) 000-00-00"
                              className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                            />
                          )}
                        </InputMask>
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
                        disabled={isLoading}
                        className="h-12 rounded-lg border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
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
                        disabled={isLoading}
                        className="rounded-lg border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Чекбокс политики обработки данных */}
                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox
                        id="policy"
                        checked={isPolicyAccepted}
                        onCheckedChange={(checked) => setIsPolicyAccepted(checked as boolean)}
                        disabled={isLoading}
                        className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="policy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                        >
                          Я соглашаюсь с{" "}
                          <Link 
                            to="/dataProcessing" 
                            className="
                        text-sm text-blue-500 dark:text-blue-400 font-bold
                        hover:text-blue-800 dark:hover:text-blue-600
                        transition-all duration-300 ease-out
                        hover:underline
                        cursor-pointer"
                            target="_blank"
                          >
                            политикой обработки персональных данных
                          </Link>
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Нажимая кнопку, вы даете согласие на обработку ваших персональных данных
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={!isPolicyAccepted || isLoading}
                        className={`
                          relative
                          overflow-hidden
                          inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          text-sm font-bold
                          backdrop-blur-sm
                          transition-all duration-1000 ease-out
                          group
                          mt-auto
                          self-start
                          ${isPolicyAccepted && !isLoading
                            ? "bg-blue-500/20 border border-blue-800/30 text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-blue-500/30" 
                            : "bg-gray-300/50 border border-gray-400/30 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        {/* Индикатор загрузки */}
                        {isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 rounded-full">
                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}

                        {/* Бегущий луч - только при активной кнопке */}
                        {isPolicyAccepted && !isLoading && (
                          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                        )}

                        <span className={`relative z-10 transition-all delay-100 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                          {isLoading ? "Отправка..." : "Отправить заявку"}
                        </span>
                        {!isLoading && (
                          <ArrowRight className={`relative z-10 ml-2 h-4 w-4 transition-all duration-300 ${
                            isPolicyAccepted ? "group-hover:translate-x-1 group-hover:scale-110 delay-1400" : ""
                          }`} />
                        )}
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
                      src={slide.image} 
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

        {/* Блок с картой и контактной информацией */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Карта */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
            <div className="h-full w-full">
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
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '400px'
                  }}
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

          {/* Контактная информация */}
          <div className="grid gap-3 sm:gap-4 h-full">
  {contactInfo.map((info, index) => (
    <div 
      key={index} 
      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg transition-all duration-300 h-full hover:shadow-2xl dark:hover:shadow-none"
    >
      <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex-shrink-0">
        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-grow">
        <h4 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base leading-tight">
          {info.title}
        </h4>
        <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
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