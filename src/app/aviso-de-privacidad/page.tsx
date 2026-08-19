import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: `Aviso de Privacidad | ${businessConfig.name}`,
  description: `Aviso de privacidad de ${businessConfig.name}.`,
};

export default function PrivacyNoticePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-brand-50 py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Información legal
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Aviso de Privacidad
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Última actualización: agosto de 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <article className="max-w-3xl space-y-10 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Responsable del tratamiento de los datos personales
              </h2>

              <p className="mt-4 leading-7">
                <strong>{businessConfig.name}</strong>, con domicilio en{" "}
                {businessConfig.location.address}, {businessConfig.location.city},{" "}
                {businessConfig.location.state}, México, es responsable del tratamiento, uso y
                protección de los datos personales que usted proporcione a través de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Datos personales que podemos recabar
              </h2>

              <p className="mt-4 leading-7">
                A través de este sitio web podremos recabar los siguientes datos personales:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                <li>Nombre.</li>
                <li>Número telefónico.</li>
                <li>Correo electrónico.</li>
                <li>Fecha solicitada para una cita.</li>
                <li>Servicio dental de interés.</li>
                <li>
                  Información proporcionada voluntariamente mediante los formularios de contacto o
                  solicitud de cita.
                </li>
              </ul>

              <p className="mt-4 leading-7">
                En caso de que durante la comunicación o atención posterior se proporcionen datos
                relacionados con el estado de salud del paciente, éstos podrán tener el carácter de
                datos personales sensibles y serán tratados únicamente para las finalidades
                relacionadas con la prestación de servicios odontológicos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Finalidades del tratamiento</h2>

              <p className="mt-4 leading-7">
                Los datos personales serán utilizados principalmente para:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                <li>Recibir y gestionar solicitudes de citas.</li>
                <li>
                  Contactar al usuario para confirmar, modificar o dar seguimiento a una cita.
                </li>
                <li>
                  Atender solicitudes de información enviadas mediante el formulario de contacto.
                </li>
                <li>Proporcionar información relacionada con los servicios del consultorio.</li>
                <li>Dar seguimiento a comunicaciones relacionadas con la atención solicitada.</li>
                <li>Mantener registros administrativos de las solicitudes recibidas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Transferencia de datos</h2>

              <p className="mt-4 leading-7">
                Los datos personales no serán vendidos, alquilados ni comercializados.
              </p>

              <p className="mt-4 leading-7">
                Podrán ser tratados por proveedores tecnológicos necesarios para la operación del
                sitio, incluyendo servicios de alojamiento, correo electrónico, infraestructura y
                procesamiento de información, únicamente en la medida necesaria para prestar dichos
                servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Uso de tecnologías y analítica</h2>

              <p className="mt-4 leading-7">
                Este sitio puede utilizar herramientas de medición y tecnologías similares para
                obtener información estadística sobre el uso del sitio, como páginas visitadas, tipo
                de dispositivo, navegador e información técnica relacionada con la navegación.
              </p>

              <p className="mt-4 leading-7">
                El sitio puede utilizar Google Analytics para obtener estadísticas de uso y mejorar
                la experiencia de los visitantes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Derechos sobre sus datos personales
              </h2>

              <p className="mt-4 leading-7">
                El titular podrá solicitar el acceso, rectificación, cancelación u oposición
                respecto de sus datos personales, así como solicitar información relacionada con el
                tratamiento de los mismos.
              </p>

              <p className="mt-4 leading-7">
                Para realizar una solicitud puede comunicarse mediante el correo electrónico:
              </p>

              <a
                href={`mailto:${businessConfig.contact.email}`}
                className="mt-3 inline-flex font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                {businessConfig.contact.email}
              </a>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Revocación del consentimiento</h2>

              <p className="mt-4 leading-7">
                Cuando resulte aplicable, el titular podrá solicitar la revocación del
                consentimiento otorgado para el tratamiento de sus datos personales mediante los
                medios de contacto indicados en este aviso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Conservación de los datos</h2>

              <p className="mt-4 leading-7">
                Los datos personales serán conservados únicamente durante el tiempo necesario para
                cumplir con las finalidades para las cuales fueron recabados y con las obligaciones
                legales o administrativas aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Seguridad</h2>

              <p className="mt-4 leading-7">
                Se implementan medidas administrativas, técnicas y organizativas razonables para
                proteger los datos personales contra daño, pérdida, alteración, destrucción, acceso
                o tratamiento no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Cambios al aviso de privacidad</h2>

              <p className="mt-4 leading-7">
                Este Aviso de Privacidad podrá actualizarse como consecuencia de modificaciones
                legales, cambios en los servicios ofrecidos o cambios en las prácticas de
                tratamiento de datos personales.
              </p>

              <p className="mt-4 leading-7">
                Las modificaciones serán publicadas en esta misma página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">Contacto</h2>

              <div className="mt-4 space-y-1 leading-7">
                <p className="font-semibold text-slate-950">{businessConfig.name}</p>

                <p>{businessConfig.location.address}</p>

                <p>
                  {businessConfig.location.city}, {businessConfig.location.state}, México
                </p>

                <p>{businessConfig.contact.email}</p>
              </div>
            </section>
          </article>
        </Container>
      </section>
    </main>
  );
}
