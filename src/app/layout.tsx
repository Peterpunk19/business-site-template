import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/config/business";
import { BusinessJsonLd } from "@/components/seo/BusinessJsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.url),

  title: {
    default: businessConfig.seo.title,
    template: `%s | ${businessConfig.shortName}`,
  },

  description: businessConfig.seo.description,

  keywords: businessConfig.seo.keywords,

  authors: [
    {
      name: businessConfig.professional.name,
    },
  ],

  creator: businessConfig.professional.name,

  publisher: businessConfig.name,

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: businessConfig.locale.openGraphLocale,
    url: "/",
    siteName: businessConfig.name,
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,

    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: businessConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={businessConfig.locale.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="
            fixed left-4 top-4 z-[100]
            -translate-y-24
            rounded-md
            bg-slate-950
            px-4 py-2
            text-white
            transition
            focus:translate-y-0
          "
        >
          Saltar al contenido principal
        </a>

        <BusinessJsonLd />

        {children}

        {businessConfig.analytics.enabled && businessConfig.analytics.googleAnalyticsId && (
          <GoogleAnalytics gaId={businessConfig.analytics.googleAnalyticsId} />
        )}
      </body>
    </html>
  );
}
