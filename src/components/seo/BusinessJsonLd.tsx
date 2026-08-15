import { businessConfig } from "@/config/business";

export function BusinessJsonLd() {
  const {
    name,
    url,
    contact,
    location,
    schedule,
    social,
    professional,
    locale,
    seo,
    branding,
    structuredData,
  } = businessConfig;

  const structuredDataObject = {
    "@context": "https://schema.org",

    "@type": structuredData.type,

    "@id": `${url}/#business`,

    name,

    description: seo.description,

    url,

    telephone: contact.phone,

    email: contact.email,

    image: [`${url}${professional.image ?? "/professional/doctor.webp"}`],

    ...(branding.logo && {
      logo: `${url}${branding.logo}`,
    }),

    address: {
      "@type": "PostalAddress",

      streetAddress: location.address,

      addressLocality: location.city,

      addressRegion: location.state,

      ...(location.postalCode && {
        postalCode: location.postalCode,
      }),

      addressCountry: locale.country,
    },

    ...(location.latitude !== undefined &&
      location.longitude !== undefined && {
        geo: {
          "@type": "GeoCoordinates",

          latitude: location.latitude,

          longitude: location.longitude,
        },
      }),

    openingHoursSpecification: schedule.map((item) => ({
      "@type": "OpeningHoursSpecification",

      dayOfWeek: item.days,

      opens: item.opens,

      closes: item.closes,
    })),

    sameAs: [social.facebook, social.instagram, social.tiktok].filter(Boolean),
  };

  const jsonLd = JSON.stringify(structuredDataObject).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}
