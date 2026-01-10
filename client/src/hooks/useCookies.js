// hooks/useCookies.js
import { useState, useEffect } from 'react';

export const useCookies = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    setConsent(savedConsent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsent('accepted');
    
    // Здесь можно инициализировать аналитику (Google Analytics и т.д.)
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setConsent('declined');
    
    // Блокируем аналитику
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const resetConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsent(null);
  };

  return {
    consent,
    acceptCookies,
    declineCookies,
    resetConsent,
    hasConsent: consent === 'accepted'
  };
};