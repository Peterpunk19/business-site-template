import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AppointmentForm } from "@/features/appointments/components/AppointmentForm";
import { businessConfig } from "@/config/business";

export function Appointment() {
  return (
    <section id="citas" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Citas"
              title="Solicita tu próxima cita"
              description="Selecciona el servicio, fecha y horario que prefieras. Nos comunicaremos contigo para confirmar disponibilidad."
            />

            <div className="mt-8 rounded-3xl bg-white p-6">
              <p className="font-semibold text-slate-950">¿Prefieres WhatsApp?</p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                También puedes comunicarte directamente con nosotros.
              </p>

              <p className="mt-4 font-semibold text-slate-900">{businessConfig.contact.phone}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <AppointmentForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
