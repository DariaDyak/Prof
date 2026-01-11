import { useEffect } from 'react';
export default function AboutUs() {
    useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
    return (
        <section id="organization" className="pt-10 pb-16 bg-card from-slate-50 to-slate-100 dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-2">
                        Реквизиты организации
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        Официальные данные компании ООО «ПРОФ ИТ»
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                    {/* Основная информация */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Общие сведения</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Полное наименование организации:</p>
                                <p className="text-sm sm:text-base font-medium text-foreground">
                                    ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПРОФ ИТ"
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">ИНН:</p>
                                    <p className="text-sm sm:text-base font-medium text-foreground">2308291388</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">КПП:</p>
                                    <p className="text-sm sm:text-base font-medium text-foreground">230801001</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">ОГРН:</p>
                                    <p className="text-sm sm:text-base font-medium text-foreground">1232300023251</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Статус:</p>
                                    <p className="text-sm sm:text-base font-medium text-green-600 dark:text-green-400">
                                        действующая
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Адрес */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Место нахождения</h3>
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 sm:p-4">
                            <p className="text-sm sm:text-base text-foreground">
                                350051, край Краснодарский, г. Краснодар, ул. Рашпилевская, д. 244
                            </p>
                        </div>
                    </div>

                    {/* Организационно-правовая форма */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Организационно-правовая форма</h3>
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 sm:p-4">
                            <p className="text-sm sm:text-base text-foreground">
                                Общества с ограниченной ответственностью (код 12300 по ОКОПФ)
                            </p>
                        </div>
                    </div>

                    {/* Основной вид деятельности */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Основной вид деятельности</h3>
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                                <div>
                                    <p className="text-sm sm:text-base font-medium text-foreground mb-1">
                                        Разработка компьютерного программного обеспечения
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                        ОКВЭД 62.01
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Дополнительные виды деятельности */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                            Дополнительные виды деятельности
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                            {[
                                { code: "46.51", name: "Торговля оптовая компьютерами, периферийными устройствами к компьютерам и программным обеспечением" },
                                { code: "46.52", name: "Торговля оптовая электронным и телекоммуникационным оборудованием и его запасными частями" },
                                { code: "62.02", name: "Деятельность консультативная и работы в области компьютерных технологий" },
                                { code: "62.02.1", name: "Деятельность по планированию, проектированию компьютерных систем" },
                                { code: "62.02.4", name: "Деятельность по подготовке компьютерных систем к эксплуатации" }
                            ].map((activity, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 sm:p-4 hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-colors"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                                        <div className="flex-1">
                                            <p className="text-sm sm:text-base text-foreground">{activity.name}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                                {activity.code}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Дополнительные виды деятельности */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                            Программное обеспечение, включенное в Реестр российских программ для ЭВМ
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                            {[
                                { code: "Реестровая запись №226848", name: "Автоматизированная информационная система «ПРОФИТ-ЭС»" }

                            ].map((activity, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 sm:p-4 hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-colors"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                                        <div className="flex-1">
                                            <p className="text-sm sm:text-base text-foreground">{activity.name}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                                {activity.code}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



