"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { businessConfig } from "@/config/business";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const { contact, location, social } = businessConfig;

  return (
    <section id="contacto" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Contacto"
              title="Estamos para ayudarte"
              description="Envíanos un mensaje y nos pondremos en contacto contigo."
            />

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-500">Teléfono</p>

                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "contact",
                    })
                  }
                  className="mt-1 block font-semibold text-slate-950 transition hover:text-accent"
                >
                  {contact.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Correo</p>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block font-semibold text-slate-950 transition hover:text-accent"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Dirección</p>

                <p className="mt-1 font-semibold text-slate-950">{location.address}</p>

                <p className="text-slate-600">
                  {location.city}, {location.state}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Redes sociales</p>

                <SocialLinks
                  facebook={social.facebook}
                  instagram={social.instagram}
                  tiktok={social.tiktok}
                  className="mt-3"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-surface-muted p-6 shadow-sm md:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
