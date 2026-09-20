import { motion } from "framer-motion";
import { Code2, Globe2, Megaphone, Users } from "lucide-react";
import { AnimatedCount } from "../motion/AnimatedCount";

const stats = [
  { icon: <Megaphone className="w-6 h-6" />, label: "Digital Services", value: "8+" },
  { icon: <Code2 className="w-6 h-6" />, label: "Digital Skills", value: "10+" },
  { icon: <Users className="w-6 h-6" />, label: "Learning Mindset", value: "100%" },
  { icon: <Globe2 className="w-6 h-6" />, label: "Based In", value: "India" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Building a stronger <span className="text-gradient-primary">digital presence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am Farman Khan, a Web Developer and Digital Marketer from Uttarakhand. I create responsive WordPress websites, improve search visibility with SEO, and build practical digital marketing strategies that help businesses reach more customers.
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between shadow-sm hover:shadow-lg">
                <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-foreground mb-1 tracking-tight">
                    <AnimatedCount value={stat.value} duration={1400} />
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


