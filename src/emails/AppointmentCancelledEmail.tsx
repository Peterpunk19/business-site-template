import { Html, Head, Preview, Body, Container, Heading, Text } from "react-email";

interface AppointmentCancelledEmailProps {
  name: string;
  serviceName: string;
  date: string;
  time: string;
}

export function AppointmentCancelledEmail({
  name,
  serviceName,
  date,
  time,
}: AppointmentCancelledEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Actualización de tu solicitud de cita</Preview>

      <Body>
        <Container>
          <Heading>Tu solicitud fue cancelada</Heading>

          <Text>Hola {name},</Text>

          <Text>La solicitud de cita que realizaste ha sido cancelada.</Text>

          <Text>
            <strong>Servicio:</strong> {serviceName}
          </Text>

          <Text>
            <strong>Fecha solicitada:</strong> {date}
          </Text>

          <Text>
            <strong>Hora:</strong> {time}
          </Text>

          <Text>Puedes comunicarte con el consultorio para solicitar una nueva fecha.</Text>
        </Container>
      </Body>
    </Html>
  );
}
