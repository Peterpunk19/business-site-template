"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

import { businessConfig } from "@/config/business";
import { useAnalyticsConsent } from "@/components/analytics/AnalyticsConsentProvider";

export function AnalyticsProvider() {
  const { consent } = useAnalyticsConsent();

  if (!businessConfig.analytics.enabled || !businessConfig.analytics.googleAnalyticsId) {
    return null;
  }

  if (consent !== "granted") {
    return null;
  }

  return <GoogleAnalytics gaId={businessConfig.analytics.googleAnalyticsId} />;
}
