"use client";

import { Suspense } from "react";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AppointmentForm } from "@/features/appointments/components/AppointmentForm";
import { businessConfig } from "@/config/business";
import { getAppointmentDateRange } from "@/lib/date";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function Appointment() {
  const { minDate, maxDate } = getAppointmentDateRange();

  const whatsappUrl = createWhatsAppUrl(
    businessConfig.contact.whatsapp,
    `Hola, quisiera solicitar información sobre ${businessConfig.name}.`,
  );

  return (
    <section id="citas" className="scroll-mt-24 bg-surface-muted py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Citas"
              title="Solicita tu próxima cita"
              description="Selecciona el servicio, fecha y horario que prefieras. Nos comunicaremos contigo para confirmar disponibilidad."
            />

            <div className="mt-8 rounded-3xl border border-brand-100 bg-surface-accent p-6">
              <p className="font-semibold text-slate-950">¿Prefieres WhatsApp?</p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                También puedes comunicarte directamente con nosotros.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "appointment",
                  })
                }
                className="mt-4 inline-block font-semibold text-accent transition hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {businessConfig.contact.whatsapp}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
            <Suspense
              fallback={
                <div className="py-12 text-center text-sm text-slate-500">
                  Cargando formulario...
                </div>
              }
            >
              <AppointmentForm minDate={minDate} maxDate={maxDate} />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
