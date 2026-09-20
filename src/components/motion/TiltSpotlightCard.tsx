import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface TiltSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  maxTilt?: number;
  enableTilt?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const TiltSpotlightCard: React.FC<TiltSpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.18)",
  maxTilt = 8,
  enableTilt = true,
  onClick,
  style,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: mouseX, y: mouseY });

    if (enableTilt) {
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      x.set(yPct * -maxTilt);
      y.set(xPct * maxTilt);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        ...(enableTilt
          ? {
              rotateX: mouseXSpring,
              rotateY: mouseYSpring,
              transformStyle: "preserve-3d",
            }
          : {}),
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 rounded-[inherit]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default TiltSpotlightCard;
