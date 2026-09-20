import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Target, Workflow } from "lucide-react";
import { StrengthsSection } from "../components/StrengthsSection/StrengthsSection";
import { EcosystemSection } from "../components/EcosystemSection/EcosystemSection";

const principles = [
  {
    icon: Compass,
    label: "Vision",
    title: "Make good digital work accessible to growing businesses.",
    description: "I want every business to have a website and online presence that feels trustworthy, useful, and easy for customers to act on.",
  },
  {
    icon: Target,
    label: "Mission",
    title: "Turn ideas into visible, measurable digital growth.",
    description: "My mission is to combine web development, SEO, paid advertising, and social media strategy into practical solutions that create real momentum.",
  },
];

const approach = [
  { number: "01", title: "Understand", text: "I learn about your business, customers, goals, and the problem your digital presence needs to solve." },
  { number: "02", title: "Build", text: "I create responsive websites and marketing foundations that are clear, fast, and designed for real users." },
  { number: "03", title: "Improve", text: "I use SEO, analytics, Meta Ads, Google Ads, and ongoing learning to improve reach and results over time." },
];

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About Farman Khan | Web Developer & Digital Marketer";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn about Farman Khan, a Web Developer and Digital Marketer from Uttarakhand focused on WordPress, SEO, Google Ads, Meta Ads, and social media marketing.");
    window.scrollTo(0, 0);
  }, []);

  return <>
    <section className="max-w-7xl mx-auto w-full px-6 pt-24 pb-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary">About the developer</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Building digital experiences with <span className="text-gradient-primary">purpose.</span>
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="border-l border-primary/30 pl-6">
          <p className="text-lg leading-relaxed text-muted-foreground">I&apos;m Farman Khan, a Web Developer and Digital Marketer from Rudrapur, Uttarakhand. I help businesses build a stronger online presence through WordPress, SEO, Google Ads, Meta Ads, and social media marketing.</p>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">Work with me <ArrowUpRight className="h-4 w-4" /></a>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {principles.map(({ icon: Icon, label, title, description }, index) => (
          <motion.article key={label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="glass-panel rounded-[2rem] border border-foreground/10 p-8 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-7 w-7" /></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
            </div>
            <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="w-full border-y border-foreground/10 bg-foreground/[0.02] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">My approach</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Simple process. Strong foundation.</h2>
          </div>
          <Workflow className="hidden h-12 w-12 text-primary/50 md:block" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {approach.map((item) => (
            <article key={item.number} className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-7">
              <span className="text-4xl font-black text-primary/30">{item.number}</span>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <EcosystemSection />

    <StrengthsSection />

    <section className="max-w-7xl mx-auto w-full px-6 pb-24">
      <div className="rounded-[2rem] bg-primary px-8 py-12 text-primary-foreground md:px-12 md:py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Let&apos;s create something useful</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-5xl">Have a business idea or digital challenge?</h2>
          </div>
          <a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3 font-bold text-foreground hover:-translate-y-0.5 transition-transform">Let&apos;s talk <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  </>;
};
