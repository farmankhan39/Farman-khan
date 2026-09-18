import { useEffect, type ReactNode } from "react";
import type { Service } from "../components/ServicesSection/ServicesSection";

type PortfolioPageProps = { title: string; description: string; content: ReactNode };

export const PortfolioPage = ({ title, description, content }: PortfolioPageProps) => {
  useEffect(() => {
    document.title = `${title} | Farman Khan`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return <>
    <section className="max-w-7xl mx-auto w-full px-6 pt-24 pb-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">Farman Khan · India</p>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mt-5 leading-relaxed">{description}</p>
    </section>
    {content}
  </>;
};

export const ServicePage = ({ service }: { service: Service }) => (
  <PortfolioPage
    title={`${service.title} Services`}
    description={`${service.description} Contact Farman Khan for professional ${service.title.toLowerCase()} services in Uttarakhand and across India.`}
    content={
      <section className="max-w-7xl mx-auto w-full px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <article className="glass-panel rounded-[2rem] border border-foreground/10 p-8 md:p-12">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <service.icon className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Professional {service.title.toLowerCase()} for growing businesses</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.description} I focus on practical execution, clear communication, and measurable improvements to your online presence.</p>
            <a href="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/20">Start a project</a>
          </article>
          <aside className="rounded-[2rem] border border-primary/15 bg-primary/5 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Why work with me</p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>Business-focused strategy and execution</li>
              <li>Responsive, user-friendly digital experiences</li>
              <li>SEO-aware content and technical foundations</li>
              <li>Clear progress and practical next steps</li>
            </ul>
          </aside>
        </div>
      </section>
    }
  />
);