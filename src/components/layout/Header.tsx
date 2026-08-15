import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

import { businessConfig } from "@/config/business";
import { navigation } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="#inicio"
            className="flex min-w-0 flex-col rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            <span className="truncate text-lg font-bold text-slate-950 sm:text-xl">
              {businessConfig.name}
            </span>

            <span className="truncate text-xs text-slate-500">
              {businessConfig.professional.name}
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#citas"
              className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
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
