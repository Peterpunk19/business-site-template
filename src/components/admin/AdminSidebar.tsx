import Link from "next/link";

import { businessConfig } from "@/config/business";
import { logout } from "@/features/auth/actions/logout";

export function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="border-b border-slate-100 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Administración
        </p>

        <p className="mt-2 font-bold text-slate-950">{businessConfig.shortName}</p>
      </div>

      <nav aria-label="Administración" className="flex-1 space-y-1 p-4">
        <Link
          href="/admin"
          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/appointments"
          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Citas
        </Link>

        <Link
          href="/admin/messages"
          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Mensajes
        </Link>
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
  );
}
