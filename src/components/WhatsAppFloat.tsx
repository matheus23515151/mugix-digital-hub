import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "556281540306";
    const message = "Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20MugiX";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;