import { BusinessConfig } from "@/types/business";

export const businessConfig = {
  slug: "consultorio-dental",
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
    image: "/images/doctor.webp",
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
    googleMapsUrl:
      "https://maps.app.goo.gl/mxb2UzRdMVWvruCb7",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.5201586372555!2d-93.1184869!3d16.750777300000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f4db73eadb%3A0x4963c49223895bd5!2sDr%20Ortega%20Estetica%20Dental!5e0!3m2!1ses!2smx!4v1786655812810!5m2!1ses!2smx",
  },
  schedule: [
    {
      days: "Lunes a viernes",
      hours: "9:00 AM - 7:00 PM",
    },
    {
      days: "Sábado",
      hours: "9:00 AM - 2:00 PM",
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
} satisfies BusinessConfig;