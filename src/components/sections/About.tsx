import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { businessConfig } from "@/config/business";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src={businessConfig.professional.image ?? "/images/professional.webp"}
                alt={businessConfig.professional.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Sobre nosotros"
              title={businessConfig.professional.name}
              description={businessConfig.professional.description}
            />

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-500">Especialidad</p>

                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {businessConfig.professional.title}
                </p>
              </div>

              {businessConfig.professional.license && (
                <div>
                  <p className="text-sm font-medium text-slate-500">Cédula profesional</p>

                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {businessConfig.professional.license}
                  </p>
                </div>
              )}

              <div className="grid gap-4 pt-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                  <p className="font-semibold text-brand-900">Atención personalizada</p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Cada paciente recibe una valoración de acuerdo con sus necesidades.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                  <p className="font-semibold text-brand-900">Prevención y cuidado</p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Buscamos cuidar la salud dental mediante prevención y seguimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
