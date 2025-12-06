import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, FileText, Shield, X, Download, Cpu } from 'lucide-react';
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
import { mockProducts } from './data/mockData';

export default function StatsSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleOpenCertificate = (certificatePath: string) => {
        setSelectedCertificate(certificatePath);
        setZoom(1);
    };

    const handleCloseCertificate = () => {
        setSelectedCertificate(null);
        setZoom(1);
    };

    const handleDownloadCertificate = (certificatePath: string) => {
        console.log('Downloading certificate:', certificatePath);
        // Логика скачивания файла
        const link = document.createElement('a');
        link.href = certificatePath;
        link.download = `certificate_${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 0.25, 0.5));
    };

    const handleResetZoom = () => {
        setZoom(1);
    };

    return (
        <section id="cases" className="pt-10 pb-16 bg-card dark:from-slate-900 dark:to-blue-900/20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Заголовок и описание секции */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
                        Собственная разработка
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Мы работаем с различными отраслями и имеем глубокую экспертизу в
                        создании специализированных решений для каждой сферы
                    </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10 lg:mb-10">
                    {/* Карточка 1: Всего продуктов */}
                    <Card className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="pt-8">
                            <div className="flex flex-col h-full">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                                        {/* Текст слева */}
                                        <div>
                                            <p className="text-sm text-muted-foreground">Всего продуктов</p>
                                            <p className="text-3xl font-bold mt-2">3</p>
                                        </div>

                                        {/* Иконка справа */}
                                        <div className="flex-shrink-0 ml-3">
                                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Database className="h-4 w-4 sm:h-6 sm:w-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Карточка 2: С сертификатами */}
                    <Card className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="pt-8">
                            <div className="flex flex-col h-full">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                                        {/* Текст слева */}
                                        <div>
                                            <p className="text-sm text-muted-foreground">С сертификатами</p>
                                            <p className="text-3xl font-bold mt-2">2</p>
                                        </div>

                                        {/* Иконка справа */}
                                        <div className="flex-shrink-0 ml-3">
                                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <FileText className="h-4 w-4 sm:h-6 sm:w-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Карточка 3: Зарегистрировано */}
                    <Card className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 dark:shadow-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <CardContent className="pt-8">
                            <div className="flex flex-col h-full">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                                        {/* Текст слева */}
                                        <div>
                                            <p className="text-sm text-muted-foreground">Зарегистрировано</p>
                                            <p className="text-3xl font-bold mt-2">2</p>
                                        </div>

                                        {/* Иконка справа */}
                                        <div className="flex-shrink-0 ml-3">
                                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Shield className="h-4 w-4 sm:h-6 sm:w-6" />
                                            </div>
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

                    <Table>
                        <TableHeader className="bg-white dark:bg-gray-900 items-center">
                            <TableRow className="border-b dark:border-gray-800">
                                <TableHead className="w-[350px] font-bold text-foreground dark:text-white text-center">Продукт</TableHead>
                                <TableHead className="font-bold text-foreground dark:text-white text-center"></TableHead>
                                <TableHead className="w-[150px] font-bold text-foreground dark:text-white text-center">Платформа</TableHead>
                                <TableHead className="w-[180px] font-bold text-foreground dark:text-white text-center">Регистрация</TableHead>
                                <TableHead className="w-[140px] font-bold text-foreground dark:text-white text-center">Сертификаты</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockProducts.map((product) => (
                                <TableRow
                                    key={product.id}
                                    className="group bg-white dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 transition-all duration-200 border-b dark:border-gray-800 last:border-0"
                                >
                                    <TableCell className="align-middle">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 flex items-center justify-center">
                                                <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-base leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors dark:text-white">
                                                    {product.title}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-2">
                                                    {/* ваш контент */}
                                                </div>
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
                                                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                                        <FileText className="w-3 h-3 text-green-600 dark:text-green-400" />
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
                                                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                                                        <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
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
                            ))}
                        </TableBody>
                    </Table>

                    {/* Футер таблицы */}
                    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50 border-t dark:border-gray-800 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground dark:text-gray-400">
                                Показано {mockProducts.length} из {mockProducts.length} продуктов
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для отображения сертификата */}
            {selectedCertificate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl max-h-[150vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                        {/* Шапка модального окна */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                            <div className="flex items-center gap-2">
                                
                                {/* Кнопка закрытия */}
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleCloseCertificate}
                                    className="h-8 w-8 p-0 ml-2"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Контейнер изображения */}
                        <div className="p-4 bg-gray-100 dark:bg-black flex items-center justify-center min-h-[400px] max-h-[70vh] overflow-auto">
                            <div className="relative">
                                <img
                                    src={selectedCertificate}
                                    alt="Сертификат"
                                    className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-lg transition-transform duration-200"
                                    style={{
                                        transform: `scale(${zoom})`,
                                        transformOrigin: 'center center'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}