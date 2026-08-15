import { z } from "zod";
import { isAppointmentDateAllowed } from "@/lib/date";

export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre.").max(100, "El nombre es demasiado largo."),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "El teléfono debe contener exactamente 10 dígitos."),

  email: z
    .string()
    .trim()
    .transform((value) => value || undefined)
    .pipe(
      z
        .email({
          error: "Ingresa un correo válido.",
        })
        .optional(),
    ),

  service: z.string().min(1, "Selecciona un servicio."),

  preferredDate: z.string().min(1, "Selecciona una fecha.").refine(isAppointmentDateAllowed, {
    message: "Selecciona una fecha dentro de los próximos 90 días.",
  }),

  preferredTime: z.string().min(1, "Selecciona un horario."),

  message: z.string().trim().max(500, "El mensaje no puede superar 500 caracteres.").optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
