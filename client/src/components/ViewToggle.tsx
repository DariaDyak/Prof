import { Button } from '@/components/ui/button';

interface ViewToggleProps {
  activeTab: 'table' | 'cards';
  onTabChange: (tab: 'table' | 'cards') => void;
}

export default function ViewToggle({ activeTab, onTabChange }: ViewToggleProps) {
  return (
    <div className="container mx-auto px-4 lg:px-8 mb-8">
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border p-1">
          <Button
            variant={activeTab === 'table' ? 'default' : 'ghost'}
            onClick={() => onTabChange('table')}
            className="px-6"
          >
            Таблица
          </Button>
          <Button
            variant={activeTab === 'cards' ? 'default' : 'ghost'}
            onClick={() => onTabChange('cards')}
            className="px-6"
          >
            Карточки
          </Button>
        </div>
      </div>
    </div>
  );
}