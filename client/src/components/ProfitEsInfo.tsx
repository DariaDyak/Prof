// components/ProfitEsInfo.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Download, Phone, Mail, CheckCircle, FileText, Award, BarChart, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { withBaseUrl } from "@/lib/utils";

export default function ProfitEsInfo() {
  const [downloading, setDownloading] = useState<string | null>(null);

  // Используем публичные пути к файлам
  const doc1Url = withBaseUrl("/attached_assets/generated_images/Описание.pdf");
  const doc2Url = withBaseUrl("/attached_assets/generated_images/Руководство.pdf");

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

  // Данные из скриншотов
  const productInfo = {
    title: "Автоматизированная информационная система «Профит — ЭС»",
    about: "АИС «Профит-ЭС» — разработана на технологической платформе 1C: Предприятие 8.3. компанией ООО «Проф ИТ», внесена в Реестр программ для ЭВМ под регистрационным номером № 2024686145.",
    purpose: "Программное обеспечение предназначено для ведения деятельности по покупке и продаже электроэнергии (мощности) на розничных и оптовых рынках электроэнергии.",
    tasks: [
      "Создание структуры договоров покупки с поставщиками электроэнергии и договоров продажи с потребителями электроэнергии",
      "Загрузка исходных данных: показаний приборов учета, профилей мощностей, ценовых составляющих для расчета цен покупки и продажи электроэнергии",
      "Расчет объемов, цены, стоимости и выставление счетов по договорам продажи за потребленную электроэнергию и мощность",
      "Расчет объемов, цены, стоимости и сверка по счетам по договорам покупки за купленную электроэнергию и мощность",
      "Аналитическую отчетность"
    ],
    description: "Программное обеспечение для покупки и продажи электроэнергии на розничных и оптовых рынках является важным инструментом для энергосбытовых компаний. Оно не только автоматизирует и оптимизирует процессы, но и способствует повышению эффективности, снижению рисков и улучшению обслуживания клиентов. В условиях постоянно меняющегося энергетического рынка наличие современного и функционального ПО становится ключевым фактором успешной деятельности компаний в этой области.",
    technologies: {
      platform: "1C: Предприятие 8.3",
      libraries: [
        {
          name: "1C: Библиотека стандартных подсистем (БСП), редакция 2.3",
          description: "БСП предоставляет готовые шаблоны и стандартные подсистемы для организации бизнес-процессов, предоставляет набор универсальных функциональных подсистем, готовых разделов для пользовательской документации и технологию для разработки прикладных решений."
        }
      ]
    },
    classification: {
      main: "12.06 Программное обеспечение для решения отраслевых задач в области энергетики и нефтегазовой отрасли",
      additional: "12.09 Программное обеспечение для решения отраслевых задач в области торговли"
    },
    registration: {
      reestr: "2024686145",
      russianReestr: "26848",
      developer: "ООО «Проф ИТ»"
    },
    documentation: [
      {
        title: "Документация, содержащая описание функциональных характеристик программного обеспечения и информацию, необходимую для установки и эксплуатации программного обеспечения",
        url: doc1Url,
        filename: "Описание_функциональных_характеристик_Профит-ЭС.pdf"
      },
      {
        title: "Информация, необходимая для эксплуатации экземпляра программного обеспечения",
        url: doc2Url,
        filename: "Руководство_пользователя_Профит-ЭС.pdf"
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
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-5">
            Автоматизированная информационная система <span className="block text-blue-600 dark:text-blue-400">«Профит — ЭС»</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-center sm:text-center">
            Комплексное решение для автоматизации энергосбытовой деятельности
          </p>
        </div>

        {/* Основная карточка */}
        <Card className="group bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:hover:shadow-none dark:border-slate-700/80 backdrop-blur-sm shadow-lg transition-all duration-500 mb-8">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {/* Заголовок и реестры */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-xs sm:text-sm">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 mr-1.5 sm:mr-2" />
                  <span className="font-medium">Роспатент: <span className="text-blue-600 dark:text-blue-400">№ {productInfo.registration.reestr}</span></span>
                </div>
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg text-xs sm:text-sm">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-700 dark:text-purple-700 mr-1.5 sm:mr-2" />
                  <span className="font-medium">Реестр ПО: <span className="text-purple-700 dark:text-purple-700">№ {productInfo.registration.russianReestr}</span></span>
                </div>
              </div>
            </div>

            {/* О продукте и назначение */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2 sm:mb-3">
                  О продукте
                </h4>
                <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify">
                  {productInfo.about}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-xl sm:rounded-2xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300">
                <h4 className="text-base sm:text-lg lg:text-xl text-blue-700 dark:text-blue-300 font-semibold mb-2 sm:mb-3">
                  Назначение программы
                </h4>
                <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify">
                  {productInfo.purpose}
                </p>
              </div>
            </div>

            {/* Решаемые задачи */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Решаемые задачи
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {productInfo.tasks.map((task, index) => (
                  <li key={index} className="flex items-start group/task">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-2 sm:mr-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover/task:bg-blue-200 dark:group-hover/task:bg-blue-800/50 transition-colors">
                        <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify group-hover/task:text-foreground transition-colors">
                      {task}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Описание системы */}
            <div className="mb-6 sm:mb-8">
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify mb-3 sm:mb-4">
                <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Программное обеспечение для покупки и продажи электроэнергии
                </strong> — важный инструмент для энергосбытовых компаний. Оно не только автоматизирует и оптимизирует процессы, но и способствует повышению эффективности, снижению рисков и улучшению обслуживания клиентов.
              </p>
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify">
                В условиях постоянно меняющегося энергетического рынка наличие современного и функционального ПО становится ключевым фактором успешной деятельности компаний в этой области.
              </p>
            </div>

            {/* Технологии и классификация в сетке */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Технологии */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2 sm:mb-3">
                  Технологии
                </h4>
                <p className="text-foreground/90 text-sm sm:text-base mb-2 sm:mb-3 text-justify">
                  <span className="font-medium">Платформа:</span> {productInfo.technologies.platform}
                </p>
                <div className="mt-3 sm:mt-4">
                  <p className="font-medium text-foreground text-sm sm:text-base mb-1.5 sm:mb-2">Используемые библиотеки:</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {productInfo.technologies.libraries.map((lib, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-1.5 sm:mr-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs">✓</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{lib.name}</p>
                          <p className="text-xs sm:text-sm text-foreground/80 mt-0.5 sm:mt-1 text-justify">{lib.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Классификация */}
              <div className="p-4 sm:p-6 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl sm:rounded-2xl border border-purple-100 dark:border-purple-800/50">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2 sm:mb-3">
                  Классификация ПО
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">
                      Основной класс
                    </p>
                    <p className="text-foreground font-medium text-sm sm:text-base text-justify">{productInfo.classification.main}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">
                      Дополнительный класс
                    </p>
                    <p className="text-foreground font-medium text-sm sm:text-base text-justify">{productInfo.classification.additional}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Преимущества */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Ключевые преимущества системы
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Автоматизация</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Полная автоматизация процессов купли-продажи электроэнергии</p>
                </div>

                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <BarChart className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Оптимизация</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Снижение рисков и повышение эффективности</p>
                </div>

                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl lg:rounded-2xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Надежность</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Соответствие российскому законодательству</p>
                </div>
              </div>
            </div>

            {/* Документация и контакты */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Документация */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-xl sm:rounded-2xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  Документация
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {productInfo.documentation.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => handleDownload(doc.url, doc.filename)}
                      disabled={downloading === doc.filename}
                      className="w-full text-left p-3 sm:p-4 bg-white/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/doc flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-foreground/80 group-hover/doc:text-foreground transition-colors duration-200 text-xs sm:text-sm lg:text-base text-justify pr-2 sm:pr-4">
                        {doc.title}
                      </span>
                      <div className="ml-2 sm:ml-4 flex-shrink-0 flex items-center">
                        {downloading === doc.filename ? (
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-blue-600 dark:border-blue-400"></div>
                        ) : (
                          <Download className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400 opacity-0 group-hover/doc:opacity-100 transition-opacity duration-200" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Контакты */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-xl sm:rounded-2xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3 sm:mb-4">
                  Для получения лицензии и консультации
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={`tel:${productInfo.contacts.phone.replace(/-/g, '')}`}
                    className="flex items-center p-3 sm:p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/phone"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 dark:group-hover/phone:bg-blue-800/30 transition-colors duration-200">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-foreground/60">Телефон</p>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover/phone:text-blue-700 dark:group-hover/phone:text-blue-300 transition-colors duration-200">
                        {productInfo.contacts.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${productInfo.contacts.email}`}
                    className="flex items-center p-3 sm:p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-xl sm:rounded-2xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/email"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 dark:group-hover/email:bg-blue-800/30 transition-colors duration-200">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-foreground/60">Электронная почта</p>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover/email:text-blue-700 dark:group-hover/email:text-blue-300 transition-colors duration-200">
                        {productInfo.contacts.email}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700/30">
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">
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