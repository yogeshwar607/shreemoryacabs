import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  message = "Hi, I'd like to know more about your EV cab services.",
  className = ""
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Track WhatsApp click event in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: message,
        page_location: window.location.pathname,
        page_title: document.title
      });
    }

    const link = generateWhatsAppLink(message);
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
