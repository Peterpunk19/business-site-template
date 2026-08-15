export interface BusinessBranding {
  logo?: string;
}

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
  postalCode: string;
  googleMapsUrl?: string;
  latitude?: number;
  longitude?: number;
  googleMapsEmbedUrl?: string;
}

export interface BusinessSchedule {
  label: string;

  days: string[];

  opens: string;
  closes: string;
}

export interface BusinessSocial {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

export interface BusinessSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface BusinessConfig {
  slug: string;
  url: string;
  name: string;
  shortName: string;
  description: string;

  professional: BusinessProfessional;

  contact: BusinessContact;

  location: BusinessLocation;

  schedule: BusinessSchedule[];

  social: BusinessSocial;

  notifications: BusinessNotifications;

  branding: BusinessBranding;

  seo: BusinessSeo;

  structuredData: BusinessStructuredData;

  locale: BusinessLocale;
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

export interface BusinessStructuredData {
  type: string;
}

export interface BusinessLocale {
  language: string;
  openGraphLocale: string;
  country: string;
}
