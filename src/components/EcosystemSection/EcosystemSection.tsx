import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Search, 
  Megaphone, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

export const EcosystemSection = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const pillars = [
    {
      title: "High-Performance Web",
      description: "Custom WordPress and modern responsive web apps engineered for speed, UX, and clean architecture.",
    },
    {
      title: "Targeted Search & SEO",
      description: "Technical SEO, keyword research, and on-page optimization designed to drive organic customer discovery.",
    },
    {
      title: "Paid Ads & Lead Gen",
      description: "Meta Ads and Google Ads campaigns structured to target the right audience and generate real business inquiries.",
    },
    {
      title: "End-to-End Execution",
      description: "Direct communication, agile iterations, and scalable solutions that keep your brand ahead.",
    },
  ];

  const nodes = [
    {
      id: 1,
      step: "01 ARCHITECTURE",
      title: "Web Development",
      subtitle: "Custom WordPress, React & responsive websites",
      badge: "100% Speed Index",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      icon: Code2,
      accent: "from-purple-500 to-sky-400",
      color: "#8b5cf6",
      position: "top-left",
    },
    {
      id: 2,
      step: "02 EXPERIENCE",
      title: "UI/UX & Design",
      subtitle: "Conversion-driven layouts and interactive aesthetics",
      badge: "High Conversion",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      icon: Palette,
      accent: "from-sky-400 to-indigo-500",
      color: "#38bdf8",
      position: "top-right",
    },
    {
      id: 3,
      step: "03 VISIBILITY",
      title: "Search Engine SEO",
      subtitle: "Keyword strategy, indexing & organic search ranking",
      badge: "Top Rankings",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      icon: Search,
      accent: "from-amber-400 to-orange-500",
      color: "#f59e0b",
      position: "bottom-left",
    },
    {
      id: 4,
      step: "04 GROWTH",
      title: "Ads & Marketing",
      subtitle: "Meta Ads, Google Ads & social growth pipelines",
      badge: "High ROI Leads",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      icon: Megaphone,
      accent: "from-emerald-400 to-teal-500",
      color: "#10b981",
      position: "bottom-right",
    },
  ];

  const bottomStats = [
    { value: "100%", label: "RESPONSIVE & FAST" },
    { value: "99.4%", label: "DELIVERY PRECISION" },
    { value: "24/7", label: "DIRECT SUPPORT" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Heading, Subtitle, Features & Bottom Stats */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Synergy</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Strategy, technology and <span className="text-gradient-primary">creative growth</span> in one partner.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              I do not treat web design, SEO, and paid advertising as disconnected silos. I build connected digital systems so your brand, website, and lead generation engine all perform together seamlessly.
            </p>
          </motion.div>

          {/* 4 Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass-panel p-5 rounded-2xl border border-foreground/10 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-2.5 shadow-sm group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-8">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-foreground/10"
          >
            {bottomStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Animated Connected Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full"
        >
          {/* Main Enclosing Frame with Tech Blueprint Grid */}
          <div className="relative w-full rounded-[2.5rem] glass-panel border border-foreground/10 bg-card/60 p-6 md:p-8 shadow-2xl overflow-hidden min-h-[520px] flex flex-col justify-between">
            
            {/* Subtle Tech Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px"
              }}
            />

            {/* SVG Connecting Ray Lines (Dynamic Circuit) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block z-0" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting Lines from Center (50%, 50%) to 4 corners */}
              <line 
                x1="25%" y1="24%" x2="50%" y2="50%" 
                stroke="url(#lineGrad1)" 
                strokeWidth={activeNode === 1 ? "2.5" : "1.5"}
                strokeDasharray="5,5" 
                className="transition-all duration-300"
              />
              <line 
                x1="75%" y1="24%" x2="50%" y2="50%" 
                stroke="url(#lineGrad2)" 
                strokeWidth={activeNode === 2 ? "2.5" : "1.5"}
                strokeDasharray="5,5" 
                className="transition-all duration-300"
              />
              <line 
                x1="25%" y1="76%" x2="50%" y2="50%" 
                stroke="url(#lineGrad1)" 
                strokeWidth={activeNode === 3 ? "2.5" : "1.5"}
                strokeDasharray="5,5" 
                className="transition-all duration-300"
              />
              <line 
                x1="75%" y1="76%" x2="50%" y2="50%" 
                stroke="url(#lineGrad2)" 
                strokeWidth={activeNode === 4 ? "2.5" : "1.5"}
                strokeDasharray="5,5" 
                className="transition-all duration-300"
              />
            </svg>

            {/* Central FK Core Hub (Positioned in Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                {/* Rotating Radar Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-28 h-28 rounded-full border border-dashed border-primary/30 pointer-events-none"
                />

                {/* Pulse Ring */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 rounded-full bg-primary/10 pointer-events-none"
                />

                {/* Core Circle with FK Monogram */}
                <div className="relative w-16 h-16 rounded-2xl bg-card border border-primary/40 shadow-xl flex flex-col items-center justify-center p-1 group">
                  <div className="w-full h-full rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] flex items-center justify-center shadow-md">
                    <div className="w-full h-full bg-background rounded-[11px] flex flex-col items-center justify-center">
                      <span className="text-sm font-black tracking-tighter bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                        FK
                      </span>
                      <span className="text-[7px] font-extrabold uppercase text-emerald-400 tracking-wider flex items-center gap-0.5 mt-0.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping inline-block" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Badge */}
              <div className="mt-2.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-foreground/10 text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>UNIFIED ENGINE · 100% SYNC</span>
              </div>
            </div>

            {/* Top 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {nodes.slice(0, 2).map((node) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`glass-panel p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between min-h-[135px] ${
                      isHovered
                        ? "border-primary/60 bg-card/95 shadow-lg shadow-primary/10"
                        : "border-foreground/10 bg-card/75"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          {node.step}
                        </span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${node.badgeColor}`}>
                        {node.badge}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-bold text-foreground tracking-tight">
                        {node.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        {node.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Spacer for center node on mobile / layout */}
            <div className="h-16 sm:h-20" />

            {/* Bottom 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {nodes.slice(2, 4).map((node) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`glass-panel p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between min-h-[135px] ${
                      isHovered
                        ? "border-primary/60 bg-card/95 shadow-lg shadow-primary/10"
                        : "border-foreground/10 bg-card/75"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          {node.step}
                        </span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${node.badgeColor}`}>
                        {node.badge}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-bold text-foreground tracking-tight">
                        {node.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        {node.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemSection;
