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

    // Cinematic Timing Sequence:
    // 0.00s: Signal
    // 0.40s: Personal Mark Reveal
    // 1.20s: Creative Identity
    // 2.00s: Farman Khan Wordmark
    // 2.80s: Signature Brand Moment
    // 3.40s: Portfolio Reveal Curtain
    // 4.20s: Complete & Unmount

    const t1 = setTimeout(() => setPhase("mark"), 400);
    const t2 = setTimeout(() => setPhase("identity"), 1200);
    const t3 = setTimeout(() => setPhase("wordmark"), 2000);
    const t4 = setTimeout(() => setPhase("signature"), 2800);
    const t5 = setTimeout(() => setPhase("reveal"), 3400);
    const t6 = setTimeout(() => {
      setPhase("ended");
      handleFinish();
    }, 4200);

    // Hard safety fallback (4.8s max)
    const safetyFallback = setTimeout(() => {
      handleFinish();
    }, 4800);

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
            scale: phase === "reveal" ? 0.97 : 1,
            y: phase === "reveal" ? -15 : 0,
            filter: phase === "reveal" ? "blur(8px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#08090d] text-white select-none overflow-hidden"
          style={{ willChange: "opacity, transform, filter" }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: phase === "signal" ? 0.8 : 1.2,
                opacity: phase === "signature" ? 0.25 : 0.18,
              }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35)_0%,rgba(14,165,233,0.12)_40%,transparent_70%)] blur-[100px]"
            />
          </div>

          {/* Ultra-fine Minimal Coordinate Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Decorative Subtle Corner Accents */}
          <div className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-white/30 uppercase hidden sm:block">
            System / Farman Khan
          </div>
          <div className="absolute top-8 right-8 text-[10px] font-mono tracking-widest text-white/30 uppercase hidden sm:block">
            Portfolio v2.0
          </div>
          <div className="absolute bottom-8 left-8 text-[10px] font-mono tracking-widest text-white/30 uppercase hidden sm:block">
            Uttarakhand, IN
          </div>

          {/* Main Stage Container */}
          <div className="relative z-20 flex flex-col items-center justify-center px-4">
            {/* 0.00s - 0.40s: The Initial Signal */}
            {phase === "signal" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 via-primary to-sky-400 shadow-[0_0_25px_rgba(139,92,246,0.9)]" />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-4 h-4 rounded-full border border-purple-400/50"
                />
              </motion.div>
            )}

            {/* 0.40s - 4.20s: Personal Mark & Brand Reveal */}
            {phase !== "signal" && (
              <div className="flex flex-col items-center text-center">
                {/* FK Monogram Emblem */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    y: phase === "wordmark" || phase === "signature" || phase === "reveal" ? -8 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group mb-6"
                >
                  {/* Glowing Rim */}
                  <div className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-tr from-purple-600 via-primary to-sky-400 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />

                  {/* Squircle Badge */}
                  <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-[1.4rem] bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1.5px] shadow-2xl">
                    <div className="w-full h-full bg-[#0d0e14] rounded-[1.3rem] flex items-center justify-center overflow-hidden relative">
                      {/* Subtle Inner Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                      {/* Monogram SVG & Typography */}
                      <span className="font-extrabold text-2xl sm:text-3xl tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-300 to-sky-400 bg-clip-text text-transparent select-none drop-shadow-[0_2px_10px_rgba(139,92,246,0.5)]">
                        FK
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* 1.20s - 2.00s: Creative Identity Accents */}
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{
                    opacity: phase === "identity" || phase === "wordmark" || phase === "signature" || phase === "reveal" ? 1 : 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-3 mb-3"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: phase === "identity" || phase === "wordmark" || phase === "signature" || phase === "reveal" ? 36 : 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-primary hidden sm:block"
                  />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    Web Developer · Digital Marketer
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: phase === "identity" || phase === "wordmark" || phase === "signature" || phase === "reveal" ? 36 : 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-[1px] bg-gradient-to-l from-transparent via-purple-400/60 to-primary hidden sm:block"
                  />
                </motion.div>

                {/* 2.00s - 3.40s: FARMAN KHAN Wordmark Reveal */}
                <div className="relative overflow-hidden py-1 px-4">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      letterSpacing: "0.22em",
                      filter: "blur(10px)",
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: phase === "wordmark" || phase === "signature" || phase === "reveal" ? 1 : 0,
                      letterSpacing: "0.06em",
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase select-none"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(139,92,246,0.3)]">
                      Farman Khan
                    </span>

                    {/* 2.80s - 3.40s: Signature Light Sweep */}
                    {(phase === "signature" || phase === "reveal") && (
                      <motion.span
                        initial={{ x: "-120%", opacity: 0 }}
                        animate={{ x: "160%", opacity: [0, 0.9, 0] }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] pointer-events-none mix-blend-overlay"
                      />
                    )}
                  </motion.h1>
                </div>

                {/* 2.80s - 3.40s: Refined Bottom Accent Underline */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: phase === "signature" || phase === "reveal" ? "140px" : "0px",
                    opacity: phase === "signature" || phase === "reveal" ? 0.8 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent mt-2 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                />
              </div>
            )}
          </div>

          {/* Minimal Bottom Skip Control */}
          <div className="absolute bottom-8 right-8 z-30">
            <button
              onClick={handleFinish}
              className="group flex items-center gap-2 text-[11px] font-medium text-white/40 hover:text-white/80 transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md cursor-pointer"
            >
              <span>Skip Intro</span>
              <span className="text-[9px] font-mono opacity-60">ESC</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchIntro;
