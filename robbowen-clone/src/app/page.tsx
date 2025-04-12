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

export default function Home() {
  return (
    <motion.div 
      className="section space-y-32 relative"
      initial="initial"
      animate="animate"
    >
      {/* Hero section - pas de lazy loading car c'est la première vue */}
      <motion.div
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <Hero />
      </motion.div>
      
      {/* Image bleue avec effet de révélation */}
      <LazySection className="my-40 relative">
        <BlueImageReveal 
          src="/images/blue-background.jpg" 
          alt="Blue background transition" 
        />
      </LazySection>
      
      {/* Section Work Together avec délai */}
      <LazySection className="py-20 relative">
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <WorkTogether />
        </motion.div>
      </LazySection>
      
      {/* Section Open Source avec délai différent */}
      <LazySection className="py-20 relative">
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <OpenSource />
        </motion.div>
      </LazySection>
    </motion.div>
  );
}
