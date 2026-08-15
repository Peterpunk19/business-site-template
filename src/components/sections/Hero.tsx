import Image from "next/image";

import { businessConfig } from "@/config/business";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const whatsappUrl = createWhatsAppUrl(
    businessConfig.contact.whatsapp,
    "Hola, quisiera solicitar información sobre los servicios del consultorio.",
  );

  return (
    <section id="inicio" className="overflow-hidden bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Atención odontológica profesional
            </span>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cuida tu sonrisa con atención profesional
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {businessConfig.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#citas">Solicitar cita</ButtonLink>

              <ButtonLink href={whatsappUrl} variant="secondary" external>
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src={businessConfig.professional.image ?? "/images/professional.webp"}
                alt={businessConfig.professional.name}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
