"use client";

import { businessConfig } from "@/config/business";
import { useAnalyticsConsent } from "@/components/analytics/AnalyticsConsentProvider";

export function PrivacyPreferencesButton() {
  const { resetConsent } = useAnalyticsConsent();

  if (!businessConfig.analytics.enabled) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
    >
      Preferencias de privacidad
    </button>
  );
}
