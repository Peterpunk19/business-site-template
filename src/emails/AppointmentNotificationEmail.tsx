import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from "react-email";

interface AppointmentNotificationEmailProps {
  name: string;
  phone: string;
  email?: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export function AppointmentNotificationEmail({
                                               name,
                                               phone,
                                               email,
                                               serviceName,
                                               preferredDate,
                                               preferredTime,
                                               message,
                                             }: AppointmentNotificationEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Nueva solicitud de cita de {name}
      </Preview>

      <Body>
        <Container>
          <Heading>
            Nueva solicitud de cita
          </Heading>

          <Text>
            Se recibió una nueva solicitud desde la página web.
          </Text>

          <Hr />

          <Section>
            <Text>
              <strong>Paciente:</strong>{" "}
              {name}
            </Text>

            <Text>
              <strong>Teléfono:</strong>{" "}
              {phone}
            </Text>

            {email && (
              <Text>
                <strong>Correo:</strong>{" "}
                {email}
              </Text>
            )}

            <Text>
              <strong>Servicio:</strong>{" "}
              {serviceName}
            </Text>

            <Text>
              <strong>Fecha:</strong>{" "}
              {preferredDate}
            </Text>

            <Text>
              <strong>Hora:</strong>{" "}
              {preferredTime}
            </Text>

            {message && (
              <Text>
                <strong>Comentarios:</strong>{" "}
                {message}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}