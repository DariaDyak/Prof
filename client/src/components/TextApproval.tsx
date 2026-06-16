import { useState, useEffect } from "react";

export default function TextApproval() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <section className="pt-10 pb-16 bg-beige">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Скелетон или пустой контейнер */}
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="services" className="pt-10 pb-16 bg-beige text-justify overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-brown-dark mb-2">
                        Согласие на обработку персональных данных
                    </h2>
                </div>

                <p className="mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed text-brown-dark">
                    Я, субъект персональных данных, в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» свободно, в своей воле и в своем интересе, а также подтверждая свою дееспособность, даю согласие ООО «ПРОФ ИТ», расположенному по адресу: 350051, Краснодарский край, г Краснодар, Рашпилевская ул, д. 244 (далее – Оператор), на обработку на следующих условиях:
                </p>

                {/* Альтернатива без list-inside */}
                <ol className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-xs sm:text-base text-brown-dark">
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">1.</span>
                        <span>
                            <span className="font-medium">Цель обработки персональных данных:</span> обработка запроса в форме обратной связи на сайте.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">2.</span>
                        <span>
                            <span className="font-medium">Согласие дается на обработку следующих моих персональных данных:</span> имя, номер телефона, адрес электронной почты, текст сообщения.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">3.</span>
                        <span>
                            <span className="font-medium">С персональными данными могут быть совершены следующие действия:</span> сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, блокирование, удаление, уничтожение персональных данных.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">4.</span>
                        <span>
                            <span className="font-medium">Следующие третьи лица обрабатывают предоставленные персональные данные по поручению Оператора:</span> ООО «РЕГ.РУ», ИНН 7733568767, адрес: 125315, г. Москва, вн.тер. г. муниципальный округ Аэропорт, Ленинградский пр-кт, д. 72, к. 3.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">5.</span>
                        <span>
                            <span className="font-medium">Персональные данные обрабатываются до достижения цели обработки.</span>
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">6.</span>
                        <span>
                            <span className="font-medium">Настоящее согласие может быть отозвано</span> путем направления письменного заявления Оператору по адресу, указанному в начале данного Согласия.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 font-bold min-w-[20px]">7.</span>
                        <span>
                            <span className="font-medium">В случае отзыва субъектом персональных данных или его законным представителем согласия на обработку персональных данных</span> Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.
                        </span>
                    </li>
                </ol>

                <p className="text-xs sm:text-base font-medium text-brown-dark">
                    Настоящее согласие действует все время до момента прекращения обработки персональных данных, указанных в п. 5 и п. 6 данного Согласия.
                </p>
            </div>
        </section>
    );
}