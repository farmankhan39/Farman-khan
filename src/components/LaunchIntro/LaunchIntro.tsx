import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchIntroProps {
  onComplete?: () => void;
}

export const LaunchIntro: React.FC<LaunchIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<
    "signal" | "mark" | "identity" | "wordmark" | "signature" | "reveal" | "ended"
  >("signal");
  const [isDismissed, setIsDismissed] = useState(false);
  const isCompletedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;
    try {
      sessionStorage.setItem("fk_portfolio_intro_seen", "true");
    } catch {
      // Ignore storage errors in private browsing
    }
    document.body.style.overflow = "";
    setIsDismissed(true);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    // Check if user has already seen the intro this session
    try {
      const alreadySeen = sessionStorage.getItem("fk_portfolio_intro_seen");
      if (alreadySeen === "true") {
        handleFinish();
        return;
      }
    } catch {
      // Continue if sessionStorage unavailable
    }

    // Lock body scroll during launch animation
    document.body.style.overflow = "hidden";

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        handleFinish();
      }, 1000);
      return () => clearTimeout(quickTimer);
    }

    // Premium 5.0-Second Cinematic Timing Sequence:
    // 0.00s - 0.60s: Genesis Signal & Optical Reticle
    // 0.60s - 1.60s: Holographic Personal Mark (FK Monogram & SVG Stroke Assembly)
    // 1.60s - 2.60s: Creative Identity & Precision Laser Rails
    // 2.60s - 3.70s: Farman Khan Wordmark & Prism Light Sweep
    // 3.70s - 4.40s: Signature Harmonic Pulse & Line Completion
    // 4.40s - 5.00s: Cinematic Portfolio Expansion & Dissolve Reveal
    // 5.00s: Clean Unmount & Scroll Unlock

    const t1 = setTimeout(() => setPhase("mark"), 600);
    const t2 = setTimeout(() => setPhase("identity"), 1600);
    const t3 = setTimeout(() => setPhase("wordmark"), 2600);
    const t4 = setTimeout(() => setPhase("signature"), 3700);
    const t5 = setTimeout(() => setPhase("reveal"), 4400);
    const t6 = setTimeout(() => {
      setPhase("ended");
      handleFinish();
    }, 5000);

    // Hard safety fallback (5.5s max)
    const safetyFallback = setTimeout(() => {
      handleFinish();
    }, 5500);

    // Allow user to dismiss with Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(safetyFallback);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleFinish]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {phase !== "ended" && (
        <motion.div
          key="launch-intro-overlay"
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === "reveal" ? 0 : 1,
            scale: phase === "reveal" ? 0.95 : 1,
            y: phase === "reveal" ? -24 : 0,
            filter: phase === "reveal" ? "blur(12px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050609] text-white select-none overflow-hidden"
          style={{ willChange: "opacity, transform, filter" }}
        >
          {/* Layer 1: Ambient Multi-Chromatic Energy Bloom */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale:
                  phase === "signal"
                    ? 0.7
                    : phase === "signature" || phase === "wordmark"
                    ? 1.3
                    : 1.0,
                opacity:
                  phase === "signature"
                    ? 0.35
                    : phase === "wordmark"
                    ? 0.28
                    : 0.18,
              }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45)_0%,rgba(56,189,248,0.18)_35%,rgba(14,165,233,0.06)_60%,transparent_75%)] blur-[120px]"
            />

            {/* Secondary Ambient Accent Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: phase === "signature" ? 0.2 : 0.1,
                rotate: 180,
              }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.3)_0%,transparent_65%)] blur-[90px]"
            />
          </div>

          {/* Layer 2: Precision Micro-Grid with Vignette */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.14] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#050609_90%)]" />

          {/* Layer 3: High-Tech Telemetry Accents */}
          <div className="absolute top-8 left-8 sm:left-12 flex items-center gap-2.5 text-[10px] font-mono tracking-widest text-white/40 uppercase hidden sm:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 -ml-4" />
            <span>FK // PORTFOLIO INITIALIZATION</span>
          </div>

          <div className="absolute top-8 right-8 sm:right-12 text-[10px] font-mono tracking-widest text-white/40 uppercase hidden sm:block">
            {phase === "signature" || phase === "reveal"
              ? "● SYSTEM READY"
              : "STATUS: BOOTING"}
          </div>

          <div className="absolute bottom-8 left-8 sm:left-12 flex items-center gap-4 text-[10px] font-mono tracking-widest text-white/30 uppercase hidden sm:flex">
            <span>LAT 28.98° N / LON 79.40° E</span>
            <span>·</span>
            <span>UTTARAKHAND, IN</span>
          </div>

          {/* Main Hero Animation Stage */}
          <div className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto">
            {/* 0.00s - 0.60s: Genesis Signal & Optical Crosshair */}
            {phase === "signal" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center"
              >
                {/* Center Laser Core */}
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-purple-400 via-sky-300 to-white shadow-[0_0_35px_rgba(139,92,246,1)]" />

                {/* Concentric Expanding Shockwave Rings */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0.9 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
                  className="absolute w-8 h-8 rounded-full border border-purple-400/70"
                />
                <motion.div
                  initial={{ scale: 0.3, opacity: 0.6 }}
                  animate={{ scale: 4.5, opacity: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="absolute w-8 h-8 rounded-full border border-sky-400/50"
                />

                {/* Minimal Optical Crosshair Marks */}
                <div className="absolute -top-6 w-[1px] h-3 bg-gradient-to-t from-purple-400/80 to-transparent" />
                <div className="absolute -bottom-6 w-[1px] h-3 bg-gradient-to-b from-purple-400/80 to-transparent" />
                <div className="absolute -left-6 h-[1px] w-3 bg-gradient-to-l from-purple-400/80 to-transparent" />
                <div className="absolute -right-6 h-[1px] w-3 bg-gradient-to-r from-purple-400/80 to-transparent" />
              </motion.div>
            )}

            {/* 0.60s - 5.00s: Personal Mark & Brand Assembly */}
            {phase !== "signal" && (
              <div className="flex flex-col items-center text-center w-full">
                {/* FK Monogram Emblem Lockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y:
                      phase === "wordmark" ||
                      phase === "signature" ||
                      phase === "reveal"
                        ? -12
                        : 0,
                  }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group mb-7"
                >
                  {/* Outer Orbiting Dashed Energy Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                    className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-purple-400/25 pointer-events-none"
                  />

                  {/* High-Luminance Dynamic Outer Aura */}
                  <motion.div
                    animate={{
                      opacity:
                        phase === "signature" || phase === "wordmark"
                          ? [0.6, 0.95, 0.6]
                          : 0.5,
                      scale:
                        phase === "signature"
                          ? [1, 1.06, 1]
                          : 1,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-purple-600 via-primary to-sky-400 opacity-75 blur-xl pointer-events-none"
                  />

                  {/* Signature Squircle Badge Housing */}
                  <div className="relative w-20 h-20 sm:w-26 sm:h-26 rounded-[1.6rem] sm:rounded-[1.9rem] bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1.5px] shadow-[0_0_50px_rgba(139,92,246,0.4)]">
                    <div className="w-full h-full bg-[#0a0b12] rounded-[1.5rem] sm:rounded-[1.8rem] flex items-center justify-center overflow-hidden relative">
                      {/* Frosted Glass Gradient Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/40 pointer-events-none" />

                      {/* SVG Monogram Dynamic Stroke Drawing */}
                      <div className="relative z-10 flex items-center justify-center">
                        <span className="font-extrabold text-3xl sm:text-4xl tracking-tighter bg-gradient-to-r from-cyan-300 via-purple-300 to-sky-300 bg-clip-text text-transparent select-none drop-shadow-[0_2px_15px_rgba(139,92,246,0.6)]">
                          FK
                        </span>
                      </div>

                      {/* Animated Corner Reflections */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.7, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2.8 }}
                        className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/30 to-transparent pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 1.60s - 2.60s: Creative Identity & Laser Energy Rails */}
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{
                    opacity:
                      phase === "identity" ||
                      phase === "wordmark" ||
                      phase === "signature" ||
                      phase === "reveal"
                        ? 1
                        : 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center gap-3.5 mb-4 w-full"
                >
                  {/* Left Rail */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width:
                        phase === "identity" ||
                        phase === "wordmark" ||
                        phase === "signature" ||
                        phase === "reveal"
                          ? 60
                          : 0,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-sky-400 hidden sm:block"
                  />

                  {/* Role Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
                      Web Developer · Digital Marketer
                    </span>
                  </div>

                  {/* Right Rail */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width:
                        phase === "identity" ||
                        phase === "wordmark" ||
                        phase === "signature" ||
                        phase === "reveal"
                          ? 60
                          : 0,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="h-[1px] bg-gradient-to-l from-transparent via-purple-400 to-sky-400 hidden sm:block"
                  />
                </motion.div>

                {/* 2.60s - 4.40s: FARMAN KHAN Majestic Wordmark */}
                <div className="relative overflow-hidden py-2 px-6">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      letterSpacing: "0.26em",
                      filter: "blur(12px)",
                      scale: 0.94,
                    }}
                    animate={{
                      opacity:
                        phase === "wordmark" ||
                        phase === "signature" ||
                        phase === "reveal"
                          ? 1
                          : 0,
                      letterSpacing: "0.06em",
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide uppercase select-none leading-none"
                  >
                    <span className="bg-gradient-to-r from-white via-purple-200 via-sky-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(139,92,246,0.35)]">
                      Farman Khan
                    </span>

                    {/* 3.70s - 4.40s: Signature Prismatic Light Beam Sweep */}
                    {(phase === "signature" || phase === "reveal") && (
                      <motion.span
                        initial={{ x: "-130%", opacity: 0 }}
                        animate={{ x: "180%", opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-transparent via-white/90 via-sky-300/80 to-transparent skew-x-[-28deg] pointer-events-none mix-blend-overlay"
                      />
                    )}
                  </motion.h1>
                </div>

                {/* 3.70s - 4.40s: Accent Energy Underline */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width:
                      phase === "signature" || phase === "reveal"
                        ? "180px"
                        : "0px",
                    opacity:
                      phase === "signature" || phase === "reveal" ? 0.9 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-sky-400 via-purple-400 to-transparent mt-3 rounded-full shadow-[0_0_16px_rgba(56,189,248,0.9)]"
                />

                {/* Location & Experience Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity:
                      phase === "signature" || phase === "reveal" ? 0.6 : 0,
                    y: 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[10px] font-mono tracking-[0.2em] text-white/60 uppercase mt-3"
                >
                  Uttarakhand, India · Digital Experience
                </motion.p>
              </div>
            )}
          </div>

          {/* Discreet Skip Control */}
          <div className="absolute bottom-8 right-8 z-30">
            <button
              onClick={handleFinish}
              className="group flex items-center gap-2 text-[11px] font-medium text-white/40 hover:text-white/90 transition-colors px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 backdrop-blur-md cursor-pointer"
            >
              <span>Skip Intro</span>
              <span className="text-[9px] font-mono opacity-60 px-1 py-0.2 rounded bg-white/10">
                ESC
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchIntro;
