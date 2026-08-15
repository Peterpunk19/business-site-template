import Link from "next/link";
import { notFound } from "next/navigation";

import { getAppointmentById } from "@/features/appointments/repositories/appointmentRepository";
import { updateAppointmentStatus } from "@/features/appointments/actions/updateAppointmentStatus";

import { AppointmentStatusBadge } from "@/components/admin/AppointmentStatusBadge";

import { getServiceName } from "@/lib/services";
import { formatDateObjectForMexico, formatTime } from "@/lib/date";

import {
  appointmentStatusTransitions,
  appointmentStatusLabels,
} from "@/features/appointments/domain/appointmentStatus";

interface AppointmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentDetailPage({ params }: AppointmentDetailPageProps) {
  const { id } = await params;

  const appointment = await getAppointmentById(id);

  if (!appointment) {
    notFound();
  }

  const availableStatuses = [
    appointment.status,
    ...appointmentStatusTransitions[appointment.status],
  ];

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/appointments"
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
        >
          ← Volver a citas
        </Link>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950">{appointment.name}</h1>

            <p className="mt-2 text-slate-600">Solicitud de cita</p>
          </div>

          <AppointmentStatusBadge status={appointment.status} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-950">Información de la cita</h2>

            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-slate-500">Servicio</dt>

                <dd className="mt-1 font-semibold text-slate-950">
                  {getServiceName(appointment.serviceId)}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">Fecha</dt>

                <dd className="mt-1 font-semibold text-slate-950">
                  {formatDateObjectForMexico(appointment.preferredDate)}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">Hora preferida</dt>

                <dd className="mt-1 font-semibold text-slate-950">
                  {formatTime(appointment.preferredTime)}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">Solicitud recibida</dt>

                <dd className="mt-1 font-semibold text-slate-950">
                  {formatDateObjectForMexico(appointment.createdAt)}
                </dd>
              </div>
            </dl>

            {appointment.message && (
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500">Comentarios</p>

                <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-700">
                  {appointment.message}
                </p>
              </div>
            )}
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-bold text-slate-950">Paciente</h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>

                  <a
                    href={`tel:${appointment.phone.replace(/\D/g, "")}`}
                    className="mt-1 block font-semibold text-brand-700 transition hover:text-brand-900"
                  >
                    {appointment.phone}
                  </a>
                </div>

                {appointment.email && (
                  <div>
                    <p className="text-sm text-slate-500">Correo</p>

                    <a
                      href={`mailto:${appointment.email}`}
                      className="mt-1 block break-all font-semibold text-brand-700 transition hover:text-brand-900"
                    >
                      {appointment.email}
                    </a>
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-bold text-slate-950">Cambiar estado</h2>

              <form action={updateAppointmentStatus} className="mt-5 space-y-4">
                <input type="hidden" name="id" value={appointment.id} />

                <select
                  name="status"
                  defaultValue={appointment.status}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  {availableStatuses.map((status) => (
                    <option key={status} value={status}>
                      {appointmentStatusLabels[status]}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  Guardar estado
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
