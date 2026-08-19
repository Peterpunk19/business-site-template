"use client";

import { createContext, ReactNode, useContext, useSyncExternalStore } from "react";

import {
  clearAnalyticsConsent,
  getAnalyticsConsent,
  setAnalyticsConsent,
  subscribeToAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";

interface AnalyticsConsentContextValue {
  consent: AnalyticsConsent;
  grantConsent: () => void;
  denyConsent: () => void;
  resetConsent: () => void;
}

const AnalyticsConsentContext = createContext<AnalyticsConsentContextValue | null>(null);

interface AnalyticsConsentProviderProps {
  children: ReactNode;
}

export function AnalyticsConsentProvider({ children }: AnalyticsConsentProviderProps) {
  const consent = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    getAnalyticsConsent,
    () => null,
  );

  function grantConsent() {
    setAnalyticsConsent("granted");
  }

  function denyConsent() {
    setAnalyticsConsent("denied");
  }

  function resetConsent() {
    clearAnalyticsConsent();
  }

  return (
    <AnalyticsConsentContext.Provider
      value={{
        consent,
        grantConsent,
        denyConsent,
        resetConsent,
      }}
    >
      {children}
    </AnalyticsConsentContext.Provider>
  );
}

export function useAnalyticsConsent() {
  const context = useContext(AnalyticsConsentContext);

  if (!context) {
    throw new Error("useAnalyticsConsent must be used within AnalyticsConsentProvider");
  }

  return context;
}
