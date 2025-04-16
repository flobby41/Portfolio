"use client";

import Hero from "@/components/home/Hero";
import WorkTogether from "@/components/home/WorkTogether";
import OpenSource from "@/components/home/OpenSource";
import { LazySection } from "@/components/home/LazySection";
import { BlueImageReveal } from "@/components/home/BlueImageReveal";
import HorizontalBand from "@/components/home/HorizontalBand";
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
const skillsData = [
  {
    title: "Major Projects",
    description: "Custom e-commerce solutions built with modern tech stack including Next.js, Node.js, and various APIs.",
    icon: "💼",
    link: "/portfolio#major-projects"
  },
  {
    title: "Experiments",
    description: "Interactive prototypes and technical experiments showcasing creative coding and problem-solving.",
    icon: "🔬",
    link: "/portfolio#experiments"
  },
  {
    title: "About Me",
    description: "Programmer, designer, and singer passionate about creating engaging digital experiences.",
    icon: "👨‍💻",
    link: "/cv#about"
  }
];
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <motion.div 
        className="section space-y-32 relative bg-[#F4F9FC] mx-[20px] mt-[20px] min-h-[calc(100vh-15px)]"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero section */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 flex items-center">
            <Hero />
          </div>
        </div>
        
        <div className="h-[150px]" />
        <HorizontalBand />

<LazySection className="min-h-screen py-20">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      className="space-y-32"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      whileInView="visible"
    >
      {skillsData.map((skill, index) => (
        <motion.div
          key={skill.title}
          className="flex items-center gap-12"
          variants={{
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
            }
          }}
        >
          <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
            <h2 className="text-3xl font-bold mb-6 bg-[#F4F9FC]">{skill.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{skill.description}</p>
            <motion.a
              href={skill.link}
              className="inline-flex items-center bg-[#F4F9FC] text-white px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore {skill.title}
            </motion.a>
          </div>
          <motion.div 
            className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {/* Placeholder pour une image ou une illustration */}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</LazySection>
        
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
    </div>
  );
}
