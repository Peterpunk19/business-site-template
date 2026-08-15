"use client";

import { useActionState, useEffect, useRef } from "react";
import { createAppointment } from "@/features/appointments/actions/createAppointment";
import type { AppointmentFormState } from "@/features/appointments/types/appointment";
import { services } from "@/config/services";

const initialState: AppointmentFormState = {
  success: false,
};

export function toDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function AppointmentForm() {
  const [state, formAction, pending] = useActionState(createAppointment, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const today = new Date();

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>

        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Nombre
        </label>

        <input
          id="name"
          name="name"
          type="text"
          maxLength={100}
          required
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
        />

        {state.errors?.name && (
          <p id="name-error" className="mt-2 text-sm text-red-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Teléfono
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            pattern="[0-9]{10}"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
            placeholder="9610000000"
            onInput={(event) => {
              event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
            }}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />

          {state.errors?.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600">
              {state.errors.phone[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Correo
          </label>

          <input
            id="email"
            name="email"
            type="email"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            placeholder="correo@ejemplo.com"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />

          {state.errors?.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
          Servicio
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          aria-invalid={Boolean(state.errors?.service)}
          aria-describedby={state.errors?.service ? "service-error" : undefined}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400"
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>

          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        {state.errors?.service && (
          <p id="service-error" className="mt-2 text-sm text-red-600">
            {state.errors.service[0]}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-slate-700">
            Fecha preferida
          </label>

          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={toDateInputValue(today)}
            max={toDateInputValue(maxDate)}
            aria-invalid={Boolean(state.errors?.preferredDate)}
            aria-describedby={state.errors?.preferredDate ? "preferredDate-error" : undefined}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />

          {state.errors?.preferredDate && (
            <p id="preferredDate-error" className="mt-2 text-sm text-red-600">
              {state.errors.preferredDate[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-2 block text-sm font-medium text-slate-700">
            Horario preferido
          </label>

          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            required
            aria-invalid={Boolean(state.errors?.preferredTime)}
            aria-describedby={state.errors?.preferredTime ? "preferredTime-error" : undefined}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />

          {state.errors?.preferredTime && (
            <p id="preferredTime-error" className="mt-2 text-sm text-red-600">
              {state.errors.preferredTime[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Comentarios
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          maxLength={500}
          placeholder="Cuéntanos brevemente cómo podemos ayudarte."
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
        />

        {state.errors?.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600">
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
        className="w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando solicitud..." : "Solicitar cita"}
      </button>
    </form>
  );
}
