interface StatCardProps {
  label: string;
  value: number;
  description?: string;
}

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{value}</p>

      {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
    </article>
  );
}
