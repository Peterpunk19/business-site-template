import type { BusinessService } from "@/types/business";

export const services = [
  {
    id: "cleaning",
    name: "Limpieza dental",
    description:
      "Eliminación de sarro y placa bacteriana para mantener una sonrisa limpia y saludable.",
    image: "/images/services/cleaning.webp",
    imageAlt: "Procedimiento profesional de limpieza dental",
  },

  {
    id: "whitening",
    name: "Blanqueamiento dental",
    description:
      "Tratamiento profesional para mejorar el tono de los dientes y realzar tu sonrisa.",
    image: "/images/services/whitening.webp",
    imageAlt: "Resultado de tratamiento de blanqueamiento dental",

    price: 2500,
    promotionalPrice: 1990,

    promotionLabel: "Promoción especial",
    promotionDescription: "Precio especial durante agosto.",
    promotionValidUntil: "2026-08-31",

    featured: true,
  },

  {
    id: "orthodontics",
    name: "Ortodoncia",
    description: "Tratamientos personalizados para mejorar la posición y función de tus dientes.",
    image: "/images/services/orthodontics.webp",
    imageAlt: "Tratamiento dental de ortodoncia",
  },

  {
    id: "implants",
    name: "Implantes dentales",
    description: "Soluciones para reemplazar piezas dentales y recuperar funcionalidad y estética.",
    image: "/images/services/cleaning.webp",
    imageAlt: "Tratamiento con implante dental",
  },

  {
    id: "restorations",
    name: "Restauraciones",
    description: "Tratamientos para recuperar dientes afectados por caries o daños.",
    image: "/images/services/cleaning.webp",
    imageAlt: "Restauración estética de una pieza dental",
  },

  {
    id: "evaluation",
    name: "Valoración dental",
    description:
      "Evaluación profesional para conocer el estado de tu salud bucal y definir el tratamiento adecuado.",
    image: "/images/services/cleaning.webp",
    imageAlt: "Dentista realizando una valoración dental",
  },
] satisfies BusinessService[];
