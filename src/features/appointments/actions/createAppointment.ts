"use server";

import { businessConfig } from "@/config/business";
import { services } from "@/config/services";

import { saveAppointment } from "@/features/appointments/repositories/appointmentRepository";

import { appointmentSchema } from "@/features/appointments/schemas/appointmentSchema";

import {
  sendAppointmentConfirmation,
  sendAppointmentNotification
} from "@/features/appointments/services/appointmentNotificationService";

import {
  formatDateForMexico,
  formatTime,
} from "@/lib/date";

import type { AppointmentFormState } from "@/features/appointments/types/appointment";

export async function createAppointment(
  _previousState: AppointmentFormState,
  formData: FormData,
): Promise<AppointmentFormState> {
  const website = formData.get("website");

  if (website) {
    return {
      success: true,
      message:
        "Tu solicitud fue enviada correctamente.",
    };
  }

  const values = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),

    preferredDate:
      formData.get("preferredDate"),

    preferredTime:
      formData.get("preferredTime"),

    message:
      formData.get("message"),
  };

  const result =
    appointmentSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,

      message:
        "Revisa los campos del formulario.",

      errors:
      result.error.flatten().fieldErrors,
    };
  }

  const formattedDate =
    formatDateForMexico(
      result.data.preferredDate,
    );

  const formattedTime =
    formatTime(
      result.data.preferredTime,
    );

  const service = services.find(
    (service) =>
      service.id === result.data.service,
  );

  if (!service) {
    return {
      success: false,
      message:
        "El servicio seleccionado no es válido.",
    };
  }

  try {
    await saveAppointment({
      businessSlug:
      businessConfig.slug,

      appointment:
      result.data,
    });
  } catch (error) {
    console.error(
      "Error saving appointment:",
      error,
    );

    return {
      success: false,
      message:
        "No pudimos registrar tu solicitud. Inténtalo nuevamente.",
    };
  }

  try {
    await sendAppointmentNotification({
      name:
      result.data.name,

      phone:
      result.data.phone,

      email:
      result.data.email,

      serviceName:
      service.name,

      preferredDate:
      formattedDate,

      preferredTime:
      formattedTime,

      message:
      result.data.message,
    });
  } catch (error) {
    console.error(
      "Appointment saved but notification email failed:",
      error,
    );
  }

  if (result.data.email) {
    try {
      await sendAppointmentConfirmation({
        email:
        result.data.email,

        name:
        result.data.name,

        serviceName:
        service.name,

        preferredDate:
        result.data.preferredDate,

        preferredTime:
        result.data.preferredTime,
      });
    } catch (error) {
      console.error(
        "Appointment confirmation email failed:",
        error,
      );
    }
  }

  return {
    success: true,

    message:
      "Tu solicitud fue enviada correctamente. Nos comunicaremos contigo para confirmar la cita.",
  };
}