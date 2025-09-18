import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const openWhatsApp = () => {
    window.open('https://wa.link/97omph', '_blank');
    console.log('Abrindo WhatsApp para contato');
  };

  const openEmail = () => {
    window.open('mailto:contato@adersubimacoes.com.br?subject=Orçamento%20Sublimação', '_blank');
    console.log('Abrindo email para contato');
  };

  return (
    <section className="py-16 bg-background" id="contato">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Pronto para personalizar?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Entre em contato conosco e solicite seu orçamento sem compromisso. 
          Estamos prontos para transformar suas ideias em produtos únicos!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary border-primary-border text-primary-foreground px-8 py-4 text-lg font-semibold"
            onClick={openWhatsApp}
            data-testid="button-whatsapp-contact"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={openEmail}
            data-testid="button-email-contact"
          >
            <Mail className="w-5 h-5 mr-2" />
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