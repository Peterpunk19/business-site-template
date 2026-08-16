import Link from "next/link";
import { notFound } from "next/navigation";

import { getAppointmentById } from "@/features/appointments/repositories/appointmentRepository";
import { updateAppointmentStatus } from "@/features/appointments/actions/updateAppointmentStatus";

import {
  appointmentStatusLabels,
  appointmentStatusTransitions,
} from "@/features/appointments/domain/appointmentStatus";

import { AppointmentStatusBadge } from "@/components/admin/AppointmentStatusBadge";

import { getServiceName } from "@/lib/services";
import { formatDateObjectForMexico, formatTime } from "@/lib/date";

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

  const canChangeStatus = appointmentStatusTransitions[appointment.status].length > 0;

  return (
    <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/appointments"
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
        >
          ← Volver a citas
        </Link>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="break-words text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {appointment.name}
            </h1>

            <p className="mt-2 text-slate-600">Solicitud de cita</p>
          </div>

          <div className="shrink-0">
            <AppointmentStatusBadge status={appointment.status} />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:mt-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold text-slate-950">Información de la cita</h2>

            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-slate-500">Servicio</dt>

                <dd className="mt-1 break-words font-semibold text-slate-950">
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

                <p className="mt-2 break-words whitespace-pre-wrap leading-7 text-slate-700">
                  {appointment.message}
                </p>
              </div>
            )}
          </section>

          <div className="space-y-5 lg:space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-950">Paciente</h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Nombre</p>

                  <p className="mt-1 break-words font-semibold text-slate-950">
                    {appointment.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>

                  <a
                    href={`tel:${appointment.phone.replace(/\D/g, "")}`}
                    className="mt-1 block break-words font-semibold text-brand-700 transition hover:text-brand-900"
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

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-950">Estado de la cita</h2>

              {canChangeStatus ? (
                <>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Actualiza el estado según el seguimiento de la cita.
                  </p>

                  <form action={updateAppointmentStatus} className="mt-5 space-y-4">
                    <input type="hidden" name="id" value={appointment.id} />

                    <select
                      name="status"
                      defaultValue={appointment.status}
                      className="
                        w-full
                        rounded-xl
                        border border-slate-200
                        bg-white
                        px-4 py-3
                        text-base
                        text-slate-900
                        outline-none
                        transition
                        focus:border-brand-500
                        focus:ring-2
                        focus:ring-brand-100
                      "
                    >
                      {availableStatuses.map((status) => (
                        <option key={status} value={status}>
                          {appointmentStatusLabels[status]}
                        </option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="
                        w-full
                        rounded-xl
                        bg-brand-700
                        px-5 py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-brand-800
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-brand-600
                        focus-visible:ring-offset-2
                      "
                    >
                      Guardar estado
                    </button>
                  </form>
                </>
              ) : (
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">
                    Esta cita está marcada como{" "}
                    <strong className="font-semibold text-slate-900">
                      {appointmentStatusLabels[appointment.status]}
                    </strong>
                    .
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    No hay más cambios de estado disponibles.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
