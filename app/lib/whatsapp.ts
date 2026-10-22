export const WHATSAPP_PHONE = "5511945053590";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, vim pelo site, gostaria de saber mais informações sobre aluguel de poltronas";

export function getWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = WHATSAPP_PHONE
): string {
  const encodedText = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}`;
}
