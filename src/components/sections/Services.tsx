import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-surface-muted py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Tratamientos para cuidar tu sonrisa"
          description="Conoce algunos de los servicios disponibles en el consultorio."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
