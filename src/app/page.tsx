"use client";

import Hero from "@/components/home/Hero";
import { LazySection } from "@/components/home/LazySection";
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
    link: "/portfolio#major-projects", 
    image: "/images/MajProj2.png"
  },
  {
    title: "Experiments",
    description: "Interactive prototypes and technical experiments showcasing creative coding and problem-solving.",
    icon: "🔬",
    link: "/portfolio#experiments", 
    image: "/images/Experiments.png"
  },
  {
    title: "About Me",
    description: "Programmer, designer, and singer passionate about creating engaging digital experiences.",
    icon: "👨‍💻",
    link: "/cv#about", 
    image: "/images/AboutMe.png"
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
        
        <div className="h-[1px]" />
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
            <motion.a href="" className="btn"
        >
          <span className="btn__label">
          Explore {skill.title}
          </span>
          <motion.span 
    className="btn__fill stripes" 
    data-drift="-10 -12" 
    aria-hidden="true"
    initial={{ x: -4.95845, y: 7.15695 }}
    whileHover={{ 
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }}
  >
          Explore {skill.title}
          </motion.span>
        </motion.a>

          </div>
          <motion.div 
            className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={skill.image}
              alt={skill.title}
              className="w-full h-auto rounded-lg shadow-lg"  />
              {/* Placeholder pour une image ou une illustration */}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</LazySection>
  
      </motion.div>
    </div>
  );
}
