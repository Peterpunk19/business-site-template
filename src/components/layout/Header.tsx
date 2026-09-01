import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import Image from "next/image";

import { businessConfig } from "@/config/business";
import { navigation } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="#inicio"
            aria-label={`Ir al inicio - ${businessConfig.name}`}
            className="
              flex
              min-w-0
              shrink-0
              items-center
              rounded-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-2
            "
          >
            {businessConfig.logo ? (
              <div className="relative h-12 w-48 sm:h-14 sm:w-60">
                <Image
                  src={businessConfig.logo}
                  alt={businessConfig.name}
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            ) : (
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-lg font-bold text-slate-950 sm:text-xl">
                  {businessConfig.name}
                </span>

                <span className="truncate text-xs text-slate-500">
                  {businessConfig.professional.name}
                </span>
              </div>
            )}
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm font-medium text-slate-600 transition hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#citas"
              className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Agendar cita
            </Link>
          </div>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
