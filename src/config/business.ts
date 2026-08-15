import { BusinessConfig } from "@/types/business";

export const businessConfig = {
  slug: "consultorio-dental",
  url: "https://www.consultoriodental.com",
  name: "Consultorio Dental",
  shortName: "Dental",

  description:
    "Atención odontológica profesional enfocada en el cuidado, prevención y bienestar de tu sonrisa.",

  professional: {
    name: "Dr. Salvador Ortega",
    title: "Cirujano Dentista",
    license: "Cédula profesional XXXXXXX",
    description:
      "Brindamos atención odontológica profesional, cercana y personalizada, enfocándonos en la prevención, diagnóstico y tratamiento de problemas dentales.",
    image: "/images/professional.webp",
  },

  contact: {
    phone: "961 000 0000",
    whatsapp: "529610000000",
    email: "contacto@consultorio.com",
  },

  location: {
    address: "Dr Ortega Estética Dental",
    city: "Tuxtla Gutiérrez",
    state: "Chiapas",
    postalCode: "29050",
    googleMapsUrl:
      "https://maps.app.goo.gl/mxb2UzRdMVWvruCb7",
    latitude: 16.7507841,
    longitude: -93.1211064,
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.5201586372555!2d-93.1184869!3d16.750777300000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f4db73eadb%3A0x4963c49223895bd5!2sDr%20Ortega%20Estetica%20Dental!5e0!3m2!1ses!2smx!4v1786655812810!5m2!1ses!2smx",
  },
  schedule: [
    {
      label: "Lunes a viernes",

      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],

      opens: "09:00",
      closes: "19:00",
    },

    {
      label: "Sábado",

      days: [
        "Saturday",
      ],

      opens: "09:00",
      closes: "14:00",
    },
  ],

  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },

  notifications: {
    email: "pedrod.beltran@gmail.com",
  },

  branding: {
    logo: "/images/logo.png",
  },

  seo: {
    title:
      "Dentista en Tuxtla Gutiérrez | Consultorio Dental",

    description:
      "Consultorio dental en Tuxtla Gutiérrez, Chiapas. Atención odontológica profesional, limpieza dental, blanqueamiento, ortodoncia y valoración dental.",

    keywords: [
      "dentista en Tuxtla Gutiérrez",
      "dentista Tuxtla",
      "consultorio dental Tuxtla Gutiérrez",
      "odontólogo Tuxtla Gutiérrez",
      "limpieza dental Tuxtla",
      "blanqueamiento dental Tuxtla",
      "ortodoncia Tuxtla Gutiérrez",
    ],
  },

  locale: {
    language: "es-MX",
    openGraphLocale: "es_MX",
    country: "MX",
  },

  structuredData: {
    type: "Dentist",
  },
} satisfies BusinessConfig;