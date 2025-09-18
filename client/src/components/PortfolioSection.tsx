import { Card, CardContent } from "@/components/ui/card";

// Import all portfolio assets
import image1 from "@assets/WhatsApp Image 2025-09-02 at 09.13.18_1758233621442.jpeg";
import image2 from "@assets/WhatsApp Image 2025-09-02 at 09.14.54_1758233621441.jpeg";
import image3 from "@assets/WhatsApp Image 2025-09-02 at 09.14.56_1758233621441.jpeg";
import video1 from "@assets/WhatsApp Video 2025-09-02 at 09.14.12_1758233621443.mp4";
import video2 from "@assets/WhatsApp Video 2025-09-02 at 09.20.40_1758233621440.mp4";
import video3 from "@assets/WhatsApp Video 2025-09-02 at 09.20.50_1758233621439.mp4";

const portfolioItems = [
  {
    id: 1,
    type: "image",
    src: image1,
    title: "Processo de impressão em alta qualidade",
    description: "Impressoras de grande formato para sublimação profissional"
  },
  {
    id: 2,
    type: "video",
    src: video1,
    title: "Personalização de camisetas esportivas", 
    description: "Equipamentos modernos para sublimação em tecidos"
  },
  {
    id: 3,
    type: "image",
    src: image2,
    title: "Materiais premium para sublimação",
    description: "Papéis e materiais de alta qualidade para resultados perfeitos"
  },
  {
    id: 4,
    type: "video",
    src: video2,
    title: "Equipamento TS100-1600",
    description: "Tecnologia avançada para projetos de grande escala"
  },
  {
    id: 5,
    type: "image",
    src: image3,
    title: "Produtos finalizados",
    description: "Resultado final dos nossos trabalhos de sublimação"
  },
  {
    id: 6,
    type: "video",
    src: video3,
    title: "Processo completo de sublimação",
    description: "Do início ao fim, veja como criamos seus produtos"
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-muted/30" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossos Trabalhos em Ação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              data-testid={`card-portfolio-${item.id}`}
            >
              <div className="relative aspect-video bg-muted">
                {item.type === "image" ? (
                  <img 
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-testid={`img-portfolio-${item.id}`}
                  />
                ) : (
                  <video 
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                    data-testid={`video-portfolio-${item.id}`}
                  />
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}