import React from "react";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className = "",
  size = 200,
  duration = 8,
  colorFrom = "#8b5cf6",
  colorTo = "#38bdf8",
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}>
      <motion.div
        className="absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round inherit)`,
          background: `radial-gradient(circle at center, ${colorFrom}, ${colorTo} 50%, transparent 80%)`,
          filter: "blur(4px)",
          opacity: 0.85,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      />
    </div>
  );
};

export default BorderBeam;
