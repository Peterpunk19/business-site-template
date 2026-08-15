import { Html, Head, Preview, Body, Container, Heading, Text } from "react-email";

interface AppointmentReceivedEmailProps {
  name: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
}

export function AppointmentReceivedEmail({
  name,
  serviceName,
  preferredDate,
  preferredTime,
}: AppointmentReceivedEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Recibimos tu solicitud de cita</Preview>

      <Body>
        <Container>
          <Heading>Recibimos tu solicitud</Heading>

          <Text>Hola {name},</Text>

          <Text>Hemos recibido tu solicitud de cita.</Text>

          <Text>
            <strong>Servicio:</strong> {serviceName}
          </Text>

          <Text>
            <strong>Fecha preferida:</strong> {preferredDate}
          </Text>

          <Text>
            <strong>Horario preferido:</strong> {preferredTime}
          </Text>

          <Text>
            La cita aún no está confirmada. Nos comunicaremos contigo para confirmar disponibilidad.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
