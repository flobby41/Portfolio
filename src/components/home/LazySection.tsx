"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const LazySection = ({ 
  children, 
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "-100px"
}: LazySectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
        delay: inView ? 0.2 : 0,
      }}
      className={`transform ${className}`}
    >
      {children}
    </motion.section>
  );
}; 