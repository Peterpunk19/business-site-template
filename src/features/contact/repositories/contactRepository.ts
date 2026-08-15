import "server-only";

import { prisma } from "@/lib/prisma";

import type { ContactInput } from "@/features/contact/schemas/contactSchema";
import { getBusinessIdBySlug } from "@/features/businesses/repositories/businessRepository";
import type { ContactMessageStatus } from "@/generated/prisma/enums";

interface SaveContactMessageParams {
  businessSlug: string;
  contact: ContactInput;
}

interface GetContactMessagesParams {
  businessId: string;
  search?: string;
  status?: ContactMessageStatus;
}

export async function saveContactMessage({ businessSlug, contact }: SaveContactMessageParams) {
  const businessId = await getBusinessIdBySlug(businessSlug);

  if (!businessId) {
    throw new Error(`Business "${businessSlug}" could not be found.`);
  }

  return prisma.contactMessage.create({
    data: {
      businessId,

      name: contact.name,
      email: contact.email,

      phone: contact.phone || null,

      subject: contact.subject || null,

      message: contact.message,

      status: "UNREAD",
    },

    select: {
      id: true,
    },
  });
}

export async function getContactMessages({ businessId, search, status }: GetContactMessagesParams) {
  return prisma.contactMessage.findMany({
    where: {
      businessId,

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

          {
            subject: {
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
      subject: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function getContactMessageById(id: string) {
  return prisma.contactMessage.findUnique({
    where: {
      id,
    },
  });
}

export async function markContactMessageAsRead(id: string) {
  return prisma.contactMessage.updateMany({
    where: {
      id,
      status: "UNREAD",
    },

    data: {
      status: "READ",
    },
  });
}

export async function updateContactMessageStatus(id: string, status: ContactMessageStatus) {
  return prisma.contactMessage.update({
    where: {
      id,
    },

    data: {
      status,
    },
  });
}
