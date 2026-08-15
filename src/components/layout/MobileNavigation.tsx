"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/config/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      >
        <span className="sr-only">Menú</span>

        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-slate-900" />
          <span className="block h-0.5 w-5 bg-slate-900" />
          <span className="block h-0.5 w-5 bg-slate-900" />
        </div>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-t border-slate-100 bg-white shadow-lg"
        >
          <nav aria-label="Navegación móvil" className="mx-auto flex max-w-7xl flex-col px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-brand-700 focus-visible:outline-none focus-visible:text-brand-700 last:border-0"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#citas"
              onClick={closeMenu}
              className="mt-5 rounded-full bg-brand-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Agendar cita
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
