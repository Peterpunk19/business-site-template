"use client";

import { useActionState } from "react";

import { login, type LoginState } from "@/features/auth/actions/login";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Correo electrónico
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="correo@ejemplo.com"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            text-base
            outline-none
            transition
            focus:border-brand-500
            focus:ring-2
            focus:ring-brand-100
          "
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
          Contraseña
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            text-base
            outline-none
            transition
            focus:border-brand-500
            focus:ring-2
            focus:ring-brand-100
          "
        />
      </div>

      {state.error && (
        <div role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="
          w-full
          rounded-xl
          bg-brand-700
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-brand-800
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {pending ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
