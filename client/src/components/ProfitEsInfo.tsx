import { Download, Phone, Mail, FileText, Award, BarChart, Shield, Zap } from "lucide-react";
import { useState } from "react";
import descriptionPdf from "@assets/images/Описание.pdf";
import guidePdf from "@assets/images/Руководство.pdf";
export default function ProfitEsInfo() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const doc1Url = descriptionPdf;
  const doc2Url = guidePdf;

  const handleDownload = (url: string, filename: string) => {
    setDownloading(filename);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(null), 1000);
  };

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
      email: "info@it4prof.ru"
    }
  };

  return (
    <section className="pt-16 pb-16 overflow-hidden bg-beige-light dark:bg-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-brown-dark mb-3 sm:mb-4 lg:mb-5">
            Автоматизированная информационная система <br />«Профит — ЭС»
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-brown-dark max-w-3xl mx-auto text-center sm:text-center">
            Комплексное решение для автоматизации энергосбытовой деятельности
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm bg-white ">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-brown-dark mr-1.5 sm:mr-2" />
              <span className="font-medium text-brown-dark">Роспатент: <span className="font-bold">№ {productInfo.registration.reestr}</span></span>
            </div>
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm bg-white ">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-brown-dark mr-1.5 sm:mr-2" />
              <span className="font-medium text-brown-dark">Реестр ПО: <span className="font-bold">№ {productInfo.registration.russianReestr}</span></span>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-2 sm:mb-3">
              О продукте
            </h4>
            <p className="text-brown-dark leading-relaxed text-sm sm:text-base text-justify">
              {productInfo.about}
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl ">
            <h4 className="text-base sm:text-lg lg:text-xl text-brown-dark font-semibold mb-2 sm:mb-3">
              Назначение программы
            </h4>
            <p className="text-brown-dark leading-relaxed text-sm sm:text-base text-justify">
              {productInfo.purpose}
            </p>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-3 sm:mb-4 flex items-center">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brown-dark mr-2" />
            Решаемые задачи
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {productInfo.tasks.map((task, index) => (
              <li key={index} className="flex sm:items-center items-start group/task">
                <div className="flex-shrink-0 mt-0.5 sm:mt-0 mr-2 sm:mr-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brown-dark rounded-full flex items-center justify-center transition-colors">
                    <span className="text-beige-light text-xs sm:text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-brown-dark leading-relaxed text-sm sm:text-base text-justify transition-colors pt-0.5 sm:pt-0">
                  {task}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 sm:mb-8">
          <p className="text-brown-dark leading-relaxed text-sm sm:text-base text-justify mb-3 sm:mb-4">
            <strong className="text-brown-dark">
              Программное обеспечение для покупки и продажи электроэнергии
            </strong> — важный инструмент для энергосбытовых компаний. Оно не только автоматизирует и оптимизирует процессы, но и способствует повышению эффективности, снижению рисков и улучшению обслуживания клиентов.
          </p>
          <p className="text-brown-dark leading-relaxed text-sm sm:text-base text-justify">
            В условиях постоянно меняющегося энергетического рынка наличие современного и функционального ПО становится ключевым фактором успешной деятельности компаний в этой области.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 bg-brown-dark rounded-xl sm:rounded-2xl ">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-beige-light mb-2 sm:mb-3">
              Технологии
            </h4>
            <p className="text-beige-light text-sm sm:text-base mb-2 sm:mb-3 text-justify">
              <span className="font-bold">Платформа:</span> {productInfo.technologies.platform}
            </p>
            <div className="mt-3 sm:mt-4">
              <p className="font-bold text-beige-light text-sm sm:text-base mb-1.5 sm:mb-2">Используемые библиотеки:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                {productInfo.technologies.libraries.map((lib, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-1.5 sm:mr-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-beige-light rounded-full flex items-center justify-center">
                        <span className="text-brown-dark text-[10px] sm:text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-beige-light">{lib.name}</p>
                      <p className="text-xs sm:text-sm text-beige-light mt-0.5 sm:mt-1 text-justify">{lib.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl ">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-2 sm:mb-3">
              Классификация ПО
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-bold text-brown-dark mb-1">
                  Основной класс
                </p>
                <p className="text-brown-dark  text-sm sm:text-base text-justify">{productInfo.classification.main}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-brown-dark mb-1">
                  Дополнительный класс
                </p>
                <p className="text-brown-dark  text-sm sm:text-base text-justify">{productInfo.classification.additional}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-3 sm:mb-4">
            Ключевые преимущества системы
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl  shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-dark rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-beige-light" />
                </div>
                <span className="font-semibold text-brown-dark text-sm sm:text-base">Автоматизация</span>
              </div>
              <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark text-justify">Полная автоматизация процессов купли-продажи электроэнергии</p>
            </div>

            <div className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl  shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-dark rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <BarChart className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-beige-light" />
                </div>
                <span className="font-semibold text-brown-dark text-sm sm:text-base">Оптимизация</span>
              </div>
              <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark text-justify">Снижение рисков и повышение эффективности</p>
            </div>

            <div className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl  shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brown-dark rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-beige-light" />
                </div>
                <span className="font-semibold text-brown-dark text-sm sm:text-base">Надежность</span>
              </div>
              <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark text-justify">Соответствие российскому законодательству</p>
            </div>
          </div>
        </div>

        {/* Документация и контакты */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Документация */}
          <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl  shadow-lg transition-all duration-300">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-3 sm:mb-4">
              Документация
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {productInfo.documentation.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => handleDownload(doc.url, doc.filename)}
                  disabled={downloading === doc.filename}
                  className="w-full text-left p-3 sm:p-4 bg-white rounded-lg lg:rounded-2xl shadow-lg transition-all duration-300 group/doc flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed hover:border-brown-dark dark:hover:border-brown/50"
                >
                  <span className="text-brown-dark group-hover/doc:text-brown transition-colors duration-200 text-sm sm:text-base lg:text-base xl:text-base text-justify pr-2 sm:pr-4">
                    {doc.title}
                  </span>
                  <div className="ml-2 sm:ml-4 flex-shrink-0 flex items-center">
                    {downloading === doc.filename ? (
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-brown-dark"></div>
                    ) : (
                      <Download className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-brown-dark opacity-0 group-hover/doc:opacity-100 transition-opacity duration-200" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl  shadow-lg transition-all duration-300">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brown-dark mb-3 sm:mb-4">
              Для получения лицензии и консультации
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`tel:${productInfo.contacts.phone.replace(/-/g, '')}`}
                className="flex items-center p-3 sm:p-4 bg-white rounded-lg lg:rounded-2xl  shadow-lg transition-all duration-300 group/phone hover:border-brown-dark dark:hover:border-brown/50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover/phone:bg-brown-dark transition-colors duration-200">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-brown-dark group-hover/phone:text-beige-light transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-brown-dark">Телефон</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-brown-dark transition-colors duration-200">
                    {productInfo.contacts.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${productInfo.contacts.email}`}
                className="flex items-center p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl shadow-lg transition-all duration-300 group/email hover:border-brown-dark dark:hover:border-brown/50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover/email:bg-brown-dark transition-colors duration-200">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-brown-dark group-hover/email:text-beige-light transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-brown-dark">Электронная почта</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-brown-dark transition-colors duration-200">
                    {productInfo.contacts.email}
                  </p>
                </div>
              </a>
            </div>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-brown-dark ">
              <p className="text-xs sm:text-sm text-brown-dark text-justify">
                Разработчик: <span className="font-medium">{productInfo.registration.developer}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
