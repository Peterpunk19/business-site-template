import "server-only";

import { prisma } from "@/lib/prisma";

export async function getDashboardSummary() {
  const [
    pendingAppointments,
    totalAppointments,
    unreadMessages,
    totalMessages,
    recentAppointments,
    recentMessages,
  ] = await Promise.all([
    prisma.appointmentRequest.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.appointmentRequest.count(),

    prisma.contactMessage.count({
      where: {
        status: "UNREAD",
      },
    }),

    prisma.contactMessage.count(),

    prisma.appointmentRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,

      select: {
        id: true,
        name: true,
        serviceId: true,
        preferredDate: true,
        preferredTime: true,
        status: true,
        createdAt: true,
      },
    }),

    prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,

      select: {
        id: true,
        name: true,
        subject: true,
        status: true,
        createdAt: true,
      },
    }),
  ]);

  return {
    pendingAppointments,
    totalAppointments,
    unreadMessages,
    totalMessages,
    recentAppointments,
    recentMessages,
  };
}
