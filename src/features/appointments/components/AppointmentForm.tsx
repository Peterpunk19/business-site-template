"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { createAppointment } from "@/features/appointments/actions/createAppointment";
import type { AppointmentFormState } from "@/features/appointments/types/appointment";
import { services } from "@/config/services";
import { trackEvent } from "@/lib/analytics";

const initialState: AppointmentFormState = {
  success: false,
  tracked: false,
};

interface AppointmentFormProps {
  minDate: string;
  maxDate: string;
}

export function AppointmentForm({ minDate, maxDate }: AppointmentFormProps) {
  const searchParams = useSearchParams();

  const requestedService = searchParams.get("service");

  const selectedService = services.find((service) => service.id === requestedService);

  const [state, formAction, pending] = useActionState(createAppointment, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && state.tracked) {
      trackEvent("appointment_submit", {
        location: "appointment_form",
        service: state.service,
      });
    }

    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success, state.tracked, state.service]);

  return (
    <>
      {selectedService && (
        <div className="mb-6 rounded-2xl border border-brand-100 bg-brand-50 p-4">
          <p className="text-sm font-medium text-brand-700">Servicio seleccionado</p>

          <p className="mt-1 font-semibold text-slate-950">{selectedService.name}</p>
        </div>
      )}

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
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
                event.currentTarget.value = event.currentTarget.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
              }}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
              autoComplete="email"
              aria-invalid={Boolean(state.errors?.email)}
              aria-describedby={state.errors?.email ? "email-error" : undefined}
              placeholder="correo@ejemplo.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
            defaultValue={selectedService?.id ?? ""}
            aria-invalid={Boolean(state.errors?.service)}
            aria-describedby={state.errors?.service ? "service-error" : undefined}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
            <label
              htmlFor="preferredDate"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Fecha preferida
            </label>

            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              required
              min={minDate}
              max={maxDate}
              aria-invalid={Boolean(state.errors?.preferredDate)}
              aria-describedby={state.errors?.preferredDate ? "preferredDate-error" : undefined}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />

            {state.errors?.preferredDate && (
              <p id="preferredDate-error" className="mt-2 text-sm text-red-600">
                {state.errors.preferredDate[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Horario preferido
            </label>

            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              required
              aria-invalid={Boolean(state.errors?.preferredTime)}
              aria-describedby={state.errors?.preferredTime ? "preferredTime-error" : undefined}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
            maxLength={500}
            aria-invalid={Boolean(state.errors?.message)}
            aria-describedby={state.errors?.message ? "message-error" : undefined}
            placeholder="Comentarios adicionales sobre tu solicitud. Evita incluir información médica sensible."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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

        <p className="text-xs leading-5 text-slate-500">
          Al enviar este formulario aceptas el tratamiento de tus datos conforme a nuestro{" "}
          <a
            href="/aviso-de-privacidad"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            Aviso de Privacidad
          </a>
          .
        </p>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Enviando solicitud..." : "Solicitar cita"}
        </button>
      </form>
    </>
  );
}
