import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Shield, Zap, Users } from "lucide-react";

const solutions = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Веб-приложения",
    description: "Современные веб-решения с адаптивным дизайном и высокой производительностью",
    features: ["SPA/MPA приложения", "PWA", "Админ панели", "Дашборды"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Базы данных",
    description: "Проектирование и оптимизация баз данных для эффективного хранения и обработки информации",
    features: ["SQL/NoSQL", "Миграции", "Репликация", "Бэкапы"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Десктоп приложения",
    description: "Кроссплатформенные настольные приложения для решения бизнес-задач",
    features: ["Windows/Mac/Linux", "Нативный UI", "Оффлайн работа", "Интеграции"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Безопасность",
    description: "Внедрение систем безопасности и защита данных на всех уровнях приложения",
    features: ["Шифрование", "Auth/ACL", "Аудит", "Защита от атак"]
  }
];

export default function DevelopmentShowcase() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Комплексные решения
            <span className="block text-blue-600 dark:text-blue-400">для вашего бизнеса</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Разрабатываем программное обеспечение любой сложности и масштаба, 
            становясь надежным технологическим партнером для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}