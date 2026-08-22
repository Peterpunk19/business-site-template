import Link from "next/link";

import { getDashboardSummary } from "@/features/admin/repositories/dashboardRepository";

import { StatCard } from "@/components/admin/StatCard";
import { AppointmentStatusBadge } from "@/components/admin/AppointmentStatusBadge";
import { MessageStatusBadge } from "@/components/admin/MessageStatusBadge";

import { getServiceName } from "@/lib/services";
import { formatDateObjectForMexico, formatTime } from "@/lib/date";
import { getAnalyticsSummary } from "@/features/analytics/analytics.service";
import { AnalyticsSummary } from "@/features/analytics/components/AnalyticsSummary";

export default async function AdminPage() {
  const dashboard = await getDashboardSummary();
  const analytics = await getAnalyticsSummary();

  return (
    <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-600">Resumen de actividad del consultorio.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4">
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

        <div className="mt-10">
          <AnalyticsSummary analytics={analytics} />
        </div>

        <div className="mt-6 grid gap-5 xl:mt-8 xl:grid-cols-2 xl:gap-8">
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
              <div className="min-w-0">
                <h2 className="font-bold text-slate-950">Citas recientes</h2>

                <p className="mt-1 text-sm text-slate-500">Últimas solicitudes recibidas.</p>
              </div>

              <Link
                href="/admin/appointments"
                className="shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
              >
                Ver todas
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {dashboard.recentAppointments.length === 0 ? (
                <p className="px-5 py-8 text-sm text-slate-500 sm:px-6">
                  No hay solicitudes de cita.
                </p>
              ) : (
                dashboard.recentAppointments.map((appointment) => (
                  <Link
                    key={appointment.id}
                    href={`/admin/appointments/${appointment.id}`}
                    className="block px-5 py-5 transition hover:bg-slate-50 sm:px-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-950">{appointment.name}</p>

                        <p className="mt-1 break-words text-sm text-slate-600">
                          {getServiceName(appointment.serviceId)}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                          {formatDateObjectForMexico(appointment.preferredDate)}
                          {" · "}
                          {formatTime(appointment.preferredTime)}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <AppointmentStatusBadge status={appointment.status} />
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
              <div className="min-w-0">
                <h2 className="font-bold text-slate-950">Mensajes recientes</h2>

                <p className="mt-1 text-sm text-slate-500">Últimos contactos recibidos.</p>
              </div>

              <Link
                href="/admin/messages"
                className="shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
              >
                Ver todos
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {dashboard.recentMessages.length === 0 ? (
                <p className="px-5 py-8 text-sm text-slate-500 sm:px-6">No hay mensajes.</p>
              ) : (
                dashboard.recentMessages.map((message) => (
                  <Link
                    key={message.id}
                    href={`/admin/messages/${message.id}`}
                    className="block px-5 py-5 transition hover:bg-slate-50 sm:px-6"
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

                      <div className="shrink-0">
                        <MessageStatusBadge status={message.status} />
                      </div>
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
