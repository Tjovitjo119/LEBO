import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105 hover:bg-[#128C7E]"
      aria-label="Contact Stay Radiant on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}
