import { Html, Head, Preview, Body, Container, Heading, Text } from "react-email";

interface AppointmentConfirmedEmailProps {
  name: string;
  serviceName: string;
  date: string;
  time: string;
}

export function AppointmentConfirmedEmail({
  name,
  serviceName,
  date,
  time,
}: AppointmentConfirmedEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Tu cita ha sido confirmada</Preview>

      <Body>
        <Container>
          <Heading>Tu cita ha sido confirmada</Heading>

          <Text>Hola {name},</Text>

          <Text>El consultorio confirmó tu solicitud de cita.</Text>

          <Text>
            <strong>Servicio:</strong> {serviceName}
          </Text>

          <Text>
            <strong>Fecha:</strong> {date}
          </Text>

          <Text>
            <strong>Hora:</strong> {time}
          </Text>

          <Text>Te recomendamos llegar unos minutos antes de tu cita.</Text>
        </Container>
      </Body>
    </Html>
  );
}
