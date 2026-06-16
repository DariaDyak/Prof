"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  ChevronUp,
  Code2,
  ShieldCheck,
  Database,
  BrainCircuit,
  Cloud, Store, PieChart
} from "lucide-react";

type CaseCategory =
  | "Все"
  | "Разработка и модификация"
  | "Информационная безопасность"
  | "Проектная деятельность"
  | "Сопровождение продукта";

interface CaseItem {
  id: number;
  title: string;
  category: CaseCategory;
  description: string;
  technologies: string[];
  advantages: string[];
  details: string;
  rospatent: string[];
  registry: string[];
  icon: React.ReactNode;
  link?: string;
}

export default function CaseCardSection() {
  const [activeFilter, setActiveFilter] =
    useState<CaseCategory>("Все");

  const [openedCase, setOpenedCase] = useState<number | null>(null);
  const navigate = useNavigate();

  const filters: CaseCategory[] = [
    "Все",
    "Разработка и модификация",
    "Информационная безопасность",
    "Проектная деятельность",
    "Сопровождение продукта",
  ];

  const cases: CaseItem[] = [
    {
      id: 1,
      title: "Автоматизированная информационная система ПРОФИТ-ЭС",
      category: "Разработка и модификация",
      link: "/profitEs",
      description:
        "Автоматизация и оптимизация процессов купли-продажи электроэнергии для энергосбытовых компаний",
      technologies: ["1С:Предприятие 8.3"],
      advantages: [
        "Полная автоматизация процессов купли-продажи электроэнергии",
        "Снижение рисков и повышение эффективности",
        "Соответствие требованиям российского законодательства",
      ],
      details: "Система обеспечивает автоматизацию расчётов, обработку договоров, ведение отчетности и контроль операций на рынке электроэнергии. Внедрение решения позволило значительно сократить объем ручной обработки данных и повысить прозрачность бизнес-процессов.",
      rospatent: ["№2024686145"],
      registry:
        ["№26848"],
      icon: <Code2 className='w-5 h-5 text-white' />,
    },

    {
      id: 2,
      title: "Автоматизированная информационная система ПРОФИТ-ЛС",
      category: "Разработка и модификация",
      description:
        "Автоматизация управления подвижным составом и логистики железнодорожных перевозок",
      technologies: ["1С:Предприятие 8.3"],
      link: "/profitLs",
      advantages: [
        "Полная автоматизация управления подвижым составом",
        "Снижение простоев и повышение эффективности перевозок",
        "Соответствие российскому законодательству",
      ],
      details:
        "Система обеспечивает мониторинг и контроль движения вагонов, управление ремонтами и обслуживанием, а также интеграцию с внешними системами для эффективного взаимодействия между всеми участниками логистической цепочки.",
      rospatent: ["№2025660499"],
      registry:
        [""],
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },

    {
      id: 3,
      title: "Система ПРОФИТ-УМО",
      category: "Разработка и модификация",
      description:
        "Расширение для 1С:Бухгалтерии",
      technologies: ["1С:Предприятие 8.3"],
      link: "/profitMo",
      advantages: [
        "Автоматизация взаимодействия между системой ЭСМО и 1С:Бухгалтерия",
        "Исключение ошибок ручного ввода и дублирования данных",
        "Снижение трудозатрат на ведение учета в двух системах",
      ],
      details:
        "Автоматизация обмена данными и элементами управления между системой ЭСМО и 1С:Бухгалтерия, создание единой информационной среды для сбора, обмена, хранения и обработки информации о медицинских осмотрах.",
      rospatent: ["№2025688393"],
      registry:
        [""],
      icon: <Database className="w-5 h-5 text-white" />,
    },

    {
      id: 4,
      title: "Услуга мониторинга обработки корпоративной информации",
      category: "Информационная безопасность",
      description:
        "Контроль над корпоративными данными как фактор капитализации бизнеса",
      technologies: [""],
      advantages: [
        "Снижение вероятности критических потерь - устранение факторов, приводящих к потере клиентской базы, коммерческих условий и стратегических данных",
        "Защита выручки и маржи - выявление и снижение скрытых каналов потери клиентов и коммерческой информации",
        "Рост управляемости и эффективности организации - полная прослеживаемость действий с данными на уровне процессов и работы сотрудников",
        "Соответствие регуляторным требованиям - снижение риска санкций и оборотных штрафов, включая требования 152-ФЗ",
      ],
      details:
        `В современной компании ключевые риски сосредоточены не во внешней среде, а внутри операционных процессов — там, где ежедневно обрабатываются данные, формирующие выручку, маржинальность и конкурентное преимущество. 

         Наш подход позволяет обеспечить управляемость и прозрачность всех операций с корпоративной информацией — без влияния на скорость и эффективность бизнеса. 
         
         Запишитесь на бесплатное пилотное тестирование – это займет не более 45 минут. Вы увидите систему мониторинга в действии и убедитесь в её возможностях и эффективности. Внедрение – от 7 дней.`,
      rospatent: [""],
      registry:
        [""],
      icon: <BrainCircuit className="w-5 h-5 text-white" />,
    },
    {
      id: 5,
      title: "Консалтинг по обработке персональных данных в корпоративной среде – 152-ФЗ",
      category: "Информационная безопасность",
      description:
        "Мы проведём полный «чек-ап» процессов обработки данных за 3 дня и предоставим дорожную карту изменений, которые реально помогут защитить Ваш бизнес",
      technologies: [""],
      advantages: [
        "Защита от финансового ущерба",
        "Предотвращение репутационных потерь",
        "Снижение нагрузки на юристов и ИТ – все регламенты и политики будут адаптированы для Вашей организации и готовы к использованию",
        "Полная прозрачность процессов обработки ПДн",
      ],
      details:
        `Поможем разработать необходимые политики, положения и регламенты, расскажем, как наиболее эффективно их внедрить и применять, что делать при проверке. Обеспечим консультационную поддержку на всех этапах. Вы получите спокойствие и высокую дисциплину работы с персональными данными. 
          
         Получите бесплатную консультацию нашего эксперта для самопроверки или просто напишите нам: выполним для Вас полный «чек-ап» процессов обработки ПДн со скидкой `,
      rospatent: [""],
      registry:
        [""],
      icon: <Cloud className="w-5 h-5 text-white" />,
    },
    {
      id: 6,
      title: "Техническое сопровождение рабочих мест, серверов и сервисов 1С",
      category: "Сопровождение продукта",
      description:
        "Комплексная техническая поддержка ИТ-инфраструктуры и программных продуктов 1С",
      technologies: [
        "",
      ],
      advantages: [
        "Обеспечение стабильной работы сервисов и рабочих мест",
        "Снижение времени простоя и оперативное устранение инцидентов",
        "Контроль производительности серверов и баз данных",
        "Гарантированный уровень технической поддержки",
      ],
      details:
        `В условиях быстро развивающихся технологий важно не только выбрать правильный программный продукт, но и обеспечить его надежную работу и сопровождение.
   Мы предоставляем комплексную техническую поддержку рабочих мест, серверов и сервисов 1С, включая мониторинг, администрирование, резервное копирование и устранение неисправностей.
   
   Поддержка позволяет Заказчику получить гарантированный уровень качества сопровождения программных продуктов и стабильную работу ИТ-инфраструктуры.`
      ,
      rospatent: [],
      registry: [],
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
    {
      id: 7,
      title: "ИТ-сопровождение при открытии торговых точек",
      category: "Сопровождение продукта",
      description:
        "Подбор, закупка, настройка и сопровождение торгового оборудования и систем 1С",
      technologies: [

      ],
      advantages: [
        "Быстрый запуск торговой точки",
        "Комплексная настройка оборудования и ПО",
        "Интеграция касс, сканеров и терминалов с 1С",
        "Полное сопровождение после запуска",
      ],
      details:
        `ИТ-поддержка при открытии торговой точки обеспечивает своевременную инсталляцию оборудования и настройку программного обеспечения.

     Мы выполняем подбор, закупку и подключение торгового оборудования, интеграцию с системами 1С и настройку рабочих мест сотрудников.

     Комплекс услуг позволяет бизнесу быстро начать работу, минимизировать технические риски и обеспечить стабильное функционирование торговой инфраструктуры.`,
      rospatent: [],
      registry: [],
      icon: <Store className="w-5 h-5 text-white" />,
    },
    {
      id: 8,
      title: "Экспертное сопровождение проектов: от идеи до закрытия в срок",
      category: "Проектная деятельность",
      description: "Берем управление проектом на себя - планируем, направляем, контролируем и сдаем вовремя без выгорания команды",
      technologies: [""],
      advantages: [
        "Предсказуемый результат - исключаем сдвиги сроков и неконтролируемый рост бюджета за счет жесткого план-фактного анализа",
        "Разгрузка вашего management - мы задаем направление проекта, синхронизируем ресурсы и берем на себя коммуникацию со всеми стейкхолдерами",
        "Прозрачность на 100% - единый центр управления проектом с понятными метриками, вехами и зонами ответственности",
        "Гарантия соблюдения сроков - проектный офис работает как система: недельные спринты, управление рисками и автоматический триггер при отклонениях"
      ],
      details: `В большинстве компаний проекты стопорятся не из-за сложности задач, а из-за размытой ответственности, плавающих приоритетов и иллюзии «самоорганизации». 

Наш подход - взять на себя профессиональное управление проектом. Мы задаём архитектуру работ, жёстко планируем сроки, балансируем ресурсы и доводим до результата. Вы получаете не отчёт, а управляемую траекторию, где «вовремя» - это норма, а не достижение.

Мы покажем точку сбоя и смоделируем график, который будет соблюдён. Внедрение проектного управления — от 3 дней.`,
      rospatent: [""],
      registry: [""],
      icon: <PieChart className="w-5 h-5 text-white" />
    }
  ];

  const filteredCases = useMemo(() => {
    if (activeFilter === "Все") return cases;

    return cases.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="cases_all" className="py-12 sm:py-12 bg-beige/50 overflow-hidden">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="text-left mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-brown-dark dark:text-beige mb-3">
            Кейсы компании
          </h2>
          <p className="text-brown text-sm mt-6 sm:mt-3 lg:mt-8 sm:text-lg dark:text-beige mb-3">
            Реализованные проекты по разработке, информационной безопасности, автоматизации и внедрению корпоративных систем
          </p>
        </div>


        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                lg:flex lg:flex-wrap lg:justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 
                  min-w-[120px] sm:min-w-[140px] text-center 
                  ${activeFilter === filter
                  ? 'bg-brown-dark text-white dark:text-white shadow-lg border-transparent'
                  : 'bg-white dark:text-brown-dark hover:bg-beige dark:hover:text-brown-dark dark:hover:bg-beige'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-5">
          {filteredCases.map((item) => {
            const isOpen = openedCase === item.id;

            return (
              <Card
                key={item.id}
                className="bg-white  rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg dark:shadow-none transition-all duration-300 h-full border border-beige/30 dark:border-brown/30"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brown-dark flex items-center justify-center shadow-lg shrink-0">
                        {item.icon}
                      </div>

                      <div>


                        <h3
                          onClick={() => item.link && navigate(item.link)}
                          className={`
    text-base sm:text-base font-bold mb-2 transition-colors
    ${item.link
                              ? "text-brown-dark cursor-pointer hover:text-brown hover:underline underline-offset-4"
                              : "text-brown-dark cursor-default"}
  `}
                        >
                          {item.title}
                        </h3>

                        <p className="text-sm text-brown-dark leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>


                  </div>

                  {/* Advantages */}
                  <div className="mt-6">


                    <ul className="space-y-2 sm:space-y-3">
                      {item.advantages.map((advantages, index) => (
                        <li key={index} className="flex sm:items-center items-start">
                          <div className="flex-shrink-0 mt-0.5 sm:mt-0 mr-2 sm:mr-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brown-dark rounded-full flex items-center justify-center transition-colors">
                              <span className="text-beige-light text-xs sm:text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                          </div>
                          <p className="text-brown-dark leading-relaxed text-sm sm:text-sm text-justify transition-colors pt-0.5 sm:pt-0">
                            {advantages}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>



                  {/* Технологии */}
                  {item.technologies?.some(Boolean) && (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-brown-dark mb-3">
                          Технологии
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs sm:text-sm"
                            >
                              {tech}
                            </span>

                          )
                          )}
                        </div>
                      </div>


                    </div>
                  )}

                  {/* Реестры */}
                  {(item.rospatent?.some(Boolean) ||
                    item.registry?.some(Boolean)) && (
                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Роспатент */}
                        {item.rospatent?.some(Boolean) && (
                          <div>
                            <h4 className="text-sm font-semibold text-brown-dark mb-3">
                              Роспатент
                            </h4>

                            <div className="flex flex-wrap gap-2">
                              {item.rospatent.map(
                                (patent, idx) =>
                                  patent && (
                                    <span
                                      key={idx}
                                      className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs sm:text-sm"
                                    >
                                      {patent}
                                    </span>
                                  )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Реестр ПО */}
                        {item.registry?.some(Boolean) && (
                          <div>
                            <h4 className="text-sm font-semibold text-brown-dark mb-3">
                              Реестр ПО
                            </h4>

                            <div className="flex flex-wrap gap-2">
                              {item.registry.map(
                                (reg, idx) =>
                                  reg && (
                                    <span
                                      key={idx}
                                      className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs sm:text-sm"
                                    >
                                      {reg}
                                    </span>
                                  )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  {/* Expanded */}
                  <div className="mt-6">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-brown-dark">
                        Подробнее о проекте
                      </h4>

                      {/* Toggle */}
                      <button
                        onClick={() =>
                          setOpenedCase(isOpen ? null : item.id)
                        }
                        className="w-10 h-10 rounded-full bg-brown-dark text-white flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105"
                      >
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Line */}
                    <div className="border-t border-gray-200 mt-4" />

                    {/* Content */}
                    <div
                      className={`
      grid transition-all duration-500 ease-in-out
      ${isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-5"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                        }
    `}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-brown-dark whitespace-pre-line">

                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section >
  );
}