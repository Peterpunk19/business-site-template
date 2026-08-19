export type AnalyticsConsent = "granted" | "denied" | null;

const STORAGE_KEY = "analytics-consent";
const CHANGE_EVENT = "analytics-consent-change";

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(STORAGE_KEY);

  if (value === "granted" || value === "denied") {
    return value;
  }

  return null;
}

export function setAnalyticsConsent(consent: Exclude<AnalyticsConsent, null>) {
  window.localStorage.setItem(STORAGE_KEY, consent);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function clearAnalyticsConsent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeToAnalyticsConsent(callback: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  }

  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}
