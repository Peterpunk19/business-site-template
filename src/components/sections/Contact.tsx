import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { ContactForm } from "@/features/contact/components/ContactForm";

import { businessConfig } from "@/config/business";

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
                  className="mt-1 block font-semibold text-slate-950"
                >
                  {contact.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">Correo</p>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block font-semibold text-slate-950"
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

              <div className="flex flex-wrap gap-4 pt-2">
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
                  >
                    Facebook
                  </a>
                )}

                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
                  >
                    Instagram
                  </a>
                )}

                {social.tiktok && (
                  <a
                    href={social.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
                  >
                    TikTok
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm md:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
