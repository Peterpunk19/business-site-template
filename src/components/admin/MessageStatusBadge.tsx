import type { ContactMessageStatus } from "@/generated/prisma/client";

interface MessageStatusBadgeProps {
  status: ContactMessageStatus;
}

const labels: Record<ContactMessageStatus, string> = {
  UNREAD: "Nuevo",
  READ: "Leído",
  ARCHIVED: "Archivado",
};

const styles: Record<ContactMessageStatus, string> = {
  UNREAD: "bg-brand-50 text-brand-700 ring-brand-600/20",

  READ: "bg-slate-100 text-slate-700 ring-slate-500/20",

  ARCHIVED: "bg-slate-50 text-slate-500 ring-slate-400/20",
};

export function MessageStatusBadge({ status }: MessageStatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
