import Link from "next/link";

import { AppointmentStatus } from "@/generated/prisma/client";

import { getAppointments } from "@/features/appointments/repositories/appointmentRepository";

import { AppointmentStatusBadge } from "@/components/admin/AppointmentStatusBadge";

import { getServiceName } from "@/lib/services";
import { formatDateObjectForMexico } from "@/lib/date";

interface AppointmentsPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function AppointmentsPage({ searchParams }: AppointmentsPageProps) {
  const params = await searchParams;

  const search = params.search?.trim() || undefined;

  const status = Object.values(AppointmentStatus).includes(params.status as AppointmentStatus)
    ? (params.status as AppointmentStatus)
    : undefined;

  const appointments = await getAppointments({
    search,
    status,
  });

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">Citas</h1>

          <p className="mt-2 text-slate-600">Consulta y administra las solicitudes de cita.</p>
        </div>

        <form
          method="get"
          className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_220px_auto]"
        >
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Buscar por nombre, teléfono o correo"
            className="rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />

          <select
            name="status"
            defaultValue={status ?? ""}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Todos los estados</option>

            <option value="PENDING">Pendientes</option>

            <option value="CONFIRMED">Confirmadas</option>

            <option value="COMPLETED">Completadas</option>

            <option value="CANCELLED">Canceladas</option>
          </select>

          <button
            type="submit"
            className="rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Filtrar
          </button>
        </form>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {appointments.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-slate-500">
              No se encontraron citas.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Paciente
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Servicio
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Fecha
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Estado
                    </th>

                    <th className="px-6 py-4" />
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-slate-50">
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">{appointment.name}</p>

                        <p className="mt-1 text-sm text-slate-500">{appointment.phone}</p>

                        {appointment.email && (
                          <p className="mt-1 text-sm text-slate-500">{appointment.email}</p>
                        )}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-700">
                        {getServiceName(appointment.serviceId)}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-700">
                        {formatDateObjectForMexico(appointment.preferredDate)}

                        <p className="mt-1 text-slate-500">{appointment.preferredTime}</p>
                      </td>

                      <td className="px-6 py-5">
                        <AppointmentStatusBadge status={appointment.status} />
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          href={`/admin/appointments/${appointment.id}`}
                          className="text-sm font-semibold text-brand-700 hover:text-brand-900"
                        >
                          Ver detalle
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
