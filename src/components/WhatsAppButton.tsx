import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
      onClick={() => window.open(whatsappUrl, "_blank")}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
}
