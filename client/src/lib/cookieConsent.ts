import { saveCookieConsent } from "./api";

const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent";
const COOKIE_CONSENT_CLIENT_ID_STORAGE_KEY = "cookieConsentClientId";

export type CookieConsentStatus = "accepted" | "declined";

function generateClientId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `cookie-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

function getCurrentSourcePage(): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function getCookieConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setCookieConsent(status: CookieConsentStatus): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status);
}

export function clearCookieConsent(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
}

export function getOrCreateCookieConsentClientId(): string {
  if (typeof window === "undefined") {
    return generateClientId();
  }

  const existingClientId = window.localStorage.getItem(
    COOKIE_CONSENT_CLIENT_ID_STORAGE_KEY,
  );

  if (existingClientId) {
    return existingClientId;
  }

  const clientId = generateClientId();
  window.localStorage.setItem(COOKIE_CONSENT_CLIENT_ID_STORAGE_KEY, clientId);
  return clientId;
}

export function applyAnalyticsConsent(status: CookieConsentStatus): void {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as Window & {
    gtag?: (...args: unknown[]) => void;
  }).gtag;

  if (!gtag) {
    return;
  }

  gtag("consent", "update", {
    analytics_storage: status === "accepted" ? "granted" : "denied",
  });
}

export async function persistCookieConsent(
  status: CookieConsentStatus,
  sourcePage = getCurrentSourcePage(),
): Promise<void> {
  await saveCookieConsent({
    clientId: getOrCreateCookieConsentClientId(),
    status,
    sourcePage,
  });

  setCookieConsent(status);
}
