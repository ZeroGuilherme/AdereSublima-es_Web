import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <MobileBottomBar />
      {/* Safe area padding for mobile bottom bar */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </div>
  );
}