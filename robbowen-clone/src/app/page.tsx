"use client";

import Hero from "@/components/home/Hero";
import WorkTogether from "@/components/home/WorkTogether";
import OpenSource from "@/components/home/OpenSource";
import { LazySection } from "@/components/home/LazySection";
import { BlueImageReveal } from "@/components/home/BlueImageReveal";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      className="section space-y-32 relative"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Hero section avec animation immédiate */}
      <motion.div
        variants={fadeInUp}
        transition={{
          duration: 1.2,        // Plus long pour plus de smoothness
          delay: 0.5,          // Attendre avant de commencer
          ease: [0.25, 0.1, 0.25, 1],  // Courbe d'easing personnalisée
        }}
        className="min-h-screen flex items-center"
      >
        <Hero />
      </motion.div>
      
      {/* Image bleue avec effet de révélation précoce */}
      <LazySection 
        className="my-40 relative"
        threshold={0.05}
        rootMargin="-200px"
      >
        <BlueImageReveal 
          src="/images/blue-background.jpg" 
          alt="Blue background transition" 
        />
      </LazySection>
      
      {/* Section Work Together avec délai et seuil plus élevé */}
      <LazySection 
        className="py-20 relative"
        threshold={0.15}
        rootMargin="-150px"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <WorkTogether />
        </motion.div>
      </LazySection>
      
      {/* Section Open Source avec animation plus progressive */}
      <LazySection 
        className="py-20 relative"
        threshold={0.2}
        rootMargin="-100px"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <OpenSource />
        </motion.div>
      </LazySection>
    </motion.div>
  );
}
