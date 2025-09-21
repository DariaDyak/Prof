import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar
} from 'lucide-react';

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, д. 15, офис 401',
      secondary: 'БЦ "Технопарк"'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      secondary: '+7 (926) 987-65-43'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@techcorp.ru',
      secondary: 'sales@techcorp.ru'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      secondary: 'Сб-Вс: по договоренности'
    }
  ];

  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом, 
            и мы ответим в течение 30 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Обратная связь
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Имя *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ваше имя"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (000) 000-00-00"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Сообщение *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1" data-testid="button-submit">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                  <Button type="button" variant="outline" data-testid="button-call">
                    <Calendar className="mr-2 h-4 w-4" />
                    Запланировать звонок
                  </Button>
                </div>

                <div className="flex gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary">⚡ Ответ в течение 30 минут</Badge>
                  <Badge variant="secondary">📞 Бесплатная консультация</Badge>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                        {info.secondary && (
                          <p className="text-sm text-muted-foreground">{info.secondary}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground font-medium">Интерактивная карта</p>
                    <p className="text-sm text-muted-foreground">БЦ "Технопарк", Тверская улица</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">30 мин</div>
                <div className="text-xs text-muted-foreground">Время ответа</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Техподдержка</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Качество</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}