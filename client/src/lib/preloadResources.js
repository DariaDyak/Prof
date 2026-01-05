// @/lib/preloadResources.js
export const preloadResources = async () => {
  const resources = [
    // Критические изображения
    '/logo.png',
    '/hero-background.jpg',
    
    // Критические шрифты
    '/fonts/inter-var.woff2',
  ];

  const promises = resources.map(resource => {
    if (resource.endsWith('.woff2')) {
      // Предзагрузка шрифтов
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
      return Promise.resolve();
    } else {
      // Предзагрузка изображений
      return new Promise((resolve) => {
        const img = new Image();
        img.src = resource;
        img.onload = resolve;
        img.onerror = resolve; // Продолжаем даже если есть ошибки
      });
    }
  });

  return Promise.all(promises);
};

// Утилита для предзагрузки данных React Query
export const prefetchCriticalData = (queryClient) => {
  // Здесь можно предзагрузить критические данные
  // Например: queryClient.prefetchQuery({...})
};