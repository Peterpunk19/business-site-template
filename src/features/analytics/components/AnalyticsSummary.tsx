import type { AnalyticsResult } from "../analytics.types";

type AnalyticsSummaryProps = {
  analytics: AnalyticsResult;
};

export function AnalyticsSummary({ analytics }: AnalyticsSummaryProps) {
  if (!analytics.enabled) {
    return null;
  }

  return (
    <section>
      <div>
        <p className="text-sm font-medium text-brand-700">Analítica</p>

        <h2 className="mt-1 text-xl font-bold text-slate-950">Últimos 30 días</h2>
      </div>

      {!analytics.available || !analytics.data ? (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">
            No fue posible cargar los datos de Google Analytics.
          </p>
        </div>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <MetricCard label="Usuarios" value={analytics.data.users} />

          <MetricCard label="Sesiones" value={analytics.data.sessions} />

          <MetricCard label="Vistas de página" value={analytics.data.pageViews} />
        </div>
      )}
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: number;
};

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
        {value.toLocaleString("es-MX")}
      </p>
    </article>
  );
}
