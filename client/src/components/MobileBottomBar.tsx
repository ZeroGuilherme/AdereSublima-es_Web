import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function MobileBottomBar() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.link/97omph?text=Olá! Vim através do site (mobile-bottom) e gostaria de fazer um orçamento.', '_blank');
    console.log('WhatsApp aberto via mobile bottom bar');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Voltando ao topo');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-40 md:hidden">
      <div className="flex items-center justify-center p-4 pb-safe">
        <div className="flex items-center gap-3">
          {showBackToTop && (
            <Button
              size="sm"
              variant="outline"
              onClick={scrollToTop}
              className="min-h-[44px] px-4"
              data-testid="button-back-to-top"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </Button>
          )}
          <Button
            size="lg"
            className="bg-primary border-primary-border text-primary-foreground px-8 min-h-[44px] flex-1 max-w-xs"
            onClick={openWhatsApp}
            data-testid="button-mobile-bottom-whatsapp"
            aria-label="Abrir WhatsApp para contato"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}