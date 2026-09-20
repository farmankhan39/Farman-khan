import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Search, 
  Megaphone, 
  Sparkles 
} from "lucide-react";

export const EcosystemSection = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const pillars = [
    {
      title: "Ultra-Fast Web Development",
      description: "Custom WordPress & React websites built for speed and mobile responsiveness.",
      icon: Code2,
    },
    {
      title: "Precision SEO & Ranking",
      description: "On-page, technical SEO & keyword structures that drive real organic traffic.",
      icon: Search,
    },
    {
      title: "High-ROI Ads & Lead Gen",
      description: "Meta & Google Ads campaigns planned to turn clicks into valuable inquiries.",
      icon: Megaphone,
    },
    {
      title: "Conversion-Driven UI/UX",
      description: "Clean, modern interfaces structured for trust and user action.",
      icon: Palette,
    },
  ];

  const nodes = [
    {
      id: 1,
      step: "01 ARCHITECTURE",
      title: "Web Engineering",
      subtitle: "Fast WordPress & React web apps",
      badge: "100% Speed",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      icon: Code2,
      lineColor: "#8b5cf6",
    },
    {
      id: 2,
      step: "02 EXPERIENCE",
      title: "UI/UX Architecture",
      subtitle: "Conversion-first interface design",
      badge: "3.5x Conversion",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      icon: Palette,
      lineColor: "#38bdf8",
    },
    {
      id: 3,
      step: "03 VISIBILITY",
      title: "Search Engine SEO",
      subtitle: "Keywords & organic search reach",
      badge: "Top Rankings",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      icon: Search,
      lineColor: "#f59e0b",
    },
    {
      id: 4,
      step: "04 GROWTH",
      title: "Paid Ads & Scale",
      subtitle: "Meta & Google Ads lead generation",
      badge: "High ROI",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      icon: Megaphone,
      lineColor: "#10b981",
    },
  ];

  const bottomStats = [
    { value: "100%", label: "Speed & Performance" },
    { value: "3.8x", label: "Lead Conversion Rate" },
    { value: "24/7", label: "Direct Collaboration" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Crisp Minimal Content */}
        <div className="lg:col-span-6 flex flex-col space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-3.5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unified Growth System</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Everything connected into <span className="text-gradient-primary">one engine.</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Modern websites, organic SEO ranking, and high-converting paid ads working together to grow your business online.
            </p>
          </motion.div>

          {/* 4 Clean Micro Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="glass-panel p-4 rounded-2xl border border-foreground/10 hover:border-primary/40 transition-all duration-300 flex items-start gap-3 shadow-sm group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-4 border-t border-foreground/10"
          >
            {bottomStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Animated Connected Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full"
        >
          {/* Main Enclosing Frame */}
          <div className="relative w-full rounded-[2.5rem] glass-panel border border-foreground/10 bg-card/70 p-5 sm:p-7 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between">
            
            {/* Subtle Tech Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "20px 20px"
              }}
            />

            {/* SVG Animated Flowing Circuit Beams */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block z-0" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineBeam1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineBeam2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* 4 Animated Flowing Ray Lines */}
              <motion.line 
                x1="25%" y1="23%" x2="50%" y2="50%" 
                stroke="url(#lineBeam1)" 
                strokeWidth={activeNode === 1 ? "3" : "1.75"}
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line 
                x1="75%" y1="23%" x2="50%" y2="50%" 
                stroke="url(#lineBeam2)" 
                strokeWidth={activeNode === 2 ? "3" : "1.75"}
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line 
                x1="25%" y1="77%" x2="50%" y2="50%" 
                stroke="url(#lineBeam1)" 
                strokeWidth={activeNode === 3 ? "3" : "1.75"}
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line 
                x1="75%" y1="77%" x2="50%" y2="50%" 
                stroke="url(#lineBeam2)" 
                strokeWidth={activeNode === 4 ? "3" : "1.75"}
                strokeDasharray="6,4"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Central Animated Floating FK Core */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Rotating Outer Radar */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute w-28 h-28 rounded-full border border-dashed border-primary/35 pointer-events-none"
                />

                {/* Rotating Inner Reverse Radar */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-20 h-20 rounded-full border border-dotted border-sky-400/30 pointer-events-none"
                />

                {/* Pulsing Beacon Ambient Aura */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 rounded-full bg-primary/20 pointer-events-none blur-sm"
                />

                {/* Core FK Box */}
                <div className="relative w-16 h-16 rounded-2xl bg-card border border-primary/50 shadow-2xl flex flex-col items-center justify-center p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] flex items-center justify-center shadow-lg">
                    <div className="w-full h-full bg-background rounded-[11px] flex flex-col items-center justify-center">
                      <span className="text-sm font-black tracking-tighter bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                        FK
                      </span>
                      <span className="text-[7px] font-extrabold uppercase text-emerald-400 tracking-wider flex items-center gap-0.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Telemetry Tag */}
              <div className="mt-2 px-3 py-0.5 rounded-full bg-background/95 backdrop-blur-md border border-foreground/10 text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>UNIFIED ENGINE · 100% SYNC</span>
              </div>
            </motion.div>

            {/* Top 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {nodes.slice(0, 2).map((node, i) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className={`glass-panel p-4 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between min-h-[125px] ${
                      isHovered
                        ? "border-primary/70 bg-card/95 shadow-xl shadow-primary/10"
                        : "border-foreground/10 bg-card/75"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {node.step}
                        </span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${node.badgeColor}`}>
                        {node.badge}
                      </span>
                    </div>

                    <div className="mt-2.5">
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

            {/* Spacer for center FK Hub */}
            <div className="h-16 sm:h-20" />

            {/* Bottom 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {nodes.slice(2, 4).map((node, i) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 2) * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className={`glass-panel p-4 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between min-h-[125px] ${
                      isHovered
                        ? "border-primary/70 bg-card/95 shadow-xl shadow-primary/10"
                        : "border-foreground/10 bg-card/75"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {node.step}
                        </span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${node.badgeColor}`}>
                        {node.badge}
                      </span>
                    </div>

                    <div className="mt-2.5">
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
