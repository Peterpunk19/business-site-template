import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre.").max(100, "El nombre es demasiado largo."),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "El teléfono debe contener exactamente 10 dígitos."),

  email: z
    .string()
    .trim()
    .pipe(
      z.email({
        error: "Ingresa un correo válido.",
      }),
    ),

  subject: z.string().trim().max(150, "El asunto es demasiado largo.").optional().or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(10, "Escribe un mensaje un poco más detallado.")
    .max(1000, "El mensaje no puede superar 1000 caracteres."),
});

export type ContactInput = z.infer<typeof contactSchema>;
