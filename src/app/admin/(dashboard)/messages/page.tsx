import Link from "next/link";

import { ContactMessageStatus } from "@/generated/prisma/client";

import { getContactMessages } from "@/features/contact/repositories/contactRepository";
import { getBusinessIdBySlug } from "@/features/businesses/repositories/businessRepository";

import { MessageStatusBadge } from "@/components/admin/MessageStatusBadge";

import { businessConfig } from "@/config/business";

interface MessagesPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function MessagesPage({ searchParams }: MessagesPageProps) {
  const params = await searchParams;

  const search = params.search?.trim() || undefined;

  const status = Object.values(ContactMessageStatus).includes(params.status as ContactMessageStatus)
    ? (params.status as ContactMessageStatus)
    : undefined;

  const businessId = await getBusinessIdBySlug(businessConfig.slug);

  const contactMessages = await getContactMessages({
    businessId,
    search,
    status,
  });

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">Mensajes</h1>

          <p className="mt-2 text-slate-600">Consulta y administra los mensajes recibidos.</p>
        </div>

        <form
          method="get"
          className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_220px_auto]"
        >
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Buscar por nombre, teléfono, correo o asunto"
            className="rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />

          <select
            name="status"
            defaultValue={status ?? ""}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Todos los estados</option>

            <option value="UNREAD">Nuevos</option>

            <option value="READ">Leídos</option>

            <option value="ARCHIVED">Archivados</option>
          </select>

          <button
            type="submit"
            className="rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Filtrar
          </button>
        </form>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {contactMessages.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-slate-500">
              No se encontraron mensajes.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Nombre
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Teléfono
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Asunto
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Estado
                    </th>

                    <th className="px-6 py-4" />
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {contactMessages.map((contactMessage) => (
                    <tr key={contactMessage.id} className="hover:bg-slate-50">
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">{contactMessage.name}</p>

                        {contactMessage.email && (
                          <p className="mt-1 text-sm text-slate-500">{contactMessage.email}</p>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">
                          {contactMessage.phone || "Sin teléfono"}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-950">
                          {contactMessage.subject || "Sin asunto"}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <MessageStatusBadge status={contactMessage.status} />
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          href={`/admin/messages/${contactMessage.id}`}
                          className="text-sm font-semibold text-brand-700 hover:text-brand-900"
                        >
                          Ver detalle
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
