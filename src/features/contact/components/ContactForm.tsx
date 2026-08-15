"use client";

import { useActionState, useEffect, useRef } from "react";

import { createContactMessage } from "@/features/contact/actions/createContactMessage";
import type { ContactFormState } from "@/features/contact/types/contact";

const initialState: ContactFormState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(createContactMessage, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>

        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
            Nombre
          </label>

          <input
            id="contact-name"
            name="name"
            required
            type="text"
            maxLength={100}
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "contact-name-error" : undefined}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />

          {state.errors?.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-red-600">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">
            Teléfono
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            pattern="[0-9]{10}"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "contact-phone-error" : undefined}
            placeholder="9610000000"
            onInput={(event) => {
              event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
            }}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />

          {state.errors?.phone && (
            <p id="contact-phone-error" className="mt-2 text-sm text-red-600">
              {state.errors.phone[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
          Correo
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "contact-email-error" : undefined}
          placeholder="correo@ejemplo.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
        />

        {state.errors?.email && (
          <p id="contact-email-error" className="mt-2 text-sm text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-700">
          Asunto
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={150}
          aria-invalid={Boolean(state.errors?.subject)}
          aria-describedby={state.errors?.subject ? "contact-subject-error" : undefined}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
        />

        {state.errors?.subject && (
          <p id="contact-subject-error" className="mt-2 text-sm text-red-600">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
          Mensaje
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={1000}
          rows={5}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "contact-message-error" : undefined}
          placeholder="Escribe tu mensaje..."
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
        />

        {state.errors?.message && (
          <p id="contact-message-error" className="mt-2 text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {state.message && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-xl p-4 text-sm ${
            state.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
