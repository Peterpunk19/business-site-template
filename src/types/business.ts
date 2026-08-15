export interface BusinessProfessional {
  name: string;
  title: string;
  license?: string;
  description: string;
  image?: string;
}

export interface BusinessContact {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface BusinessLocation {
  address: string;
  city: string;
  state: string;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
}

export interface BusinessSchedule {
  days: string;
  hours: string;
}

export interface BusinessSocial {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

export interface BusinessConfig {
  slug: string;
  name: string;
  shortName: string;
  description: string;

  professional: BusinessProfessional;

  contact: BusinessContact;

  location: BusinessLocation;

  schedule: BusinessSchedule[];

  social: BusinessSocial;

  notifications: BusinessNotifications;
}

export interface BusinessService {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface BusinessNotifications {
  email: string;
}