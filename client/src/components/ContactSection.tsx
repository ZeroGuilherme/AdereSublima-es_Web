import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const openWhatsApp = (source = 'contact') => {
    window.open(`https://wa.link/97omph?text=Olá! Vim através do site (${source}) e gostaria de fazer um orçamento.`, '_blank');
    console.log(`WhatsApp aberto via ${source}`);
  };

  return (
    <section className="py-20 bg-background" id="contato">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
          Vamos conversar
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Pronto para personalizar?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e solicite seu orçamento sem compromisso. 
          Estamos prontos para transformar suas ideias em produtos únicos!
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
            Resposta em minutos
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
            Atendimento personalizado
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            Orçamento gratuito
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary border-primary-border text-primary-foreground px-8 py-4 text-lg font-semibold min-h-[44px]"
            onClick={() => openWhatsApp('contact-primary')}
            data-testid="button-whatsapp-contact"
            aria-label="Abrir WhatsApp para falar conosco"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            Fale Conosco no WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="min-h-[44px]"
            onClick={() => openWhatsApp('contact-secondary')}
            data-testid="button-contact-secondary"
            aria-label="Entrar em contato via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            Entre em Contato
          </Button>
        </div>

        {/* Company Info */}
        <div className="border-t pt-8">
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span data-testid="text-company-name">Adere Sublimações</span>
            </div>
            <p className="text-sm" data-testid="text-copyright">
              © 2024 Adere Sublimações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}