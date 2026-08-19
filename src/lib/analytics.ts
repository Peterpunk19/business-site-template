import { getAnalyticsConsent } from "@/lib/analytics-consent";

type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: AnalyticsEventParams) {
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "true") {
    return;
  }

  if (typeof window === "undefined") {
    return;
  }

  if (getAnalyticsConsent() !== "granted") {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}
