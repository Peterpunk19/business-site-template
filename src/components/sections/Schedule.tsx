import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { businessConfig } from "@/config/business";

export function Schedule() {
  return (
    <section className="scroll-mt-24 bg-surface-accent py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            eyebrow="Horarios"
            title="Estamos disponibles para atenderte"
            description="Consulta nuestros horarios de atención y solicita una cita en el horario que mejor se adapte a ti."
          />

          <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
            {businessConfig.schedule.map((schedule, index) => (
              <div
                key={schedule.label}
                className={`flex items-center justify-between gap-6 px-6 py-5 ${
                  index !== businessConfig.schedule.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <span className="font-medium text-slate-700">{schedule.label}</span>

                <span className="text-right font-semibold text-accent">
                  {schedule.opens}
                  {" - "}
                  {schedule.closes}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
