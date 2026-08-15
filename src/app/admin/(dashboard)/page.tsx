import { auth } from "@/auth";
import { logout } from "@/features/auth/actions/logout";

export default async function AdminPage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Bienvenido</p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">{session?.user.name}</h1>

            <p className="mt-3 text-slate-600">El panel administrativo está funcionando.</p>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
