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
        <section className="pt-0 pb-4 sm:pt-8 sm:pb-0">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
                        Модификация и адаптация <span className="text-blue-600 dark:text-blue-400">типовых решений</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Сертифицированные сотрудники предоставляют клиентам квалифицированную помощь в выборе продуктов и сервисов 1С
                    </p>
                </div>
                {/* Основной контент в карточке как в примере */}
                <div className="transition-all duration-300">

                    {/* Заголовок карточки */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                        Наши услуги по модификации
                    </h3>

                    {/* Табы для выбора услуги */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {modificationServices.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center ${activeTab === index
                                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg border-transparent'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-600'
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
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${modificationServices[activeTab].color} flex items-center justify-center text-white flex-shrink-0`}>
                                {modificationServices[activeTab].icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                                    {modificationServices[activeTab].title}
                                </h4>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                    {modificationServices[activeTab].description}
                                </p>
                            </div>
                        </div>

                        {/* Детали услуги */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {modificationServices[activeTab].details.map((detail, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md"
                                >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-foreground leading-tight">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Блок с информацией о франчайзи и сертификатами */}
                    <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-xl transition-all duration-300 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center gap-3 mb-3">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                            <h4 className="text-base sm:text-lg font-bold text-foreground">ООО «ПРОФ ИТ» входит в сеть «1С:Франчайзи»</h4>
                        </div>

                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                            Специалисты ООО «ПРОФ ИТ» имеют:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 p-4 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-none hover:shadow-2xl transition-all duration-300 hover:shadow-md">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">4</div>
                                <div className="text-sm font-medium text-foreground">сертификата</div>
                                <div className="text-xs text-muted-foreground mt-1">1С:Специалист</div>
                            </div>
                            <div className="flex-1 p-4 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:shadow-none hover:shadow-2xl transition-all duration-300 hover:shadow-md">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">7</div>
                                <div className="text-sm font-medium text-foreground">сертификатов</div>
                                <div className="text-xs text-muted-foreground mt-1">1С:Профессионал</div>
                            </div>
                        </div>

                        {/* Дополнительные преимущества */}
                        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                            <h5 className="text-sm font-semibold text-foreground mb-2">Преимущества работы с нами:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    "Сохранение обновляемости системы",
                                    "Профессиональный подход",
                                    "Индивидуальные решения",
                                    "Поддержка 24/7"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-xs sm:text-sm text-foreground">{benefit}</span>
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