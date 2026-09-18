import { useEffect } from "react";
import { ArrowUpRight, BarChart3, Megaphone, Search, Share2 } from "lucide-react";
import { ServicesSection } from "../components/ServicesSection/ServicesSection";

const growthAreas = [
  {
    icon: Search,
    number: "01",
    title: "Search Visibility",
    text: "SEO strategy, keyword research, on-page improvements, and useful content that help your business get discovered.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Paid Advertising",
    text: "Google Ads, Meta Ads, Facebook Ads, and Instagram Ads planned around the audience and action you want.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Social Media Growth",
    text: "Consistent social media marketing that builds trust, keeps your brand visible, and supports your wider digital strategy.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Measurable Improvement",
    text: "Clear digital foundations and practical analytics so you can understand what is working and improve with confidence.",
  },
];

export const ServicesPage = () => {
  useEffect(() => {
    document.title = "Web Development & Digital Marketing Services | Farman Khan";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Explore Farman Khan's web development, WordPress, SEO, Google Ads, Meta Ads, and social media marketing services for growing businesses.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary">Services for digital growth</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">What I <span className="text-gradient-primary">do.</span></h1>
          </div>
          <p className="border-l border-primary/30 pl-6 text-lg leading-relaxed text-muted-foreground">I combine web development, WordPress, SEO, Google Ads, Meta Ads, and social media marketing to help businesses look professional and grow online.</p>
        </div>
      </section>

      <ServicesSection />

      <section className="w-full border-y border-foreground/10 bg-foreground/[0.02] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">4+ growth areas</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">More than a website.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">A strong online presence needs the right foundation, visibility, reach, and consistent improvement.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {growthAreas.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="rounded-[1.75rem] border border-foreground/10 bg-background/80 p-7 transition-colors hover:border-primary/40">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                  <span className="text-3xl font-black text-primary/25">{number}</span>
                </div>
                <h3 className="mt-7 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] bg-primary px-8 py-12 text-primary-foreground md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Have a project in mind?</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-5xl">Let&apos;s choose the right growth path.</h2>
            </div>
            <a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3 font-bold text-foreground hover:-translate-y-0.5 transition-transform">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  );
};
