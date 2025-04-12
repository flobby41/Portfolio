"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BlueImageRevealProps {
  src: string;
  alt: string;
}

export const BlueImageReveal = ({ src, alt }: BlueImageRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative w-full h-[80vh] overflow-hidden"
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2,
        }}
        className="absolute inset-0 bg-blue-500 z-10"
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}; 