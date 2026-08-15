"use server";

import { revalidatePath } from "next/cache";

import { AppointmentStatus } from "@/generated/prisma/client";

import { requireAdmin } from "@/features/auth/services/requireAdmin";

import {
  getAppointmentById,
  updateAppointmentStatus as updateAppointmentStatusRepository,
} from "@/features/appointments/repositories/appointmentRepository";

import { canTransitionAppointmentStatus } from "@/features/appointments/domain/appointmentStatus";

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

  revalidatePath("/admin");
  revalidatePath("/admin/appointments");
  revalidatePath(`/admin/appointments/${id}`);
}
