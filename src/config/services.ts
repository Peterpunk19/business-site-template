import type { BusinessService } from "@/types/business";

export const services = [
  {
    id: "dental-cleaning",
    name: "Limpieza dental",
    description:
      "Eliminación de sarro y placa bacteriana para mantener una sonrisa limpia y saludable.",
    image: "/images/services/dental_cleaning.webp",
    imageAlt: "Procedimiento profesional de limpieza dental",

    promotionalPrice: 550,

    promotionDescription: "Precio especial durante agosto.",
    promotionValidUntil: "2026-08-31",
  },

  {
    id: "integral-package",
    name: "Paquete integral",
    description: "2 resinas estéticas + limpieza dental ultrasónica.",
    image: "/images/services/integral-package.webp",
    imageAlt: "Tratamiento integral con resinas estéticas y limpieza dental",

    promotionalPrice: 1800,

    promotionLabel: "Promoción especial",
    promotionDescription: "Precio especial durante agosto.",
    promotionValidUntil: "2026-08-31",

    featured: true,
  },

  {
    id: "zirconia-crowns",
    name: "Coronas digitales de zirconia",
    description: "",
    image: "/images/services/zirconia-crowns.webp",
    imageAlt: "Corona dental digital de zirconia",
  },

  {
    id: "metal-porcelain-crowns",
    name: "Coronas metal-porcelana",
    description: "",
    image: "/images/services/metal-porcelain-crowns.webp",
    imageAlt: "Corona dental de metal y porcelana",
  },

  {
    id: "amalgam-replacement",
    name: "Cambio de amalgamas metálicas por resina estética",
    description: "",
    image: "/images/services/amalgams-replacement.webp",
    imageAlt: "Cambio de amalgama dental por resina estética",
  },

  {
    id: "esthetic-resin-restoration",
    name: "Eliminación de caries y obturación con resina estética",
    description: "",
    image: "/images/services/esthetic-resin-restoration.webp",
    imageAlt: "Restauración dental con resina estética de alta duración",
  },

  {
    id: "dental-extraction",
    name: "Extracción dental",
    description: "",
    image: "/images/services/dental-extraction.webp",
    imageAlt: "Procedimiento profesional de extracción dental",
  },
] satisfies BusinessService[];
