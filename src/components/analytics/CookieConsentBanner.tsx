"use client";

import Link from "next/link";

import { businessConfig } from "@/config/business";
import { useAnalyticsConsent } from "@/components/analytics/AnalyticsConsentProvider";

export function CookieConsentBanner() {
  const { consent, grantConsent, denyConsent } = useAnalyticsConsent();

  if (!businessConfig.analytics.enabled) {
    return null;
  }

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-semibold text-slate-950">Uso de analítica</p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Utilizamos Google Analytics para conocer cómo se utiliza el sitio y mejorar la
            experiencia. Puedes aceptar o rechazar esta medición.{" "}
            <Link
              href="/aviso-de-privacidad"
              className="font-medium text-brand-700 underline-offset-4 hover:underline"
            >
              Aviso de Privacidad
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={denyConsent}
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Rechazar
          </button>

          <button
            type="button"
            onClick={grantConsent}
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Aceptar analítica
          </button>
        </div>
      </div>
    </div>
  );
}
