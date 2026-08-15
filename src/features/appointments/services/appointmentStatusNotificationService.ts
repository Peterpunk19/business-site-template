import "server-only";

import { getResend } from "@/lib/email/resend";
import { businessConfig } from "@/config/business";

import { AppointmentConfirmedEmail } from "@/emails/AppointmentConfirmedEmail";
import { AppointmentCancelledEmail } from "@/emails/AppointmentCancelledEmail";

interface AppointmentStatusNotificationParams {
  email: string;
  name: string;
  serviceName: string;
  date: string;
  time: string;
}

function getFromAddress() {
  const from = process.env.EMAIL_FROM;

  if (!from) {
    throw new Error("Missing EMAIL_FROM environment variable.");
  }

  return from;
}

export async function sendAppointmentConfirmedEmail(
  appointment: AppointmentStatusNotificationParams,
) {
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: appointment.email,
    subject: "Tu cita ha sido confirmada",

    react: AppointmentConfirmedEmail({
      name: appointment.name,
      serviceName: appointment.serviceName,
      date: appointment.date,
      time: appointment.time,
    }),

    replyTo: businessConfig.contact.email,
  });

  if (error) {
    throw new Error(`Confirmation email failed: ${error.message}`);
  }
}

export async function sendAppointmentCancelledEmail(
  appointment: AppointmentStatusNotificationParams,
) {
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: appointment.email,
    subject: "Actualización de tu solicitud de cita",

    react: AppointmentCancelledEmail({
      name: appointment.name,
      serviceName: appointment.serviceName,
      date: appointment.date,
      time: appointment.time,
    }),

    replyTo: businessConfig.contact.email,
  });

  if (error) {
    throw new Error(`Cancellation email failed: ${error.message}`);
  }
}
