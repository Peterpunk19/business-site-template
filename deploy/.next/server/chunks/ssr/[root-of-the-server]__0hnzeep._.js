module.exports = [
  89578,
  (a) => {
    a.v({
      className: "geist_a71539c9-module__T19VSG__className",
      variable: "geist_a71539c9-module__T19VSG__variable",
    });
  },
  35214,
  (a) => {
    a.v({
      className: "geist_mono_8d43a2aa-module__8Li5zG__className",
      variable: "geist_mono_8d43a2aa-module__8Li5zG__variable",
    });
  },
  27572,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(89578);
    let d = {
      className: c.default.className,
      style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
    };
    null != c.default.variable && (d.variable = c.default.variable);
    var e = a.i(35214);
    let f = {
      className: e.default.className,
      style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: "normal" },
    };
    null != e.default.variable && (f.variable = e.default.variable);
    var g = a.i(45380);
    function h() {
      let {
          name: a,
          url: c,
          contact: d,
          location: e,
          schedule: f,
          social: h,
          professional: i,
          locale: j,
          seo: k,
          branding: l,
          structuredData: m,
        } = g.businessConfig,
        n = JSON.stringify({
          "@context": "https://schema.org",
          "@type": m.type,
          "@id": `${c}/#business`,
          name: a,
          description: k.description,
          url: c,
          telephone: d.phone,
          email: d.email,
          image: [`${c}${i.image ?? "/professional/doctor.webp"}`],
          ...(l.logo && { logo: `${c}${l.logo}` }),
          address: {
            "@type": "PostalAddress",
            streetAddress: e.address,
            addressLocality: e.city,
            addressRegion: e.state,
            ...(e.postalCode && { postalCode: e.postalCode }),
            addressCountry: j.country,
          },
          ...(void 0 !== e.latitude &&
            void 0 !== e.longitude && {
              geo: { "@type": "GeoCoordinates", latitude: e.latitude, longitude: e.longitude },
            }),
          openingHoursSpecification: f.map((a) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: a.days,
            opens: a.opens,
            closes: a.closes,
          })),
          sameAs: [h.facebook, h.instagram, h.tiktok].filter(Boolean),
        }).replace(/</g, "\\u003c");
      return (0, b.jsx)("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: n },
      });
    }
    let i = {
      metadataBase: new URL(g.businessConfig.url),
      title: {
        default: g.businessConfig.seo.title,
        template: `%s | ${g.businessConfig.shortName}`,
      },
      description: g.businessConfig.seo.description,
      keywords: g.businessConfig.seo.keywords,
      authors: [{ name: g.businessConfig.professional.name }],
      creator: g.businessConfig.professional.name,
      publisher: g.businessConfig.name,
      formatDetection: { telephone: !1, email: !1, address: !1 },
      alternates: { canonical: "/" },
      openGraph: {
        type: "website",
        locale: g.businessConfig.locale.openGraphLocale,
        url: "/",
        siteName: g.businessConfig.name,
        title: g.businessConfig.seo.title,
        description: g.businessConfig.seo.description,
        images: [
          { url: "/opengraph-image.jpg", width: 1200, height: 630, alt: g.businessConfig.name },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: g.businessConfig.seo.title,
        description: g.businessConfig.seo.description,
        images: ["/twitter-image.jpg"],
      },
      robots: {
        index: !0,
        follow: !0,
        googleBot: {
          index: !0,
          follow: !0,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    };
    a.s(
      [
        "default",
        0,
        function ({ children: a }) {
          return (0, b.jsx)("html", {
            lang: g.businessConfig.locale.language,
            className: `${d.variable} ${f.variable} h-full antialiased`,
            children: (0, b.jsxs)("body", {
              className: "min-h-full flex flex-col",
              children: [
                (0, b.jsx)("a", {
                  href: "#main-content",
                  className:
                    "\n            fixed left-4 top-4 z-[100]\n            -translate-y-24\n            rounded-md\n            bg-slate-950\n            px-4 py-2\n            text-white\n            transition\n            focus:translate-y-0\n          ",
                  children: "Saltar al contenido principal",
                }),
                (0, b.jsx)(h, {}),
                a,
              ],
            }),
          });
        },
        "metadata",
        0,
        i,
      ],
      27572,
    );
  },
  50645,
  function (a) {
    a.n(a.i(27572));
  },
  45380,
  (a) => {
    "use strict";
    a.s([
      "businessConfig",
      0,
      {
        slug: "dr-ortega-estetica-dental",
        url: "https://drortegaesteticadental.com",
        name: "Dr. Ortega Estética Dental",
        shortName: "Estética Dental",
        description:
          "Atención odontológica profesional enfocada en el cuidado, prevención y bienestar de tu sonrisa.",
        professional: {
          name: "Dr. Salvador Ortega",
          title: "Cirujano Dentista",
          license: "CEU-10481267",
          license2: "2407012002A00271",
          description:
            "Brindamos atención odontológica profesional, cercana y personalizada, enfocándonos en la prevención, diagnóstico y tratamiento de problemas dentales.",
          image: "/images/professional.webp",
        },
        contact: { phone: "9614286042", whatsapp: "9612177142", email: "dr.ortega32@gmail.com" },
        location: {
          address: "1er Piso, 468, entre 3a y 4a Sur, 2a Poniente sur, El Centro",
          city: "Tuxtla Gutiérrez",
          state: "Chiapas",
          postalCode: "29000",
          googleMapsUrl: "https://maps.app.goo.gl/mxb2UzRdMVWvruCb7",
          latitude: 16.7507841,
          longitude: -93.1211064,
          googleMapsEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.5201586372555!2d-93.1184869!3d16.750777300000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f4db73eadb%3A0x4963c49223895bd5!2sDr%20Ortega%20Estetica%20Dental!5e0!3m2!1ses!2smx!4v1786655812810!5m2!1ses!2smx",
        },
        schedule: [
          {
            label: "Lunes a viernes",
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "19:00",
          },
          { label: "Sábado", days: ["Saturday"], opens: "10:00", closes: "17:00" },
        ],
        social: {
          facebook: "https://www.facebook.com/DrOrtegaEsteticaDental32",
          instagram: "https://www.instagram.com/drortega_esteticadental",
          tiktok: "https://tiktok.com/@...",
        },
        notifications: { email: "pedrod.beltran@gmail.com" },
        branding: { logo: "/images/logo.png", heroImage: "/images/hero.webp" },
        seo: {
          title: "Dentista en Tuxtla Gutiérrez | Dr. Ortega Estética Dental",
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
        locale: { language: "es-MX", openGraphLocale: "es_MX", country: "MX" },
        structuredData: { type: "Dentist" },
      },
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hnzeep._.js.map
