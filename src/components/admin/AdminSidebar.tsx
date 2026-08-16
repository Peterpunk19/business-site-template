"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="border-b border-slate-100 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Administración
        </p>

        <p className="mt-2 font-bold text-slate-950">{businessConfig.shortName}</p>
      </div>

      <nav aria-label="Administración" className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const active =
            item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
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
            className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
    </aside>
  );
}
