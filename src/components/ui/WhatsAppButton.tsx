import { businessConfig } from "@/config/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton() {
  const whatsappUrl = createWhatsAppUrl(
    businessConfig.contact.whatsapp,
    `Hola, quisiera solicitar información sobre ${businessConfig.name}.`,
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
