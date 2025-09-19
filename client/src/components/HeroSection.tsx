import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ArrowRight, ChevronRight, Menu, X, MessageCircle, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import logoAdere from "@assets/logo-adere-removebg-preview.jpg_1758233540978.png";
import backgroundVideo from "@assets/fundo_1758233569956.mp4";
import { cn } from "@/lib/utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const menuItems = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Contato', href: '#contato' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuState(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.link/97omph?text=Olá! Vim através do site e gostaria de fazer um orçamento.', '_blank');
  };

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-4 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="home"
                className="flex items-center space-x-2">
                <img 
                  src={logoAdere} 
                  alt="Adere Sublimações" 
                  className="h-12 sm:h-16 object-contain"
                />
              </button>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      className="text-muted-foreground hover:text-foreground block duration-150">
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.href.replace('#', ''))}
                        className="text-muted-foreground hover:text-foreground block duration-150">
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}>
                  <span>Ver Portfólio</span>
                </Button>
                <Button
                  onClick={openWhatsApp}
                  size="sm"
                  className={cn(isScrolled ? 'lg:inline-flex' : 'bg-primary border-primary-border')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = (source = 'hero') => {
    window.open(`https://wa.link/97omph?text=Olá! Vim através do site (${source}) e gostaria de fazer um orçamento.`, '_blank');
  };

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(210_70%_50%/.08)_0,hsl(210_70%_50%/.02)_50%,hsl(210_70%_50%/0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsl(210_70%_50%/.06)_0,hsl(210_70%_50%/.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsl(210_70%_50%/.04)_0,hsl(210_70%_50%/.02)_80%,transparent_100%)]" />
        </div>
        <section className="relative">
          <div className="relative pt-24 md:pt-36">
            {/* Background Video */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-x-0 top-0 -z-20 w-full h-full object-cover opacity-60"
                style={{
                  animation: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : undefined
                }}
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            </AnimatedGroup>
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <button
                    onClick={() => scrollToPortfolio()}
                    className="hover:bg-background dark:hover:border-t-border bg-muted/80 backdrop-blur-sm group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-xs sm:text-sm">Veja nossos trabalhos em ação</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </button>
        
                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                    Transforme suas ideias em <span className="text-primary">realidade</span>
                  </h1>
                  <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg text-muted-foreground px-4">
                    Personalização de alta qualidade para canecas, camisetas, almofadas e muito mais. 
                    Sua criatividade não tem limites com a Adere Sublimações!
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-2 md:flex-row px-4">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-6 sm:px-8 text-sm sm:text-base bg-primary border-primary-border text-primary-foreground w-full sm:w-auto"
                      onClick={() => openWhatsApp('hero-primary')}
                      aria-label="Fazer orçamento via WhatsApp">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span className="text-nowrap">Faça seu orçamento</span>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-4 sm:px-5 text-white hover:bg-white/20 w-full sm:w-auto"
                    onClick={scrollToPortfolio}
                    aria-label="Ver portfólio de trabalhos">
                    <Eye className="w-5 h-5 mr-2" />
                    <span className="text-nowrap">Ver Portfólio</span>
                  </Button>
                </AnimatedGroup>

                {/* Trust indicator */}
                <div className="mt-6 sm:mt-8 text-center px-4">
                  <p className="text-white/70 text-xs sm:text-sm">
                    ⚡ Resposta rápida no WhatsApp • ✓ Orçamento sem compromisso
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}