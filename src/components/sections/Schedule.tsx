import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { businessConfig } from "@/config/business";

export function Schedule() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            eyebrow="Horarios"
            title="Estamos disponibles para atenderte"
            description="Consulta nuestros horarios de atención y solicita una cita en el horario que mejor se adapte a ti."
          />

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {businessConfig.schedule.map((schedule, index) => (
              <div
                key={schedule.label}
                className={`flex items-center justify-between ${
                  index !== businessConfig.schedule.length - 1 ? "border-b" : ""
                }`}
              >
                <span>{schedule.label}</span>
                <span>
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
