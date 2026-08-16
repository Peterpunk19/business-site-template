import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getContactMessageById,
  markContactMessageAsRead,
} from "@/features/contact/repositories/contactRepository";

import { changeContactMessageStatus } from "@/features/contact/actions/updateContactMessageStatus";

import { MessageStatusBadge } from "@/components/admin/MessageStatusBadge";

import { formatDateObjectForMexico } from "@/lib/date";

interface ContactMessagesDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ContactMessagesDetailPage({
  params,
}: ContactMessagesDetailPageProps) {
  const { id } = await params;

  const contactMessage = await getContactMessageById(id);

  if (!contactMessage) {
    notFound();
  }

  let message = contactMessage;

  if (contactMessage.status === "UNREAD") {
    await markContactMessageAsRead(id);

    message = {
      ...contactMessage,
      status: "READ",
    };
  }

  return (
    <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/messages"
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
        >
          ← Volver a mensajes
        </Link>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="break-words text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {message.subject || "Sin asunto"}
            </h1>

            <p className="mt-2 text-slate-600">Mensaje de {message.name}</p>
          </div>

          <div className="shrink-0">
            <MessageStatusBadge status={message.status} />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:mt-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold text-slate-950">Información del mensaje</h2>

            <dl className="mt-6">
              <div>
                <dt className="text-sm text-slate-500">Mensaje recibido</dt>

                <dd className="mt-1 font-semibold text-slate-950">
                  {formatDateObjectForMexico(message.createdAt)}
                </dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-sm text-slate-500">Mensaje</p>

              <p className="mt-2 break-words whitespace-pre-wrap leading-7 text-slate-700">
                {message.message}
              </p>
            </div>
          </section>

          <div className="space-y-5 lg:space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-950">Datos de contacto</h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Nombre</p>

                  <p className="mt-1 break-words font-semibold text-slate-950">{message.name}</p>
                </div>

                {message.phone && (
                  <div>
                    <p className="text-sm text-slate-500">Teléfono</p>

                    <a
                      href={`tel:${message.phone.replace(/\D/g, "")}`}
                      className="mt-1 block break-words font-semibold text-brand-700 transition hover:text-brand-900"
                    >
                      {message.phone}
                    </a>
                  </div>
                )}

                {message.email && (
                  <div>
                    <p className="text-sm text-slate-500">Correo</p>

                    <a
                      href={`mailto:${message.email}`}
                      className="mt-1 block break-all font-semibold text-brand-700 transition hover:text-brand-900"
                    >
                      {message.email}
                    </a>
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-bold text-slate-950">Acciones</h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {message.status === "ARCHIVED"
                  ? "Restaura el mensaje si necesitas volver a trabajar con él."
                  : "Archiva el mensaje cuando ya no necesites tenerlo entre los mensajes activos."}
              </p>

              {message.status === "ARCHIVED" ? (
                <form action={changeContactMessageStatus} className="mt-5">
                  <input type="hidden" name="id" value={message.id} />

                  <input type="hidden" name="status" value="READ" />

                  <button
                    type="submit"
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Restaurar mensaje
                  </button>
                </form>
              ) : (
                <form action={changeContactMessageStatus} className="mt-5">
                  <input type="hidden" name="id" value={message.id} />

                  <input type="hidden" name="status" value="ARCHIVED" />

                  <button
                    type="submit"
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Archivar mensaje
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
