export function createWhatsAppUrl(phone: string, message?: string) {
  const cleanPhone = phone.replace(/\D/g, "");

  const baseUrl = `https://wa.me/${cleanPhone}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
