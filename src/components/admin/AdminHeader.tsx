interface AdminHeaderProps {
  userName?: string | null;
}

export function AdminHeader({ userName }: AdminHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Panel administrativo</p>

          <p className="mt-1 font-semibold text-slate-950">{userName}</p>
        </div>
      </div>
    </header>
  );
}
