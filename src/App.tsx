import { useState, useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import { LaunchIntro } from "./components/LaunchIntro/LaunchIntro";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { EcosystemSection } from "./components/EcosystemSection/EcosystemSection";
import { ServicesSection, services } from "./components/ServicesSection/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { StrengthsSection } from "./components/StrengthsSection/StrengthsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { PortfolioPage, ServicePage } from "./pages/PortfolioPages";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp/FloatingWhatsApp";
import { getCleanPath, navigateTo } from "./utils/navigation";

function App() {
  const [path, setPath] = useState(getCleanPath());

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(getCleanPath());
    };

    window.addEventListener("popstate", handleLocationChange);

    // Global interceptor for relative internal links
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external or specialized links
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        target.getAttribute("download") !== null ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // Handle in-page anchors
      if (href.startsWith("#")) {
        e.preventDefault();
        navigateTo(href);
        return;
      }

      // Handle internal SPA routes
      if (href.startsWith("/")) {
        e.preventDefault();
        navigateTo(href);
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <LaunchIntro />
      <Header currentPath={path} />
      <main className="w-full flex flex-col pt-10 border-none">
        {path === "/about" && <AboutPage />}
        {path === "/services" && <ServicesPage />}
        {path === "/projects" && (
          <PortfolioPage
            title="Web Development Projects"
            description="Explore Farman Khan's portfolio of WordPress websites, SEO projects, digital marketing campaigns, and responsive web experiences."
            content={<ProjectsSection />}
          />
        )}
        {path === "/contact" && (
          <PortfolioPage
            title="Contact Farman Khan"
            description="Get in touch with Farman Khan for website development, WordPress, SEO, and digital marketing projects."
            content={<ContactSection />}
          />
        )}
        {path.startsWith("/services/") && (() => {
          const service = services.find((item) => item.slug === path.slice("/services/".length));
          return service ? <ServicePage service={service} /> : <ServicesPage />;
        })()}
        {path === "/" && (
          <>
            <HeroSection />
            <AboutSection />
            <EcosystemSection />
            <ServicesSection />
            <ProjectsSection />
            <StrengthsSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

