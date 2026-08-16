import { AdminMobileNavigation } from "@/components/admin/AdminMobileNavigation";

interface AdminHeaderProps {
  userName?: string | null;
}

export function AdminHeader({ userName }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <AdminMobileNavigation />

          <div className="min-w-0">
            <p className="text-xs text-slate-500 sm:text-sm">Panel administrativo</p>

            <p className="truncate font-semibold text-slate-950">{userName}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
