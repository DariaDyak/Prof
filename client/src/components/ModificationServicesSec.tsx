import { Code, Puzzle, Cpu, Award } from "lucide-react";
import { useState } from "react";

const modificationServices = [
    {
        icon: <Puzzle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        title: "Расширения",
        description: "Без изменения исходного кода",
        color: "from-blue-500 to-purple-600",
        details: [
            "Локальное внедрение функций",
            "Сохранение обновляемости",
            "Под запрос Заказчика",
            "Изолированные решения"
        ]
    },
    {
        icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        title: "Внешние доработки",
        description: "Дополнительные объекты и отчеты",
        color: "from-blue-500 to-purple-600",
        details: [
            "Новые отчеты и печатные формы",
            "Дополнительные обработки",
            "Интеграционные модули",
            "Внешние компоненты"
        ]
    },
    {
        icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        title: "Кодирование",
        description: "Модификация исходного кода",
        color: "from-blue-500 to-purple-600",
        details: [
            "Исправление ошибок в коде",
            "Оптимизация алгоритмов",
            "Доработка типовых решений",
            "Создание нетиповых модулей"
        ]
    },
];

export default function ModificationServicesSec() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="pt-0 pb-6 sm:pt-8 sm:pb-4 ">
    <div className="container mx-auto px-4 lg:px-8 pb-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 mt-6 sm:mt-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-brown-dark dark:text-beige mb-4 sm:mb-5 lg:mb-6">
                Модификация и адаптация типовых решений
                </h2>
                    <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige max-w-3xl mx-auto leading-relaxed">
                        Сертифицированные сотрудники предоставляют клиентам квалифицированную помощь в выборе продуктов и сервисов 1С
                    </p>
                </div>
                {/* Основной контент в карточке как в примере */}
                <div className="transition-all duration-300">

                    {/* Заголовок карточки */}
                    <h3 className="text-lg sm:text-xl font-bold text-brown-dark dark:text-beige mb-4 sm:mb-6">
                        Наши услуги по модификации
                    </h3>

                    {/* Табы для выбора услуги */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {modificationServices.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center ${activeTab === index
                                    ? 'bg-brown-dark text-white dark:text-white shadow-lg border-transparent'
                                    : 'bg-white dark:text-brown-dark hover:bg-beige dark:hover:text-brown-dark dark:hover:bg-beige'
                                    }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Контент активного таба */}
                    <div className="space-y-3 sm:space-y-4">
                        {/* Заголовок и описание */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 mt-6 sm:mb-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brown-dark ${modificationServices[activeTab].color} flex items-center justify-center text-white flex-shrink-0`}>
                                {modificationServices[activeTab].icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-base sm:text-lg font-semibold dark:text-beige text-brown-dark leading-tight">
                                    {modificationServices[activeTab].title}
                                </h4>
                                <p className="text-xs sm:text-sm text-brown-dark dark:text-beige mt-1">
                                    {modificationServices[activeTab].description}
                                </p>
                            </div>
                        </div>

                        {/* Детали услуги */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {modificationServices[activeTab].details.map((detail, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border transition-all duration-300"
                                >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-brown-dark leading-tight">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Блок с информацией о франчайзи и сертификатами */}
                    <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white transition-all duration-300 rounded-2xl border">
                        <div className="flex items-center gap-3 mb-3">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brown-dark" />
                            <h4 className="text-base sm:text-lg font-bold text-brown-dark">ООО «ПРОФ ИТ» входит в сеть «1С:Франчайзи»</h4>
                        </div>

                        <p className="text-xs sm:text-sm text-brown-dark mb-4">
                            Специалисты ООО «ПРОФ ИТ» имеют:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 p-4 rounded-lg border transition-all duration-300">
                                <div className="text-2xl sm:text-3xl font-bold text-brown-dark mb-1">4</div>
                                <div className="text-sm font-medium text-brown-dark">сертификата</div>
                                <div className="text-xs text-brown-dark mt-1">1С:Специалист</div>
                            </div>
                            <div className="flex-1 p-4 rounded-lg border transition-all duration-300 hover:shadow-md">
                                <div className="text-2xl sm:text-3xl font-bold text-brown-dark mb-1">7</div>
                                <div className="text-sm font-medium text-brown-dark">сертификатов</div>
                                <div className="text-xs text-brown-dark mt-1">1С:Профессионал</div>
                            </div>
                        </div>

                        {/* Дополнительные преимущества */}
                        <div className="mt-4 pt-4 border-t">
                            <h5 className="text-sm font-semibold text-brown-dark mb-2">Преимущества работы с нами:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    "Сохранение обновляемости системы",
                                    "Профессиональный подход",
                                    "Индивидуальные решения",
                                    "Поддержка 24/7"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brown-dark rounded-full flex-shrink-0"></div>
                                        <span className="text-xs sm:text-sm text-brown-dark">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}