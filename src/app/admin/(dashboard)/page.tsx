import Link from "next/link";

import { getDashboardSummary } from "@/features/admin/repositories/dashboardRepository";

import { StatCard } from "@/components/admin/StatCard";
import { AppointmentStatusBadge } from "@/components/admin/AppointmentStatusBadge";
import { MessageStatusBadge } from "@/components/admin/MessageStatusBadge";

import { getServiceName } from "@/lib/services";
import { formatDateObjectForMexico } from "@/lib/date";

export default async function AdminPage() {
  const dashboard = await getDashboardSummary();

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">Dashboard</h1>

          <p className="mt-2 text-slate-600">Resumen de actividad del consultorio.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Citas pendientes"
            value={dashboard.pendingAppointments}
            description="Esperando confirmación"
          />

          <StatCard label="Total de citas" value={dashboard.totalAppointments} />

          <StatCard
            label="Mensajes nuevos"
            value={dashboard.unreadMessages}
            description="Sin leer"
          />

          <StatCard label="Total de mensajes" value={dashboard.totalMessages} />
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="font-bold text-slate-950">Citas recientes</h2>

                <p className="mt-1 text-sm text-slate-500">Últimas solicitudes recibidas.</p>
              </div>

              <Link
                href="/admin/appointments"
                className="text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Ver todas
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {dashboard.recentAppointments.length === 0 ? (
                <p className="px-6 py-8 text-sm text-slate-500">No hay solicitudes de cita.</p>
              ) : (
                dashboard.recentAppointments.map((appointment) => (
                  <Link
                    key={appointment.id}
                    href={`/admin/appointments/${appointment.id}`}
                    className="block px-6 py-5 transition hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-950">{appointment.name}</p>

                        <p className="mt-1 text-sm text-slate-600">
                          {getServiceName(appointment.serviceId)}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                          {formatDateObjectForMexico(appointment.preferredDate)}
                          {" · "}
                          {appointment.preferredTime}
                        </p>
                      </div>

                      <AppointmentStatusBadge status={appointment.status} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="font-bold text-slate-950">Mensajes recientes</h2>

                <p className="mt-1 text-sm text-slate-500">Últimos contactos recibidos.</p>
              </div>

              <Link
                href="/admin/messages"
                className="text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Ver todos
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {dashboard.recentMessages.length === 0 ? (
                <p className="px-6 py-8 text-sm text-slate-500">No hay mensajes.</p>
              ) : (
                dashboard.recentMessages.map((message) => (
                  <Link
                    key={message.id}
                    href={`/admin/messages/${message.id}`}
                    className="block px-6 py-5 transition hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-950">{message.name}</p>

                        <p className="mt-1 truncate text-sm text-slate-600">
                          {message.subject || "Sin asunto"}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                          {formatDateObjectForMexico(message.createdAt)}
                        </p>
                      </div>

                      <MessageStatusBadge status={message.status} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
