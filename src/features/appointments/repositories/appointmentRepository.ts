import "server-only";

import { prisma } from "@/lib/prisma";

import type { AppointmentInput } from "@/features/appointments/schemas/appointmentSchema";
import { getBusinessIdBySlug } from "@/features/businesses/repositories/businessRepository";
import type { AppointmentStatus } from "@/generated/prisma/client";

interface CreateAppointmentParams {
  businessSlug: string;
  appointment: AppointmentInput;
}

interface GetAppointmentsParams {
  search?: string;
  status?: AppointmentStatus;
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

export async function getAppointments({ search, status }: GetAppointmentsParams = {}) {
  return prisma.appointmentRequest.findMany({
    where: {
      ...(status && {
        status,
      }),

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    },

    orderBy: {
      createdAt: "desc",
    },

    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
      serviceId: true,
      preferredDate: true,
      preferredTime: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function getAppointmentById(id: string) {
  return prisma.appointmentRequest.findUnique({
    where: {
      id,
    },
  });
}

export async function updateAppointmentStatus(id: string, status: AppointmentStatus) {
  return prisma.appointmentRequest.update({
    where: {
      id,
    },

    data: {
      status,
    },
  });
}
