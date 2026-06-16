import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { submitContactRequest } from "@/lib/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Обработка изменения полей формы
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Обработка изменения телефона с маской
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: e.target.value }));
  };

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация данных формы
    if (!formData.name || !formData.email || !formData.message || !isPolicyAccepted) {
      setSubmitStatus("error");
      return;
    }
    
    setIsLoading(true);

    try {
      const contactRequest = await submitContactRequest({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        policyAccepted: isPolicyAccepted,
        sourcePage: window.location.pathname,
      });

      if (contactRequest.email_error) {
        console.warn("Заявка сохранена, но письмо не отправлено:", contactRequest.email_error);
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsPolicyAccepted(false);
    } catch (error) {
      console.error('Ошибка при отправке формы', error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);  // Закрываем загрузку
    }
  };

  return (
    <section className="py-10 bg-beige/20 dark:bg-beige">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="text-left mb-2 sm:mb-2 lg:mb-2">
          <h2 className="text-2xl font-bold text-brown-dark">Остались вопросы? Задайте их нам</h2>
        </div>

        <Card className="rounded-2xl bg-brown-dark shadow-lg transition-all duration-300 w-full">
          <CardContent className="p-6 sm:p-8">
            {/* Сообщения о статусе отправки */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ⚠ Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-beige">Имя *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Ваше имя"
                    required
                    disabled={isLoading}
                    className="text-sm md:text-base rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-beige/20 transition-all duration-300 resize-none placeholder:text-brown/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-beige">Телефон</label>
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={isLoading}
                  >
                    {(inputProps: any) => (
                      <Input
                        {...inputProps}
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        className="text-sm md:text-base rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-beige/20 transition-all duration-300 resize-none placeholder:text-brown/50"
                      />
                    )}
                  </InputMask>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-beige">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Ваш email"
                  required
                  disabled={isLoading}
                  className="text-sm md:text-base rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-beige/20 transition-all duration-300 resize-none placeholder:text-brown/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm md:text-base font-medium text-beige">Сообщение *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Расскажите о вашем проекте, задачах и целях..."
                  rows={4}
                  disabled={isLoading}
                  className="text-sm md:text-base rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-beige/20 transition-all duration-300 resize-none min-h-[100px] md:min-h-[120px] placeholder:text-brown/50"
                  required
                />
              </div>

              {/* Чекбокс политики обработки данных */}
              <div className="flex items-center space-x-3 pt-2">
                <Checkbox
                  id="policy"
                  checked={isPolicyAccepted}
                  onCheckedChange={(checked) => setIsPolicyAccepted(checked as boolean)}
                  disabled={isLoading}
                />
                <div className="grid gap-1 leading-none">
                  <label
                    htmlFor="policy"
                    className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-beige"
                  >
                    Я{" "}
                    <Link
                      to="/approval"
                      className="text-xs md:text-sm text-beige font-bold hover:text-beige-light transition-all duration-300 ease-out hover:underline cursor-pointer"
                      target="_blank"
                    >
                      согласен
                    </Link>{" "}
                    на обработку моих персональных данных в соответствии с{" "}
                    <Link
                      to="/dataProcessing"
                      className="text-xs md:text-sm text-beige font-bold hover:text-beige-light transition-all duration-300 ease-out hover:underline cursor-pointer"
                      target="_blank"
                    >
                      политикой обработки персональных данных
                    </Link>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={!isPolicyAccepted || isLoading}
                  className={`
                    relative
                    overflow-hidden
                    inline-flex items-center gap-2 px-6 py-3 rounded-full 
                    text-sm md:text-base font-bold
                    backdrop-blur-sm
                    transition-all duration-1000 ease-out
                    group
                    mt-auto
                    self-start
                    bg-beige-light
                    text-brown-dark
                    border border-brown-dark/20
                    cursor-pointer
                    hover:bg-beige/80
                    hover:border-brown-dark/40
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  `}
                >
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-beige-light/80 rounded-full">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-brown-dark border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  <span className={`relative z-10 transition-all delay-100 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                    {isLoading ? "Отправка..." : "Отправить заявку"}
                  </span>

                  {!isLoading && (
                    <ArrowRight className={`
                      relative z-10 ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5 
                      transition-all duration-300
                      ${isPolicyAccepted 
                        ? "text-brown-dark group-hover:translate-x-1 group-hover:scale-110" 
                        : "text-brown-dark/40"
                      }
                    `} />
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
