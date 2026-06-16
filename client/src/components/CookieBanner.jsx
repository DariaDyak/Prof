import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { saveCookieConsent } from '@/lib/api';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_SYNC_KEY = 'cookieConsentSynced';
const COOKIE_CONSENT_CLIENT_ID_KEY = 'cookieConsentClientId';

const getCookieConsentClientId = () => {
  const existingClientId = localStorage.getItem(COOKIE_CONSENT_CLIENT_ID_KEY);
  if (existingClientId) {
    return existingClientId;
  }

  const generatedClientId =
    globalThis.crypto?.randomUUID?.() ||
    `cookie-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  localStorage.setItem(COOKIE_CONSENT_CLIENT_ID_KEY, generatedClientId);
  return generatedClientId;
};

const CookieBanner = ({ canShow = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const persistConsent = async (status) => {
    try {
      await saveCookieConsent({
        clientId: getCookieConsentClientId(),
        status,
        sourcePage: window.location.pathname,
      });
      localStorage.setItem(COOKIE_CONSENT_SYNC_KEY, 'true');
    } catch (error) {
      console.error('Не удалось сохранить cookie consent в БД', error);
      localStorage.removeItem(COOKIE_CONSENT_SYNC_KEY);
    }
  };

  useEffect(() => {
    if (!canShow) {
      setIsVisible(false);
      setIsAnimating(false);
      return;
    }

    const cookieDecision = localStorage.getItem(COOKIE_CONSENT_KEY);
    const isSynced = localStorage.getItem(COOKIE_CONSENT_SYNC_KEY) === 'true';

    if (!cookieDecision) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (!isSynced && (cookieDecision === 'accepted' || cookieDecision === 'declined')) {
      void persistConsent(cookieDecision);
    }
  }, [canShow]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.removeItem(COOKIE_CONSENT_SYNC_KEY);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
    void persistConsent('accepted');
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    localStorage.removeItem(COOKIE_CONSENT_SYNC_KEY);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
    void persistConsent('declined');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed bottom-5 left-5 right-5 rounded-2xl z-[100] bg-white shadow-lg border-t border-gray-200"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Использование файлов cookie
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  На нашем сайте используются cookie-файлы, в том числе сервисов веб-аналитики. Используя сайт, вы соглашаетесь на обработку персональных данных при помощи cookie-файлов. Подробнее об обработке персональных данных вы можете узнать в {' '}
                   <Link
                    to="/dataProcessing"
                    className="text-brown-dark hover:text-brown underline font-medium transition-colors cursor-pointer"
                  >
                    Политике конфиденциальности
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-brown-dark hover:bg-brown rounded-lg transition-colors duration-200 shadow-sm"
                >
                  Принять и продолжить
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
