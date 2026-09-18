import { motion } from "framer-motion";
import { Code2, Palette, Cpu, Search, Megaphone, Share2 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

export type Service = {
  icon: typeof Code2;
  title: string;
  slug: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    slug: "web-development",
    title: "Web Development",
    description: "End-to-end web applications built with modern frameworks and highly scalable backend architectures.",
  },
  {
    icon: Palette,
    slug: "ui-ux-design",
    title: "UI/UX Architecture",
    description: "Designing intuitive, accessible, and stunning interfaces that prioritize user experience and conversion.",
  },
  {
    icon: Cpu,
    slug: "performance-optimization",
    title: "Performance Optimization",
    description: "Auditing and supercharging existing codebases for lighting-fast load times and seamless interactions.",
  },
  {
    icon: Search,
    slug: "seo",
    title: "SEO / Search Engine Optimization",
    description: "Improving website visibility through keyword research, on-page SEO, technical improvements, and search-focused content.",
  },
  {
    icon: Megaphone,
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Creating and optimizing Facebook and Instagram ad campaigns to reach the right audience and generate quality leads.",
  },
  {
    icon: Share2,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Planning content, improving brand visibility, and building consistent social media growth across the platforms your customers use.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Web development, SEO, Google Ads, Meta Ads, and social media marketing that help businesses grow online.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.a
              key={i}
              href={`/services/${service.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <MagicCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80"
                gradientSize={280}
                gradientColor="rgba(139, 92, 246, 0.12)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Consistent Icon Styling with signature primary color */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
