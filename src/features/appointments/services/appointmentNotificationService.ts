import "server-only";

import { getResend } from "@/lib/email/resend";
import { businessConfig } from "@/config/business";

import { AppointmentNotificationEmail } from "@/emails/AppointmentNotificationEmail";
import { AppointmentReceivedEmail } from "@/emails/AppointmentReceivedEmail";

interface AppointmentNotificationParams {
  name: string;
  phone: string;
  email?: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

function getFromAddress() {
  const from = process.env.EMAIL_FROM;

  if (!from) {
    throw new Error("Missing EMAIL_FROM environment variable.");
  }

  return from;
}

export async function sendAppointmentNotification(appointment: AppointmentNotificationParams) {
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: businessConfig.notifications.email,
    ...(appointment.email && {
      replyTo: appointment.email,
    }),
    subject: `Nueva solicitud de cita - ${appointment.name}`,
    react: AppointmentNotificationEmail(appointment),
  });

  if (error) {
    throw new Error(`Appointment notification could not be sent: ${error.message}`);
  }
}

export async function sendAppointmentConfirmation({
  email,
  name,
  serviceName,
  preferredDate,
  preferredTime,
}: {
  email: string;
  name: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
}) {
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: email,
    subject: "Recibimos tu solicitud de cita",
    react: AppointmentReceivedEmail({
      name,
      serviceName,
      preferredDate,
      preferredTime,
    }),
  });

  if (error) {
    throw new Error(`Appointment confirmation could not be sent: ${error.message}`);
  }
}
