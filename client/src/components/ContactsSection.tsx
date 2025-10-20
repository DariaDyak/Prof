import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
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
    <section id="contacts">
      <div className="container mx-auto px-4 lg:px-8">
        

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16 ">
          {/* Contact Form */}
          <Card className="h-fit min-h-[200px] rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer">
            {" "}
            {/* Добавлены классы высоты */}
            <CardHeader>
              <CardTitle className="flex items-center gap-2 ">
                <MessageSquare className="h-5 w-5 text-primary" />
                Обратная связь
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              {" "}
              {/* Добавлен flex */}
              <form
                onSubmit={handleSubmit}
                className="space-y-3 flex-grow flex flex-col"
              >
                {" "}
                {/* Flex для формы */}
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block ">
                      Имя *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Ваше имя"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+7 (000) 000-00-00"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="flex-grow">
                  {" "}
                  {/* Textarea занимает доступное пространство */}
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Сообщение *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="h-[5px]" /* Высота textarea */
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <div className="flex gap-4 mt-auto">
                  {" "}
                  <Button
                    type="submit"
                    className="flex-1 relative overflow-hidden group"
                    data-testid="button-submit"
                  >
                    <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    Отправить заявку
                    {/* Бегущий луч */}
  <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-elevate border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Map */}
        <Card className="overflow-hidden">
          <div className="aspect-video ">
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
        </Card>
      </div>
    </section>
  );
}
