import "server-only";

import { prisma } from "@/lib/prisma";

import type { ContactInput } from "@/features/contact/schemas/contactSchema";
import {getBusinessIdBySlug} from "@/features/businesses/repositories/businessRepository";

interface SaveContactMessageParams {
  businessSlug: string;
  contact: ContactInput;
}

export async function saveContactMessage({
                                           businessSlug,
                                           contact,
                                         }: SaveContactMessageParams) {
  const businessId =
    await getBusinessIdBySlug(
      businessSlug,
    );

  if (!businessId) {
    throw new Error(
      `Business "${businessSlug}" could not be found.`,
    );
  }

  return prisma.contactMessage.create({
    data: {
      businessId,

      name: contact.name,
      email: contact.email,

      phone:
        contact.phone || null,

      subject:
        contact.subject || null,

      message:
      contact.message,

      status: "UNREAD",
    },

    select: {
      id: true,
    },
  });
}