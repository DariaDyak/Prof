// components/ProfitLsInfo.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Download, Phone, Mail, FileText, Award, Zap, BarChart, Shield, Cpu, Train, Wrench, Network } from "lucide-react";
import { useState } from "react";

export default function ProfitLsInfo() {
  const [downloading, setDownloading] = useState<string | null>(null);

  // Используем публичные пути к файлам (замените на актуальные)
  const doc1Url = "";
  const doc2Url = "";

  // Функция для скачивания файла
  const handleDownload = (url: string, filename: string) => {
    setDownloading(filename);


    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Сбрасываем состояние через секунду
    setTimeout(() => setDownloading(null), 1000);
  };

  // Данные из скриншота
  const productInfo = {
    title: "Автоматизированная информационная система «Профит — ЛС»",
    about: "АИС «Профит-ЛС» предназначена для комплексной автоматизации управления подвижным составом и оптимизации логистических процессов в сфере железнодорожных перевозок.",
    purpose: "Система обеспечивает мониторинг и контроль движения вагонов, управление ремонтами и обслуживанием, а также интеграцию с внешними системами для эффективного взаимодействия между всеми участниками логистической цепочки.",
    features: [
      "Комплексная автоматизация управления подвижным составом",
      "Оптимизация логистических процессов железнодорожных перевозок",
      "Мониторинг и контроль движения вагонов в реальном времени",
      "Управление ремонтами и техническим обслуживанием",
      "Интеграция с внешними системами и участниками логистической цепочки",
      "Аналитика и отчетность по эксплуатации подвижного состава"
    ],
    description: "АИС «Профит-ЛС» представляет собой современное решение для управления железнодорожными перевозками, позволяющее повысить эффективность использования подвижного состава, снизить простои и оптимизировать логистические процессы. Система интегрируется со всеми участниками транспортного процесса, обеспечивая прозрачность и контроль на всех этапах перевозки.",
    technologies: {
      platform: "1C: Предприятие 8.3",
      specifics: "Разработана на технологической платформе 1C: Предприятие 8.3 с учетом специфики железнодорожных перевозок",
      integration: [
        "Поддерживает интеграцию с системами GPS/ГЛОНАСС-мониторинга",
        "Интеграция с системами учета",
        "Взаимодействие с другими отраслевыми решениями"
      ]
    },
    registration: {
      reestr: "2025660499",
      developer: "ООО «Проф ИТ»",
      registrationInfo: "Программа для ЭВМ зарегистрирована в Роспатенте"
    },
    documentation: [
      {
        title: "Описание функциональных характеристик системы",
        url: doc1Url,
        filename: "Описание_функциональных_характеристик_Профит-ЛС.pdf"
      },
      {
        title: "Руководство пользователя и техническая документация",
        url: doc2Url,
        filename: "Руководство_пользователя_Профит-ЛС.pdf"
      }
    ],
    contacts: {
      phone: "8-800-200-29-70",
      email: "info@t4prof.ru"
    }
  };

  return (
    <section className="pt-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
            Автоматизированная информационная система <span className="block text-blue-600 dark:text-blue-400">«Профит — ЛС»</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Комплексное решение для автоматизации управления железнодорожными перевозками
          </p>
        </div>

        {/* Основная карточка */}
        <Card className="group bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:hover:shadow-none dark:border-slate-700/80 backdrop-blur-sm shadow-lg transition-all duration-500 mb-8">
          <CardContent className="p-8">
            {/* Заголовок и реестры */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                {/*<div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium">Реестр ПО: <span className="text-blue-600 dark:text-blue-400">№ {productInfo.registration.reestr}</span></span>
                </div>*/}
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium">Роспатент: <span className="text-blue-600 dark:text-blue-400">№ {productInfo.registration.reestr}</span></span>
                </div>
              </div>
            </div>

            {/* О продукте и назначение */}
            <div className="space-y-6 mb-8">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                  О продукте
                </h4>
                <p className="text-foreground/90 leading-relaxed">
                  {productInfo.about}
                </p>
              </div>

              <div className="p-6 rounded-2xl border dark:border-white-100/50">
                <h4 className="text-xl text-blue-700 dark:text-blue-300 font-semibold mb-3">
                  Назначение программы
                </h4>
                <p className="text-foreground/90 leading-relaxed">
                  {productInfo.purpose}
                </p>
              </div>
            </div>

            {/* Основные функции */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Train className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Основные функции системы
              </h4>
              <ul className="space-y-3">
                {productInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start group/task">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover/task:bg-blue-200 dark:group-hover/task:bg-blue-800/50 transition-colors">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground/90 leading-relaxed group-hover/task:text-foreground transition-colors">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Описание системы */}
            <div className="mb-8">
              <p className="text-foreground/90 leading-relaxed text-base">
                <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  АИС «Профит-ЛС»
                </strong> — представляет собой современное решение для управления железнодорожными перевозками, позволяющее повысить эффективность использования подвижного состава, снизить простои и оптимизировать логистические процессы.
              </p>
              <p className="text-foreground/90 leading-relaxed text-base mt-4">
                Система интегрируется со всеми участниками транспортного процесса, обеспечивая прозрачность и контроль на всех этапах перевозки.
              </p>
            </div>

            {/* Технологии и регистрация в сетке */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Технологии */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                  Технологии
                </h4>
                <p className="text-foreground/90 mb-3">
                  <span className="font-medium">Платформа:</span> {productInfo.technologies.platform}
                </p>
                <p className="text-foreground/90 mb-3">
                  {productInfo.technologies.specifics}
                </p>
                <div className="mt-4">
                  <p className="font-medium text-foreground mb-2">Интеграционные возможности:</p>
                  <ul className="space-y-2">
                    {productInfo.technologies.integration.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2">
                          <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Регистрация 
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800/50">
                <h4 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
                  Регистрация
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">
                      Номер в Роспатенте
                    </p>
                    <p className="text-foreground font-medium">{productInfo.registration.reestr}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">
                      Разработчик
                    </p>
                    <p className="text-foreground font-medium">{productInfo.registration.developer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/80">{productInfo.registration.registrationInfo}</p>
                  </div>
                </div>
              </div>
              */}
            </div>

            {/* Преимущества */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Ключевые преимущества системы
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-transparent rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-600 shadow-lg dark:shadow-slate-800/30 transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground">Автоматизация</span>
                  </div>
                  <p className="text-sm text-foreground/80">Полная автоматизация управления подвижным составом</p>
                </div>

                <div className="p-4 bg-white dark:bg-transparent rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-600 shadow-lg dark:shadow-slate-800/30 transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                      <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground">Оптимизация</span>
                  </div>
                  <p className="text-sm text-foreground/80">Снижение простоев и повышение эффективности перевозок</p>
                </div>

                <div className="p-4 bg-white dark:bg-transparent rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-600 shadow-lg dark:shadow-slate-800/30 transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground">Надежность</span>
                  </div>
                  <p className="text-sm text-foreground/80">Соответствие российскому законодательству</p>
                </div>
              </div>
            </div>

            {/* Документация и контакты */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Документация */}
              <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-800/30 transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Документация
                </h4>
                <div className="space-y-3">
                  {productInfo.documentation.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => handleDownload(doc.url, doc.filename)}
                      disabled={downloading === doc.filename}
                      className="w-full text-left p-4 bg-white/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 group/doc flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-foreground/80 group-hover/doc:text-foreground transition-colors duration-200 text-base">
                        {doc.title}
                      </span>
                      <div className="ml-4 flex-shrink-0 flex items-center">
                        {downloading === doc.filename ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 dark:border-blue-400"></div>
                        ) : (
                          <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 opacity-0 group-hover/doc:opacity-100 transition-opacity duration-200" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Контакты */}
              <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-800/30 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                  Для получения лицензии и консультации
                </h4>
                <div className="space-y-4">
                  <a
                    href={`tel:${productInfo.contacts.phone.replace(/-/g, '')}`}
                    className="flex items-center p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 group/phone"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4 dark:group-hover/phone:bg-blue-800/30 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Телефон</p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover/phone:text-blue-700 dark:group-hover/phone:text-blue-300 transition-colors duration-200">
                        {productInfo.contacts.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${productInfo.contacts.email}`}
                    className="flex items-center p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 group/email"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4 dark:group-hover/email:bg-blue-800/30 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Электронная почта</p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover/email:text-blue-700 dark:group-hover/email:text-blue-300 transition-colors duration-200">
                        {productInfo.contacts.email}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/30">
                  <p className="text-sm text-foreground/80">
                    Разработчик: <span className="font-medium text-foreground">{productInfo.registration.developer}</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}