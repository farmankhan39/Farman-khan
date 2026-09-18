import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Search, Layout, TrendingUp, Code2, Smartphone, ShieldCheck } from "lucide-react";

const serviceCards = [
  {
    title: "Web Development",
    category: "FRONTEND & BACKEND",
    description: "Custom responsive websites built with high performance, modern UI/UX, and clean architecture.",
    icon: Code2,
    badge: "Popular",
  },
  {
    title: "Digital Marketing",
    category: "GROWTH & ADS",
    description: "Targeted Google Ads, Meta Ads, and social media campaigns designed to convert visitors into customers.",
    icon: Megaphone,
    badge: "High ROI",
  },
  {
    title: "WordPress Expertise",
    category: "CMS & E-COMMERCE",
    description: "Feature-rich WordPress sites, WooCommerce stores, and customized plugins tailored to your brand.",
    icon: Layout,
    badge: "Custom",
  },
  {
    title: "SEO Optimization",
    category: "SEARCH RANKING",
    description: "On-page and technical SEO strategies to boost search visibility and drive organic traffic.",
    icon: Search,
    badge: "Top Ranking",
  },
  {
    title: "Responsive Design",
    category: "MOBILE FIRST",
    description: "Seamless user experiences across smartphones, tablets, and desktop displays with smooth animations.",
    icon: Smartphone,
    badge: "UI/UX",
  },
  {
    title: "Conversion & Growth",
    category: "ANALYTICS & LEADS",
    description: "Data-driven marketing funnels and audience targeting to scale your business online rapidly.",
    icon: TrendingUp,
    badge: "Results",
  },
];

export const ScrollingServicesMarquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedCards = [...serviceCards, ...serviceCards];

  return (
    <section className="w-full py-16 bg-background relative overflow-hidden border-b border-foreground/10" aria-label="Services Scrolling Marquee">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm inline-block mb-3">
          Core Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Services & Digital Solutions
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
          Explore specialized services crafted to elevate your business online through modern web tech and strategic digital marketing.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="w-[300px] md:w-[350px] flex-shrink-0 rounded-3xl p-6 bg-card/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-primary">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Professional Execution
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingServicesMarquee;
