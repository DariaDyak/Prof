import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface ScrollToContactFabProps {
  onContactClick: () => void;
  showAfter?: number;
  showFab: boolean; 
}

export default function ScrollToContactFab({ 
  onContactClick, 
  showAfter = 0,
  showFab
}: ScrollToContactFabProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showFab) {
      setIsVisible(false); // скрываем FAB полностью
      return; 
    }

    const handleScroll = () => {
      const shouldShow = window.scrollY > showAfter;
      setIsVisible(shouldShow);
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter, showFab]);

  if (!showFab) return null;

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[9999] 
        transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100 visible' 
          : 'opacity-0 translate-y-5 scale-95 invisible'
        }
      `}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <button
        onClick={onContactClick}
        className="group relative bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Связаться с нами"
        style={{
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-75"></span>
        <span className="absolute inset-0 rounded-full animate-pulse bg-blue-500"></span>
        <MessageCircle className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
}