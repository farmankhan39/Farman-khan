import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Search, 
  Megaphone, 
  Check 
} from "lucide-react";

export const EcosystemSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const leftFeatures = [
    {
      title: "Clear strategic direction",
      description: "Grounded directly in revenue goals & business reality",
    },
    {
      title: "High-converting experiences",
      description: "Engineered for conversion velocity, trust & speed",
    },
    {
      title: "Modern Web & Tech Stack",
      description: "Fast WordPress, React & clean mobile-first code",
    },
    {
      title: "Transparent execution",
      description: "Direct collaboration with rapid delivery from kickoff to launch",
    },
  ];

  const satelliteCards = [
    {
      id: 1,
      step: "01 SYSTEM",
      title: "Web Strategy",
      desc: "Fast WordPress & web applications",
      badge: "+180% Trajectory",
      icon: Code2,
      color: "#38bdf8", // Cyan
      glowColor: "rgba(56, 189, 248, 0.4)",
      badgeStyle: "text-cyan-400 bg-cyan-950/60 border-cyan-500/30",
      iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    },
    {
      id: 2,
      step: "02 EXPERIENCE",
      title: "UI/UX Design",
      desc: "High-converting digital UI/UX",
      badge: "4.2x Conversion",
      icon: Palette,
      color: "#f43f5e", // Pink/Rose
      glowColor: "rgba(244, 63, 94, 0.4)",
      badgeStyle: "text-rose-400 bg-rose-950/60 border-rose-500/30",
      iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    },
    {
      id: 3,
      step: "03 VISIBILITY",
      title: "SEO & Growth",
      desc: "Keyword ranking & search reach",
      badge: "Top Rankings",
      icon: Search,
      color: "#a855f7", // Purple
      glowColor: "rgba(168, 85, 247, 0.4)",
      badgeStyle: "text-purple-400 bg-purple-950/60 border-purple-500/30",
      iconBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    },
    {
      id: 4,
      step: "04 SCALE",
      title: "Ads & Revenue",
      desc: "Meta & Google Ads lead generation",
      badge: "12x Pipeline",
      icon: Megaphone,
      color: "#10b981", // Emerald/Green
      glowColor: "rgba(16, 185, 129, 0.4)",
      badgeStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
      iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    },
  ];

  const bottomMetrics = [
    { value: "4.8x", label: "AVG. CLIENT ROI" },
    { value: "99.4%", label: "DELIVERY PRECISION" },
    { value: "24/7", label: "DIRECT SYNC" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
              <span>WHY FARMAN KHAN</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-foreground leading-[1.1]">
              Strategy, technology and <span className="text-gradient-primary">creative thinking</span> in one partner.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              We do not treat marketing, design, and web development as separate silos. We build connected systems so your brand, website and sales engine all perform together.
            </p>
          </motion.div>

          {/* 4 Checkbox Feature Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leftFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="glass-panel p-5 rounded-2xl border border-foreground/10 hover:border-primary/40 transition-all duration-300 flex flex-col gap-2 shadow-sm group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom 3 Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-foreground/10"
          >
            {bottomMetrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black text-foreground tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-wider text-muted-foreground mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Animated Connected Hub with Flowing Colored Laser Beams */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full"
        >
          {/* Main Enclosing Frame with Animated Colored Running Border */}
          <div className="relative w-full rounded-[2.5rem] bg-[#0c0d14]/90 dark:bg-[#07080e]/95 border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden min-h-[540px] flex flex-col justify-between">
            
            {/* Animated Laser Border Beam circling the container */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none rounded-[2.5rem]" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="borderBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <rect
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="38"
                fill="none"
                stroke="url(#borderBeamGradient)"
                strokeWidth="2"
                strokeDasharray="140 380"
                className="animate-border-beam"
              />
            </svg>

            {/* Tech Matrix Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "22px 22px"
              }}
            />

            {/* SVG Connecting Flowing Colored Electric Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block z-0" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 4 Colored Gradients for each Quadrant */}
                <linearGradient id="cyanRay" x1="50%" y1="50%" x2="25%" y2="23%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="roseRay" x1="50%" y1="50%" x2="75%" y2="23%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="purpleRay" x1="50%" y1="50%" x2="25%" y2="77%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="greenRay" x1="50%" y1="50%" x2="75%" y2="77%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                </linearGradient>

                {/* Filter for glowing neon lasers */}
                <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Top-Left Cyan Flowing Line */}
              <line 
                x1="50%" y1="50%" x2="26%" y2="24%" 
                stroke="#38bdf8" 
                strokeWidth="1.5" 
                strokeOpacity="0.2"
              />
              <motion.line 
                x1="50%" y1="50%" x2="26%" y2="24%" 
                stroke="url(#cyanRay)" 
                strokeWidth={hoveredCard === 1 ? "3.5" : "2.5"}
                strokeDasharray="8 6"
                filter="url(#laserGlow)"
                animate={{ strokeDashoffset: [-28, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />

              {/* 2. Top-Right Rose/Pink Flowing Line */}
              <line 
                x1="50%" y1="50%" x2="74%" y2="24%" 
                stroke="#f43f5e" 
                strokeWidth="1.5" 
                strokeOpacity="0.2"
              />
              <motion.line 
                x1="50%" y1="50%" x2="74%" y2="24%" 
                stroke="url(#roseRay)" 
                strokeWidth={hoveredCard === 2 ? "3.5" : "2.5"}
                strokeDasharray="8 6"
                filter="url(#laserGlow)"
                animate={{ strokeDashoffset: [-28, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />

              {/* 3. Bottom-Left Purple Flowing Line */}
              <line 
                x1="50%" y1="50%" x2="26%" y2="76%" 
                stroke="#a855f7" 
                strokeWidth="1.5" 
                strokeOpacity="0.2"
              />
              <motion.line 
                x1="50%" y1="50%" x2="26%" y2="76%" 
                stroke="url(#purpleRay)" 
                strokeWidth={hoveredCard === 3 ? "3.5" : "2.5"}
                strokeDasharray="8 6"
                filter="url(#laserGlow)"
                animate={{ strokeDashoffset: [-28, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />

              {/* 4. Bottom-Right Green Flowing Line */}
              <line 
                x1="50%" y1="50%" x2="74%" y2="76%" 
                stroke="#10b981" 
                strokeWidth="1.5" 
                strokeOpacity="0.2"
              />
              <motion.line 
                x1="50%" y1="50%" x2="74%" y2="76%" 
                stroke="url(#greenRay)" 
                strokeWidth={hoveredCard === 4 ? "3.5" : "2.5"}
                strokeDasharray="8 6"
                filter="url(#laserGlow)"
                animate={{ strokeDashoffset: [-28, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Central Animated FK Engine Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                
                {/* 4 Glowing Corner Connector Dots on Central Hub */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] animate-ping" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_#f43f5e] animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] animate-ping" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-ping" />

                {/* Rotating Outer Dashed Radar */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 rounded-full border border-dashed border-cyan-400/40 pointer-events-none"
                />

                {/* Rotating Reverse Inner Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-24 h-24 rounded-full border border-dotted border-purple-400/40 pointer-events-none"
                />

                {/* Central Circle W / FK Branding */}
                <motion.div 
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#131522] to-[#1e2238] border-2 border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex flex-col items-center justify-center p-1"
                >
                  <span className="text-2xl font-black tracking-tighter text-white drop-shadow-md">
                    FK
                  </span>
                  <div className="inline-flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[7px] font-extrabold uppercase text-emerald-400 tracking-wider">
                      ACTIVE
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Sub-label Under Central Engine */}
              <div className="mt-3 px-3.5 py-1 rounded-full bg-black/90 backdrop-blur-md border border-white/10 text-center shadow-lg">
                <p className="text-[8px] font-black uppercase tracking-widest text-white/90">
                  UNIFIED ENGINE
                </p>
                <p className="text-[7px] font-extrabold text-cyan-400 tracking-wider">
                  99.8% SYNERGY
                </p>
              </div>
            </div>

            {/* Top 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {satelliteCards.slice(0, 2).map((card, i) => {
                const Icon = card.icon;
                const isHovered = hoveredCard === card.id;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between min-h-[140px] bg-[#12131f]/90 ${
                      isHovered
                        ? "border-white/40 shadow-2xl -translate-y-1"
                        : "border-white/10"
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 10px 30px ${card.glowColor}` : undefined
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${card.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/70">
                          {card.step}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5">
                      <h4 className="text-base font-extrabold text-white tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-3">
                      <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${card.badgeStyle}`}>
                        {card.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Spacer for Hub */}
            <div className="h-20 sm:h-24" />

            {/* Bottom 2 Satellite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {satelliteCards.slice(2, 4).map((card, i) => {
                const Icon = card.icon;
                const isHovered = hoveredCard === card.id;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 2) * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between min-h-[140px] bg-[#12131f]/90 ${
                      isHovered
                        ? "border-white/40 shadow-2xl -translate-y-1"
                        : "border-white/10"
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 10px 30px ${card.glowColor}` : undefined
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${card.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/70">
                          {card.step}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5">
                      <h4 className="text-base font-extrabold text-white tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-3">
                      <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${card.badgeStyle}`}>
                        {card.badge}
                      </span>
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
