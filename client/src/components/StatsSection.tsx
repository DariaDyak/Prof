import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, FileText, Shield, X, Zap, Cpu, Train, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { withBaseUrl } from '@/lib/utils';

export default function StatsSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);
    const navigate = useNavigate();

    // Используем хук для загрузки данных
    const { products, loading, error } = useProducts();

    // Рассчитываем статистику на основе данных из БД
    const totalProducts = products.length;
    const registeredInRegistry = products.filter(p => p.reg_program_num).length;
    const registeredInRospatent = products.filter(p => p.registration_num).length;

    // Функция для получения иконки по названию продукта
    const getProductIcon = (productTitle: string) => {
        const titleLower = productTitle.toLowerCase();

        if (titleLower.includes('профит-эс') || titleLower.includes('profit-es')) {
            return Zap;
        }
        if (titleLower.includes('профит-лс') || titleLower.includes('profit-ls')) {
            return Train;
        }
        if (titleLower.includes('профит-мо') || titleLower.includes('profit-mo')) {
            return Calculator;
        }

        return Cpu;
    };

    // Функция для перехода на страницу продукта
    const handleProductClick = (productId: number, productTitle: string) => {
        if (productTitle.toLowerCase().includes('профит-эс') ||
            productTitle.toLowerCase().includes('profit-es') ||
            productId === 1) {
            navigate('/profitEs');
        } else if (productTitle.toLowerCase().includes('профит-лс') ||
            productTitle.toLowerCase().includes('profit-ls') ||
            productId === 2) {
            navigate('/profitLs');
        } else if (productTitle.toLowerCase().includes('профит-мо') ||
            productTitle.toLowerCase().includes('profit-mo') ||
            productId === 3) {
            navigate('/profitMo');
        } else {
            navigate(`/product/${productId}`);
        }
    };

    const handleOpenCertificate = (certificatePath: string) => {
        setSelectedCertificate(withBaseUrl(certificatePath));
        setZoom(1);
    };

    const handleCloseCertificate = () => {
        setSelectedCertificate(null);
        setZoom(1);
    };

    if (loading) {
        return (
            <section id="cases" className="pt-10 pb-16 bg-card dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 text-center py-12">
                    <p>Загрузка данных...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="cases" className="pt-10 pb-16 bg-card dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 text-center py-12 text-red-500">
                    <p>Ошибка загрузки данных: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="cases" className="pt-10 pb-16 bg-card dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Заголовок и описание секции */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
                        Собственная разработка
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Мы сотрудничаем с компаниями из разных секторов экономики, предлагая индивидуальные решения с учетом специфики каждой отрасли
                    </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
                    {/* Карточки статистики - оставьте без изменений */}
                    <Card className="group bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="p-0 h-full">
                            <div className="flex flex-col h-full justify-center">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-muted-foreground">Всего продуктов</p>
                                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-1.5 lg:mt-2">{totalProducts}</p>
                                    </div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-900/30 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-600/40 transition-all duration-300 text-white">
                                        <Database className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="p-0 h-full">
                            <div className="flex flex-col h-full justify-center">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-muted-foreground">Зарегистрировано в Реестре ПО</p>
                                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-1.5 lg:mt-2">{registeredInRegistry}</p>
                                    </div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-900/30 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-600/40 transition-all duration-300 text-white">
                                        <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="p-0 h-full">
                            <div className="flex flex-col h-full justify-center">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm text-muted-foreground">Зарегистрировано в Роспатенте</p>
                                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-1.5 lg:mt-2">{registeredInRospatent}</p>
                                    </div>
                                    <div className="flex-shrink-0 ml-2 sm:ml-3 lg:ml-4 flex items-center justify-center">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-900/30 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-600/40 transition-all duration-300 text-white">
                                            <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Таблица продуктов */}
                <div className="bg-card rounded-xl border dark:border-gray-800 overflow-hidden shadow-2xl dark:shadow-xl dark:shadow-gray-900/20">
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b dark:border-gray-800">
                        <h3 className="text-lg text-foreground dark:text-white">Наши разработки</h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                            Автоматизированные системы и программные решения
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <Table>
                            <TableHeader className="bg-white dark:bg-gray-900 items-center">
                                <TableRow className="border-b dark:border-gray-800 hover:bg-transparent">
                                    <TableHead className="w-[350px] font-bold text-foreground dark:text-white text-center">Продукт</TableHead>
                                    <TableHead className="font-bold text-foreground dark:text-white text-center"></TableHead>
                                    <TableHead className="w-[150px] font-bold text-foreground dark:text-white text-center">Платформа</TableHead>
                                    <TableHead className="w-[180px] font-bold text-foreground dark:text-white text-center">Регистрация</TableHead>
                                    <TableHead className="w-[140px] font-bold text-foreground dark:text-white text-center">Сертификаты</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => {
                                    const ProductIcon = getProductIcon(product.title);

                                    return (
                                        <TableRow
                                            key={product.id}
                                            className="group bg-white dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 transition-all duration-200 border-b dark:border-gray-800 last:border-0"
                                        >
                                            <TableCell className="align-middle">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center">
                                                        <ProductIcon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <button
                                                            onClick={() => handleProductClick(product.id, product.title)}
                                                            className="font-semibold text-base leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors dark:text-white text-left hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 -mx-2 flex items-center gap-2"
                                                        >
                                                            {product.title}
                                                        </button>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell className="align-middle">
                                                <p className="line-clamp-2 text-muted-foreground dark:text-gray-400">
                                                    {product.short_description}
                                                </p>
                                            </TableCell>

                                            <TableCell className="align-middle">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-white text-xs bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700"
                                                >
                                                    {product.platform}
                                                </Badge>
                                            </TableCell>

                                            <TableCell className="align-middle">
                                                <div className="space-y-2">
                                                    {product.registration_num ? (
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                                                                <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                                            </div>
                                                            <div>
                                                                <div className="text-xs text-muted-foreground dark:text-gray-500">Роспатент</div>
                                                                <div className="font-mono text-sm font-medium dark:text-white">№{product.registration_num}</div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="text-sm text-muted-foreground dark:text-gray-500">Не зарегистрировано</div>
                                                    )}

                                                    {product.reg_program_num && (
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                                                                <FileText className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                                            </div>
                                                            <div>
                                                                <div className="text-xs text-muted-foreground dark:text-gray-500">Реестр ПО</div>
                                                                <div className="text-sm font-medium dark:text-white">№{product.reg_program_num}</div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>

                                            <TableCell className="align-middle">
                                                <div className="flex justify-end gap-2">
                                                    {product.certificate_image && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => handleOpenCertificate(product.certificate_image!)}
                                                            className="h-8 px-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40"
                                                        >
                                                            Показать
                                                        </Button>
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>

                                    );
                                })}

                            </TableBody>
                        </Table>
                    </div>

                    <div className="md:hidden">
                        <div className="divide-y dark:divide-gray-800">
                            {products.map((product) => {
                                const ProductIcon = getProductIcon(product.title);

                                return (
                                    <div
                                        key={product.id}
                                        className="p-4 bg-white dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 transition-all duration-200"
                                    >
                                        {/* Заголовок и иконка продукта */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center">
                                                <ProductIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <button
                                                    onClick={() => handleProductClick(product.id, product.title)}
                                                    className="font-semibold text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors dark:text-white text-left hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 -mx-2 block w-full text-left"
                                                >
                                                    {product.title}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Описание */}
                                        {product.short_description && (
                                            <div className="mb-3">
                                                <p className="text-muted-foreground dark:text-gray-400 text-sm">
                                                    {product.short_description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Платформа */}
                                        <div className="mb-3">
                                            <div className="text-xs text-muted-foreground dark:text-gray-500 mb-1">Платформа</div>
                                            <Badge
                                                variant="secondary"
                                                className="text-white text-xs bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700"
                                            >
                                                {product.platform}
                                            </Badge>
                                        </div>

                                        {/* Регистрация */}
                                        <div className="mb-3">
                                            <div className="text-xs text-muted-foreground dark:text-gray-500 mb-2">Регистрация</div>
                                            <div className="space-y-2">
                                                {product.registration_num ? (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                                                            <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-xs text-muted-foreground dark:text-gray-500">Роспатент</div>
                                                            <div className="font-mono text-sm font-medium dark:text-white">№{product.registration_num}</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-sm text-muted-foreground dark:text-gray-500">Не зарегистрировано</div>
                                                )}

                                                {product.reg_program_num && (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                                                            <FileText className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-xs text-muted-foreground dark:text-gray-500">Реестр ПО</div>
                                                            <div className="text-sm font-medium dark:text-white">№{product.reg_program_num}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Сертификаты */}
                                        <div className="flex justify-between items-center pt-2 border-t dark:border-gray-800">
                                            <div className="text-xs text-muted-foreground dark:text-gray-500">Сертификаты</div>
                                            <div>
                                                {product.certificate_image && (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => handleOpenCertificate(product.certificate_image!)}
                                                        className="h-7 px-3 text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40"
                                                    >
                                                        Показать
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Футер таблицы */}
                    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50 border-t dark:border-gray-800 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground dark:text-gray-400">
                                Показано {products.length} из {products.length} продуктов
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для отображения сертификата */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                    onClick={handleCloseCertificate}
                >
                    {/* Полупрозрачный фон */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Кнопка закрытия */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCloseCertificate}
                        className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 rounded-full shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
                    >
                        <X className="w-5 h-5" />
                    </Button>

                    {/* Изображение сертификата */}
                    <img
                        src={selectedCertificate}
                        alt="Сертификат"
                        className="relative z-0 max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
                        style={{
                            transform: `scale(${zoom})`,
                            transformOrigin: 'center center'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}