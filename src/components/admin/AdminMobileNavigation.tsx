"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { businessConfig } from "@/config/business";
import { logout } from "@/features/auth/actions/logout";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
  },
  {
    label: "Citas",
    href: "/admin/appointments",
  },
  {
    label: "Mensajes",
    href: "/admin/messages",
  },
];

export function AdminMobileNavigation() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="admin-mobile-menu"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
      >
        <span aria-hidden="true" className="text-xl">
          {open ? "×" : "☰"}
        </span>
      </button>

      {open && (
        <>
          {/* Overlay */}
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          />

          {/* Drawer */}
          <aside
            id="admin-mobile-menu"
            className="
              fixed
              inset-y-0
              left-0
              z-50
              flex
              h-dvh
              w-[min(85vw,320px)]
              flex-col
              bg-white
              shadow-2xl
              lg:hidden
            "
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Administración
                </p>

                <p className="mt-1 font-bold text-slate-950">{businessConfig.shortName}</p>
              </div>

              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-500 transition hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            <nav aria-label="Administración" className="flex-1 space-y-1 overflow-y-auto p-4">
              {navigation.map((item) => {
                const active =
                  item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-brand-50 text-brand-800"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-slate-100 p-4">
              <form action={logout}>
                <button
                  type="submit"
                  className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Cerrar sesión
                </button>
              </form>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
