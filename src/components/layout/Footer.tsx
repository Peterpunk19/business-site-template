import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

import { businessConfig } from "@/config/business";
import Link from "next/link";
import { PrivacyPreferencesButton } from "@/components/analytics/PrivacyPreferencesButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{businessConfig.name}</p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              {businessConfig.description}
            </p>

            <SocialLinks
              facebook={businessConfig.social.facebook}
              instagram={businessConfig.social.instagram}
              tiktok={businessConfig.social.tiktok}
              variant="dark"
              className="mt-5"
            />
          </div>

          <div>
            <p className="font-semibold">Contacto</p>

            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>{businessConfig.contact.phone}</p>

              <p>{businessConfig.contact.email}</p>
            </div>
          </div>

          <div>
            <p className="font-semibold">Ubicación</p>

            <p className="mt-4 text-sm leading-6 text-white/70">
              {businessConfig.location.address}
              <br />
              {businessConfig.location.city}, {businessConfig.location.state}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            © {currentYear} {businessConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/aviso-de-privacidad"
              className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              Aviso de Privacidad
            </Link>

            <PrivacyPreferencesButton />
          </div>
        </div>
      </Container>
    </footer>
  );
}
