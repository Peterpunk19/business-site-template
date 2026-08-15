import Image from "next/image";

import { BusinessService } from "@/types/business";

interface ServiceCardProps {
  service: BusinessService;
}

export function ServiceCard({
                              service,
                            }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {service.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">
          {service.name}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {service.description}
        </p>

        <a
          href="#citas"
          className="mt-5 inline-flex text-sm font-semibold text-slate-900 hover:text-slate-600"
        >
          Solicitar información →
        </a>
      </div>
    </article>
  );
}