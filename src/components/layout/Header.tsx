import Link from "next/link";

import { businessConfig } from "@/config/business";
import { navigation } from "@/config/navigation";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="#inicio" className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">
              {businessConfig.name}
            </span>

            <span className="text-xs text-slate-500">
              {businessConfig.professional.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#citas"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Agendar cita
          </Link>
        </div>
      </Container>
    </header>
  );
}