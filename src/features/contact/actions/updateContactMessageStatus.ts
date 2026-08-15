"use server";

import { revalidatePath } from "next/cache";

import type { ContactMessageStatus } from "@/generated/prisma/enums";

import { requireAdmin } from "@/features/auth/services/requireAdmin";

import {
  getContactMessageById,
  updateContactMessageStatus as updateStatusRepository,
} from "@/features/contact/repositories/contactRepository";

const allowedStatuses = new Set<ContactMessageStatus>(["READ", "ARCHIVED"]);

export async function changeContactMessageStatus(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id");

  const status = formData.get("status");

  if (
    typeof id !== "string" ||
    typeof status !== "string" ||
    !allowedStatuses.has(status as ContactMessageStatus)
  ) {
    throw new Error("Invalid contact message status.");
  }

  const message = await getContactMessageById(id);

  if (!message) {
    throw new Error("Contact message not found.");
  }

  await updateStatusRepository(id, status as ContactMessageStatus);

  revalidatePath("/admin");
  revalidatePath("/admin/messages");
  revalidatePath(`/admin/messages/${id}`);
}
