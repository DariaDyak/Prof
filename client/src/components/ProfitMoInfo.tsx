import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Download, CheckCircle, FileText, Users, RefreshCw, Shield, Building, FileCheck, Settings, Lock, Database } from "lucide-react";
import { useState } from "react";

export default function ProfitMoInfo() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const doc1Url = "/attached_assets/generated_images/Презентация_API_Профит-УМО.pdf";
  

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
    title: "Интеграционный модуль API «Профит-УМО»",
    about: "Программа «Профит-УМО» — разработана ООО «ПРОФ ИТ» для интеграции системы ЭСМО (Электронная Система Медицинских Осмотров) с 1С:Бухгалтерия, зарегистрирована в Роспатенте под номером № 2025688393",
    purpose: "Автоматизация обмена данными и элементами управления между системой ЭСМО и 1С:Бухгалтерия, создание единой информационной среды для сбора, обмена, хранения и обработки информации о медицинских осмотрах",

    problems: [
      "Интеграция 1С:Бухгалтерии с системой «ЭСМО»",
      "Автоматический экспорт данных о медосмотрах из «ЭСМО»",
      "Управление контрагентами в системе «ЭСМО» напрямую из 1С:Бухгалтерии",
      "Сокращение ручного ввода за счет синхронизации данных между системами",
      "Исключение ошибок, вызванных ручным вводом информации"
    ],

    benefits: [
      "Сокращение операционных расходов за счет отказа от ручных операций и двойного ввода данных",
      "Снижение финансовых рисков, связанных с ошибками в документах и расчетах",
      "Ускорение денежного оборота за счет автоматического формирования бухгалтерских документов по утвержденным тарифам",
      "Создание масштабируемой системы учета, которая не потребует увеличения штата при росте числа клиентов"
    ],

    modules: [
      {
        name: "Справочник «Клиенты»",
        icon: <Users className="w-4 h-4" />,
        description: "Работа со списком клиентов, групп организаций. Просмотр всех действующих контрагентов, структуры их организаций, заведение новых клиентов, получение данных по прошедшим медосмотрам и формирование документов на реализацию"
      },
      {
        name: "Договорные условия",
        icon: <FileCheck className="w-4 h-4" />,
        description: "Хранение данных по договорным условиям с каждым контрагентом и алгоритму выставления счетов. Бухгалтер один раз вносит данные, программа автоматически формирует счета и закрывающие документы"
      },
      {
        name: "Документ «Медосмотры ЭСМО»",
        icon: <Database className="w-4 h-4" />,
        description: "Получение данных из ЛК ЭСМО, группировка медосмотров помесячно по организациям. Просмотр количества успешных медосмотров, допусков и недопусков по каждой организации"
      },
      {
        name: "Автоматическое формирование документов",
        icon: <RefreshCw className="w-4 h-4" />,
        description: "Автоматическое формирование счетов на оплату и закрывающих документов на основании условий договора и количества проведенных медосмотров. Программа поддерживает как авансирование, так и постоплату"
      },
      {
        name: "Гибкие схемы выставления счетов",
        icon: <Settings className="w-4 h-4" />,
        description: "Поддержка нестандартных схем: счета могут формироваться сводно по всем организациям или по каждой организации отдельно. По медосмотрам, проведенным одной организацией, можно выбрать другую организацию плательщика"
      },
      {
        name: "Система прав доступа",
        icon: <Lock className="w-4 h-4" />,
        description: "Разграничение доступа к информации и управлению. Индивидуальные права доступа для каждого пользователя: Полные права, Чтение, Редактирование"
      }
    ],

    technologies: {
      platform: "1С: Предприятие 8.3",
      integration: "Решение реализовано как расширение для конфигурации «1С:Бухгалтерия предприятия 8.3»",
      features: [
        "Двусторонний обмен данными",
        "Автоматическая синхронизация",
        "Формирование комплекта документов",
        "Управление контрагентами и отчетность"
      ]
    },

    classification: {
      main: "12.08 Программное обеспечение для автоматизации бизнес-процессов и интеграции систем",
      additional: "12.04 Программное обеспечение для управления предприятием (ERP)"
    },

    registration: {
      reestr: "2025688393",
      developer: "ООО «ПРОФ ИТ»"
    },

    documentation: [
      {
        title: "Презентация API ПРОФИТ-УМО",
        url: doc1Url,
        filename: "Презентация API ПРОФИТ-УМО.pdf"
      },
    ],

    contacts: {
      phone: "8-800-200-29-70",
      email: "info@it4prof.ru"
    }
  };

  return (
    <section className="pt-16 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-5">
            Интеграционный модуль <span className="block text-blue-600 dark:text-blue-400">«Профит-УMO»</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-center sm:text-center">
            Автоматизация взаимодействия между системой ЭСМО и 1С:Бухгалтерия
          </p>
        </div>

        {/* Основная карточка */}
        <Card className="group bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-sm shadow-lg transition-all duration-500 mb-8">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {/* Заголовок и реестры */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-xs sm:text-sm">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 mr-1.5 sm:mr-2" />
                  <span className="font-medium">Роспатент: <span className="text-blue-600 dark:text-blue-400">№ {productInfo.registration.reestr}</span></span>
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

            {/* Решаемые проблемы */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Решаемые проблемы
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {productInfo.problems.map((problem, index) => (
                  <li key={index} className="flex items-start group/problem">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-2 sm:mr-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover/problem:bg-blue-200 dark:group-hover/problem:bg-blue-800/50 transition-colors">
                        <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify group-hover/problem:text-foreground transition-colors">
                      {problem}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Экономические выгоды */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                Экономические выгоды внедрения
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {productInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start group/benefit">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-2 sm:mr-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover/benefit:bg-blue-200 dark:group-hover/benefit:bg-blue-800/50 transition-colors">
                        <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <p className="text-foreground/90 leading-relaxed text-sm sm:text-base text-justify group-hover/benefit:text-foreground transition-colors">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Модули программы */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400 mr-2" />
                Модули программы
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {productInfo.modules.map((module, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 dark:text-blue-400">
                          {module.icon}
                        </span>
                      </div>
                      <span className="font-semibold text-foreground text-sm sm:text-base">{module.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 text-justify flex-grow">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Технологии и классификация в сетке */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Технологии */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2 sm:mb-3">
                  Технологии и интеграция
                </h4>
                <p className="text-foreground/90 text-sm sm:text-base mb-2 sm:mb-3 text-justify">
                  <span className="font-medium">Платформа:</span> {productInfo.technologies.platform}
                </p>
                <p className="text-foreground/90 text-sm sm:text-base mb-3 sm:mb-4 text-justify">
                  <span className="font-medium">Реализация:</span> {productInfo.technologies.integration}
                </p>
                <div className="mt-3 sm:mt-4">
                  <p className="font-medium text-foreground text-sm sm:text-base mb-1.5 sm:mb-2">Ключевые возможности:</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {productInfo.technologies.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-1.5 sm:mr-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs">✓</span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/80">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Классификация */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-100 dark:border-purple-800/50">
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
                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <RefreshCw className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Автоматизация</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Автоматизация взаимодействия между системой ЭСМО и 1С:Бухгалтерия</p>
                </div>

                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Точность данных</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Исключение ошибок ручного ввода и дублирования данных</p>
                </div>

                <div className="p-3 sm:p-4 bg-white dark:bg-transparent rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Users className="w-3 h-3 sm:w-4 sm:h-5 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold text-foreground text-sm sm:text-base">Экономия времени</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 text-justify">Снижение трудозатрат на ведение учета в двух системах</p>
                </div>
              </div>
            </div>

            {/* Документация и контакты */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Документация */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-800/30 shadow-lg transition-all duration-300">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  Документация
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {productInfo.documentation.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => handleDownload(doc.url, doc.filename)}
                      disabled={downloading === doc.filename}
                      className="w-full text-left p-3 sm:p-4 bg-white/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/doc flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-900/10 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3 sm:mb-4">
                  Для получения лицензии и консультации
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={`tel:${productInfo.contacts.phone.replace(/-/g, '')}`}
                    className="flex items-center p-3 sm:p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/phone"
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
                    className="flex items-center p-3 sm:p-4 bg-white/80 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg transition-all duration-300 group/email"
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