import "server-only";

import { prisma } from "@/lib/prisma";

import type { AppointmentInput } from "@/features/appointments/schemas/appointmentSchema";
import { getBusinessIdBySlug } from "@/features/businesses/repositories/businessRepository";

interface CreateAppointmentParams {
  businessSlug: string;
  appointment: AppointmentInput;
}

export async function saveAppointment({ businessSlug, appointment }: CreateAppointmentParams) {
  const businessId = await getBusinessIdBySlug(businessSlug);

  if (!businessId) {
    throw new Error(`Business "${businessSlug}" could not be found.`);
  }

  return prisma.appointmentRequest.create({
    data: {
      businessId,

      name: appointment.name,
      phone: appointment.phone,
      email: appointment.email || null,

      serviceId: appointment.service,

      preferredDate: new Date(`${appointment.preferredDate}T00:00:00`),

      preferredTime: appointment.preferredTime,

      message: appointment.message || null,

      status: "PENDING",
    },
    select: {
      id: true,
    },
  });
}
