export function generateWhatsAppLink(message: string): string {
  const phoneNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateBookingMessage(
  vehicleType: string,
  route: string,
  date?: string
): string {
  const dateStr = date ? ` on ${date}` : '';
  return `Hi, I'd like to book a ${vehicleType} for ${route}${dateStr}. Please provide availability and pricing.`;
}

export function generateQuoteMessage(vehicleType: string): string {
  return `Hi, I'd like to get a quote for ${vehicleType}. Could you please share the details and pricing?`;
}
