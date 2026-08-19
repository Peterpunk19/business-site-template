import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

import { businessConfig } from "@/config/business";

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

        <div className="mt-10 border-t border-white/30 pt-6">
          <p className="text-sm text-white/70">
            © {currentYear} {businessConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
