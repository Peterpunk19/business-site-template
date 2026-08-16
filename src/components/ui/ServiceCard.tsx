import Image from "next/image";

import type { BusinessService } from "@/types/business";

interface ServiceCardProps {
  service: BusinessService;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPromotionDate(value: string) {
  const date = new Date(`${value}T12:00:00`);

  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function ServiceCard({ service }: ServiceCardProps) {
  const hasPromotion =
    service.promotionalPrice !== undefined ||
    service.promotionLabel !== undefined ||
    service.promotionDescription !== undefined;

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-slate-200/60
        ${service.featured ? "border-brand-200 ring-1 ring-brand-100" : "border-slate-100"}
      `}
    >
      {service.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.imageAlt || service.name}
            fill
            sizes="
              (min-width: 1024px) 33vw,
              (min-width: 640px) 50vw,
              100vw
            "
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          {hasPromotion && (
            <div className="absolute left-4 top-4">
              <span className="inline-flex rounded-full bg-brand-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                {service.promotionLabel ?? "Promoción"}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">{service.name}</h3>

        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>

        {hasPromotion && (
          <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/70 p-4">
            {service.price !== undefined && service.promotionalPrice !== undefined && (
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm text-slate-500 line-through">
                  {formatCurrency(service.price)}
                </span>

                <span className="text-2xl font-bold text-brand-800">
                  {formatCurrency(service.promotionalPrice)}
                </span>
              </div>
            )}

            {service.price === undefined && service.promotionalPrice !== undefined && (
              <p className="text-2xl font-bold text-brand-800">
                {formatCurrency(service.promotionalPrice)}
              </p>
            )}

            {service.promotionDescription && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.promotionDescription}
              </p>
            )}

            {service.promotionValidUntil && (
              <p className="mt-2 text-xs font-medium text-brand-800">
                Válida hasta el {formatPromotionDate(service.promotionValidUntil)}
              </p>
            )}
          </div>
        )}

        <a
          href="#citas"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-brand-700
            transition
            hover:text-brand-900
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand-600
            focus-visible:ring-offset-2
          "
        >
          Solicitar cita
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
