"use client";

import Image from "next/image";

import { businessConfig } from "@/config/business";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const whatsappUrl = createWhatsAppUrl(
    businessConfig.contact.whatsapp,
    "Hola, quisiera solicitar información sobre los servicios del consultorio.",
  );

  return (
    <section
      id="inicio"
      className="
        scroll-mt-24
        overflow-hidden
        bg-gradient-to-b
        from-brand-50
        to-white
        py-12
        sm:py-16
        md:py-24
      "
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              className="
                mb-4
                inline-flex
                rounded-full
                border
                border-brand-100
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-brand-700
                shadow-sm
              "
            >
              Atención odontológica profesional
            </span>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cuida tu sonrisa con atención <span className="text-brand-700">profesional</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {businessConfig.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#citas" fullWidthOnMobile>
                Solicitar cita
              </ButtonLink>

              <ButtonLink
                href={whatsappUrl}
                variant="secondary"
                external
                fullWidthOnMobile
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "hero",
                  })
                }
              >
                WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
              <span>✓ Atención personalizada</span>
              <span>✓ Consultorio profesional</span>
              <span>✓ Citas por WhatsApp</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-slate-200/60">
              <Image
                src={
                  businessConfig.branding.heroImage ??
                  businessConfig.professional.image ??
                  "/images/hero.webp"
                }
                alt={businessConfig.professional.name}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                preload
                className="object-cover"
              />
            </div>

            <div
              className="
                absolute
                -bottom-5
                left-4
                right-4
                rounded-2xl
                border
                border-white/60
                bg-white/95
                p-4
                shadow-lg
                backdrop-blur
                sm:left-6
                sm:right-auto
                sm:min-w-64
              "
            >
              <p className="font-semibold text-slate-950">{businessConfig.professional.name}</p>

              <p className="mt-1 text-sm text-slate-600">{businessConfig.professional.title}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
