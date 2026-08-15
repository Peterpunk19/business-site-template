import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Ingresa un correo válido.")
    .transform((value) => value.toLowerCase()),

  password: z.string().min(1, "Ingresa tu contraseña."),
});
