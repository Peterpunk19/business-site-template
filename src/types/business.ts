export interface BusinessBranding {
  heroImage?: string;
}

export interface BusinessProfessional {
  name: string;
  title: string;
  license?: string;
  license2?: string;
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
  logo?: string;

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

  analytics: BusinessAnalytics;
}

export interface BusinessService {
  id: string;
  name: string;
  description: string;

  image: string;
  imageAlt: string;

  price?: number;
  priceFrom?: number;
  priceLabel?: string;

  promotionalPrice?: number;
  promotionLabel?: string;
  promotionDescription?: string;
  promotionValidUntil?: string;

  featured?: boolean;
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

export interface BusinessAnalytics {
  enabled: boolean;
  googleAnalyticsId?: string;
}
