"use server";

import { businessConfig } from "@/config/business";

import { contactSchema } from "@/features/contact/schemas/contactSchema";

import { saveContactMessage } from "@/features/contact/repositories/contactRepository";

import type { ContactFormState } from "@/features/contact/types/contact";

export async function createContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = formData.get("website");

  if (website) {
    return {
      success: true,
      tracked: false,
      message: "Tu mensaje fue enviado correctamente.",
    };
  }

  const values = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,

      message: "Revisa los campos del formulario.",

      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await saveContactMessage({
      businessSlug: businessConfig.slug,

      contact: result.data,
    });

    return {
      success: true,
      tracked: true,
      message: "Tu mensaje fue enviado correctamente. Nos comunicaremos contigo lo antes posible.",
    };
  } catch (error) {
    console.error("Error creating contact message:", error);

    return {
      success: false,

      message: "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
    };
  }
}
