import type { AppointmentStatus } from "@/generated/prisma/client";

interface AppointmentStatusBadgeProps {
  status: AppointmentStatus;
}

const labels: Record<AppointmentStatus, string> = {
  PENDING: "Pendiente",
  CONFIRMED: "Confirmada",
  CANCELLED: "Cancelada",
  COMPLETED: "Completada",
};

const styles: Record<AppointmentStatus, string> = {
  PENDING: "bg-amber-50 text-amber-700 ring-amber-600/20",

  CONFIRMED: "bg-blue-50 text-blue-700 ring-blue-600/20",

  CANCELLED: "bg-red-50 text-red-700 ring-red-600/20",

  COMPLETED: "bg-green-50 text-green-700 ring-green-600/20",
};

export function AppointmentStatusBadge({ status }: AppointmentStatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
