import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Award, Heart } from "lucide-react";

const pillars = [
  {
    title: "Criação",
    description: "Transformamos suas ideias mais criativas em produtos únicos e personalizados.",
    icon: Lightbulb
  },
  {
    title: "Qualidade",
    description: "Utilizamos equipamentos de última geração para garantir a máxima qualidade em cada produto.",
    icon: Award
  },
  {
    title: "Paixão",
    description: "Nossa paixão pela criatividade e dedicação ao cliente fazem a diferença em cada projeto.",
    icon: Heart
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-background" id="sobre">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* About Text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sobre Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Na Adere Sublimações, somos especialistas em transformar suas ideias em produtos únicos e personalizados. 
            Com paixão pela criatividade e compromisso com a qualidade, utilizamos equipamentos de última geração para 
            garantir que cada peça seja uma obra de arte. Nossa missão é dar vida às suas ideias através da técnica de 
            sublimação, oferecendo produtos duráveis e de alta qualidade.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-elevate cursor-pointer transition-all duration-300"
                data-testid={`card-pillar-${pillar.title.toLowerCase()}`}
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}