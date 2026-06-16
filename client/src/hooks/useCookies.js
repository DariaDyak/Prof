import { useState, useEffect } from 'react';
import {
  applyAnalyticsConsent,
  clearCookieConsent,
  getCookieConsent,
  persistCookieConsent,
} from '@/lib/cookieConsent';

export const useCookies = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = getCookieConsent();
    setConsent(savedConsent);
  }, []);

  const acceptCookies = async () => {
    await persistCookieConsent('accepted');
    setConsent('accepted');
    applyAnalyticsConsent('accepted');
  };

  const declineCookies = async () => {
    await persistCookieConsent('declined');
    setConsent('declined');
    applyAnalyticsConsent('declined');
  };

  const resetConsent = () => {
    clearCookieConsent();
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
