"use server";

import { revalidatePath } from "next/cache";

import { AppointmentStatus } from "@/generated/prisma/client";

import { requireAdmin } from "@/features/auth/services/requireAdmin";

import {
  getAppointmentById,
  updateAppointmentStatus as updateAppointmentStatusRepository,
} from "@/features/appointments/repositories/appointmentRepository";

import { canTransitionAppointmentStatus } from "@/features/appointments/domain/appointmentStatus";

import {
  sendAppointmentCancelledEmail,
  sendAppointmentConfirmedEmail,
} from "@/features/appointments/services/appointmentStatusNotificationService";

import { getServiceName } from "@/lib/services";

import { formatDateObjectForMexico, formatTime } from "@/lib/date";

const allowedStatuses = new Set<AppointmentStatus>([
  "PENDING",
  "CONFIRMED",
  "CANCELLED",
  "COMPLETED",
]);

export async function updateAppointmentStatus(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id");
  const status = formData.get("status");

  if (
    typeof id !== "string" ||
    typeof status !== "string" ||
    !allowedStatuses.has(status as AppointmentStatus)
  ) {
    throw new Error("Invalid appointment status update.");
  }

  const newStatus = status as AppointmentStatus;

  const appointment = await getAppointmentById(id);

  if (!appointment) {
    throw new Error("Appointment not found.");
  }

  if (!canTransitionAppointmentStatus(appointment.status, newStatus)) {
    throw new Error(`Invalid status transition from ${appointment.status} to ${newStatus}.`);
  }

  await updateAppointmentStatusRepository(id, newStatus);

  if (appointment.email) {
    const notificationData = {
      email: appointment.email,

      name: appointment.name,

      serviceName: getServiceName(appointment.serviceId),

      date: formatDateObjectForMexico(appointment.preferredDate),

      time: formatTime(appointment.preferredTime),
    };

    try {
      if (newStatus === "CONFIRMED") {
        await sendAppointmentConfirmedEmail(notificationData);
      }

      if (newStatus === "CANCELLED") {
        await sendAppointmentCancelledEmail(notificationData);
      }
    } catch (error) {
      console.error("Appointment status updated but notification email failed:", error);
    }
  }

  revalidatePath("/admin");
  revalidatePath("/admin/appointments");
  revalidatePath(`/admin/appointments/${id}`);
}
