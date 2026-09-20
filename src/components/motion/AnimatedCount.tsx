import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCountProps {
  value: string; // e.g. "8+", "10+", "100%", "India"
  className?: string;
  duration?: number;
}

export const AnimatedCount: React.FC<AnimatedCountProps> = ({
  value,
  className = "",
  duration = 1500,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  // Extract number and suffix (e.g. "8+" -> num: 8, suffix: "+", "100%" -> num: 100, suffix: "%")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : null;
  const suffix = targetNumber !== null ? value.replace(/\d+/, "") : value;

  useEffect(() => {
    if (!isInView || targetNumber === null) {
      if (targetNumber === null) {
        setDisplayValue(value);
      }
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * targetNumber);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, suffix, value, duration]);

  return (
    <span ref={ref} className={className}>
      {targetNumber === null ? value : displayValue}
    </span>
  );
};

export default AnimatedCount;
