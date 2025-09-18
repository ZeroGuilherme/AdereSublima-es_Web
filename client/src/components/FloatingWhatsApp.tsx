import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);

  const openWhatsApp = () => {
    window.open('https://wa.link/97omph', '_blank');
    console.log('WhatsApp flutuante acionado');
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    console.log('WhatsApp flutuante fechado');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* WhatsApp Button */}
        <Button
          size="icon"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={openWhatsApp}
          data-testid="button-floating-whatsapp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Fale conosco no WhatsApp!
            <div className="absolute top-full right-4 border-4 border-transparent border-t-foreground"></div>
          </div>
        </div>

        {/* Close button (subtle) */}
        <button
          onClick={handleClose}
          className="absolute -top-1 -right-1 w-5 h-5 bg-muted-foreground text-background rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center hover:bg-foreground"
          data-testid="button-close-whatsapp"
        >
          ×
        </button>
      </div>
    </div>
  );
}