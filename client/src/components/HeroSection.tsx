import { Button } from "@/components/ui/button";
import { MessageCircle, Eye } from "lucide-react";
import logoAdere from "@assets/logo-adere-removebg-preview.jpg_1758233540978.png";
import backgroundVideo from "@assets/fundo_1758233569956.mp4";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
    console.log('Navegando para portfólio');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!', '_blank');
    console.log('Abrindo WhatsApp para orçamento');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoAdere} 
            alt="Adere Sublimações" 
            className="h-32 md:h-40 mx-auto object-contain"
            data-testid="img-logo"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Transforme suas ideias<br />
          <span className="text-primary">em realidade</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          Personalização de alta qualidade para canecas, camisetas, almofadas e muito mais. 
          Sua criatividade não tem limites com a Adere Sublimações!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary border-primary-border hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            onClick={openWhatsApp}
            data-testid="button-quote"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Faça seu orçamento
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg font-semibold"
            onClick={scrollToPortfolio}
            data-testid="button-portfolio"
          >
            <Eye className="w-5 h-5 mr-2" />
            Ver Portfólio
          </Button>
        </div>
      </div>
    </section>
  );
}