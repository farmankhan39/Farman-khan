import { motion } from "framer-motion";
import { BarChart3, Globe2, Megaphone, Search, Share2, Smartphone, Workflow } from "lucide-react";

const strengths = [
  { icon: Globe2, title: "Web Development", description: "Modern, responsive websites built around your business goals and audience." },
  { icon: Workflow, title: "WordPress", description: "Fast, polished WordPress websites that are easy to manage and ready to grow." },
  { icon: Search, title: "SEO", description: "On-page and off-page SEO work that makes your website easier to discover." },
  { icon: Megaphone, title: "Digital Marketing", description: "Clear marketing strategies that turn attention into meaningful enquiries." },
  { icon: BarChart3, title: "Google Ads", description: "Focused campaigns designed to reach the right people at the right time." },
  { icon: Megaphone, title: "Meta Ads", description: "Facebook and Instagram advertising focused on awareness, leads, and measurable business growth." },
  { icon: Share2, title: "Social Media Marketing", description: "Consistent content and platform strategy that builds trust and keeps your brand visible." },
  { icon: Smartphone, title: "Responsive Design", description: "Consistent experiences across phones, tablets, and desktop screens." },
];

export const StrengthsSection = () => (
  <section id="strengths" className="max-w-7xl mx-auto px-6 py-24">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        What I <span className="text-gradient-primary">Bring</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl">Practical skills to help your business look professional, get found online, and grow with confidence.</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {strengths.map(({ icon: Icon, title, description }, index) => (
        <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }}>
          <div className="glass-panel h-full p-7 rounded-[2rem] border border-border/80 bg-card/80 hover:border-primary/50 hover:bg-card/95 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);