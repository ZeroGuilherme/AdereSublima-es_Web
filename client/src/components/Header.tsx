import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logoAdere from "@assets/logo-adere-removebg-preview.jpg_1758233540978.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    console.log(`Navegando para seção: ${sectionId}`);
  };

  const openWhatsApp = (source = 'header') => {
    window.open(`https://wa.link/97omph?text=Olá! Vim através do site (${source}) e gostaria de fazer um orçamento.`, '_blank');
    console.log(`WhatsApp aberto via ${source}`);
  };

  const navigationItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[60]"
        data-testid="link-skip-content"
      >
        Pular para o conteúdo
      </a>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b" role="banner">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover-elevate rounded-md p-2"
            data-testid="button-logo"
          >
            <img 
              src={logoAdere} 
              alt="Adere Sublimações" 
              className="h-8 object-contain"
            />
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Adere Sublimações
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" role="navigation">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => openWhatsApp('header')}
              className="bg-primary border-primary-border text-primary-foreground"
              data-testid="button-header-whatsapp"
              aria-label="Abrir WhatsApp para orçamento"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover-elevate p-2 rounded-md"
            data-testid="button-mobile-menu"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t" role="navigation">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t">
                <Button
                  onClick={() => openWhatsApp('mobile-header')}
                  className="w-full bg-primary border-primary-border text-primary-foreground"
                  data-testid="button-mobile-header-whatsapp"
                  aria-label="Abrir WhatsApp para orçamento"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}