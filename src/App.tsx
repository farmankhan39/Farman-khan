import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServicesSection, services } from "./components/ServicesSection/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { StrengthsSection } from "./components/StrengthsSection/StrengthsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { PortfolioPage, ServicePage } from "./pages/PortfolioPages";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";

function App() {
  const getPath = () => {
    // Check if redirected via 404.html query parameter (?p=/about)
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (p) {
      window.history.replaceState(null, "", window.location.pathname + p);
      return p.replace(/\/$/, "") || "/";
    }
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    // If hosted on GitHub pages under /Farman-khan/
    if (currentPath.toLowerCase().endsWith("/farman-khan")) {
      return "/";
    }
    // Remove repo name prefix if present
    const cleanPath = currentPath.replace(/^\/Farman-khan/i, "") || "/";
    return cleanPath;
  };

  const path = getPath();

  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col pt-10 border-none">
        {path === "/about" && <AboutPage />}
        {path === "/services" && <ServicesPage />}
        {path === "/projects" && <PortfolioPage title="Web Development Projects" description="Explore Farman Khan's portfolio of WordPress websites, SEO projects, digital marketing campaigns, and responsive web experiences." content={<ProjectsSection />} />}
        {path === "/contact" && <PortfolioPage title="Contact Farman Khan" description="Get in touch with Farman Khan for website development, WordPress, SEO, and digital marketing projects." content={<ContactSection />} />}
        {path.startsWith("/services/") && (() => {
          const service = services.find((item) => item.slug === path.slice("/services/".length));
          return service ? <ServicePage service={service} /> : null;
        })()}
        {path === "/" && <><HeroSection /><AboutSection /><ServicesSection /><ProjectsSection /><StrengthsSection /><TestimonialsSection /><ContactSection /></>}
      </main>
      <Footer />
    </div>
  );
}

export default App;

