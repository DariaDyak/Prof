export default function ProjectDevelopmentSection() {
    return (
        <section className=" overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="group backdrop-blur-sm transition-all duration-500 mb-8">
                    <div>
                        <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-center dark:text-beige text-brown-dark">
                                Услуги в области
                                <span> разработки ПО</span>
                            </h2>

                           
                            <p className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige leading-relaxed text-justify">
                                Мы создаем уникальные 1С-конфигурации для бизнесов с нестандартными процессами, где типовые решения не подходят. Сложные алгоритмы, отраслевые модули, например, для
                                <span className="font-bold"> энергетики, логистики, медицины.</span>
                            </p>
                        </div>

                        {/* Разделительная линия */}
                        <div className="my-8 border-t border-brown-dark dark:border-beige"></div>

                        <div className="space-y-4 sm:space-y-6 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brown-dark dark:bg-beige dark:text-brown-dark text-white flex items-center justify-center font-bold flex-shrink-0 ">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-xl font-bold dark:text-beige text-brown-dark mb-3">Разработка с нуля</h3>
                                    <div className="ml-4 space-y-3">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-brown-dark dark:bg-beige rounded-full mt-2 flex-shrink-0"></div>
                                           
                                            <span className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige">Адаптация любого продукта под потребности бизнеса</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-brown-dark dark:bg-beige rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige">Интеграция с любыми внешними сервисами</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-brown-dark dark:bg-beige rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm sm:text-base lg:text-base xl:text-base text-brown-dark dark:text-beige">Автоматизация эксклюзивных задач</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brown-dark dark:bg-beige dark:text-brown-dark text-white flex items-center justify-center font-bold flex-shrink-0 ">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-xl font-bold dark:text-beige text-brown-dark mb-3">
                                        Доработка и адаптация типовых конфигураций 1С
                                    </h3>
                                   
                                    <p className="text-sm sm:text-base lg:text-base xl:text-base dark:text-beige text-brown-dark leading-relaxed text-justify mb-4">
                                        Оптимизируем стандартные продукты (1С:Бухгалтерия, 1С:Документооборот и др.) под конкретные нужды компании. Упрощаем интерфейс, добавляем нужные поля, меняем логику формирования документов.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}