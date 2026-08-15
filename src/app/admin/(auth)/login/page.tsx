import { redirect } from "next/navigation";

import { auth } from "@/auth";

import { LoginForm } from "@/features/auth/components/LoginForm";

import { businessConfig } from "@/config/business";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Administración
            </p>

            <h1 className="mt-3 text-2xl font-bold text-slate-950">{businessConfig.name}</h1>

            <p className="mt-2 text-sm text-slate-500">
              Inicia sesión para administrar citas y mensajes.
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
