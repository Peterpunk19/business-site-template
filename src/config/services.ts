import { BusinessService } from "@/types/business";

export const services = [
  {
    id: "cleaning",
    name: "Limpieza dental",
    description:
      "Limpieza profesional para ayudar a prevenir acumulación de placa y mantener dientes y encías saludables.",
    image: "/images/services/cleaning.webp",
  },
  {
    id: "whitening",
    name: "Blanqueamiento dental",
    description:
      "Tratamiento estético para mejorar el tono de los dientes y devolver luminosidad a tu sonrisa.",
    image: "/images/services/whitening.webp",
  },
  {
    id: "orthodontics",
    name: "Ortodoncia",
    description:
      "Evaluación y tratamiento para mejorar la posición de los dientes y la función de la mordida.",
    image: "/images/services/orthodontics.webp",
  },
] satisfies BusinessService[];