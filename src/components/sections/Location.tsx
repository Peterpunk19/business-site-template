"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { businessConfig } from "@/config/business";
import { trackEvent } from "@/lib/analytics";

export function Location() {
  const { location, contact } = businessConfig;

  return (
    <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Ubicación"
          title="Visítanos"
          description="Encuentra fácilmente nuestro consultorio y comunícate con nosotros para solicitar información."
          align="center"
        />

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm lg:grid-cols-2">
          <div className="min-h-[320px] bg-surface-muted sm:min-h-[400px]">
            <iframe
              title={`Ubicación de ${businessConfig.name}`}
              src={location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] border-0 sm:min-h-[400px]"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <div>
              <p className="text-sm font-medium text-slate-500">Dirección</p>

              <p className="mt-2 text-lg font-semibold text-slate-950">{location.address}</p>

              <p className="mt-1 text-slate-600">
                {location.city}, {location.state}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-slate-500">Teléfono</p>

              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                onClick={() =>
                  trackEvent("phone_click", {
                    location: "location",
                  })
                }
                className="mt-1 block font-semibold text-slate-950 transition hover:text-accent"
              >
                {contact.phone}
              </a>
            </div>

            {location.googleMapsUrl && (
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("maps_click", {
                    location: "location",
                  })
                }
                className="mt-8 inline-flex w-fit rounded-full bg-action px-6 py-3 font-semibold text-action-foreground shadow-sm transition hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
              >
                Cómo llegar
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
