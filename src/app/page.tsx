"use client";

import Hero from "@/components/home/Hero";
import { LazySection } from "@/components/home/LazySection";
import HorizontalBand from "@/components/home/HorizontalBand";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";


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
    link: "/work", 
    image: "/images/MajProj2.png",
    imageLink: "https://atelier-storefront.vercel.app/" // Nouveau lien spécifique pour l'image
  },
  {
    title: "Experiments",
    description: "Interactive prototypes and technical experiments showcasing creative coding and problem-solving.",
    icon: "🔬",
    link: "/experiments", 
    image: "/images/Experiments.png",
    imageLink: "https://flobby41.github.io/sandbox/" // Nouveau lien spécifique pour l'image
  },
  {
    title: "About Me",
    description: "Programmer, designer, and singer passionate about creating engaging digital experiences.",
    icon: "👨‍💻",
    link: "/about", 
    image: "/images/AboutMe.png",
    imageLink: "https://garcondargent.com/" // Nouveau lien spécifique pour l'image
  }
];
  
export default function Home() {
  // Références pour les effets de parallaxe
  const driftElements = useRef<NodeListOf<Element> | null>(null);
  const prlxElements = useRef<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    // Vérifier si c'est un rechargement de page (F5/refresh)
    // performance.navigation est obsolète mais encore supporté dans la plupart des navigateurs
    if (window.performance && performance.navigation.type === 1) {
      // C'est un rechargement de page, on scroll vers le haut
      window.scrollTo(0, 0);
    }

    // Gestion des effets de dérive sur les éléments décoratifs
    const handleMouseMove = (e: MouseEvent) => {
      if (!driftElements.current) {
        driftElements.current = document.querySelectorAll('[data-drift]');
      }
      
      driftElements.current.forEach((el) => {
        const attr = el.getAttribute('data-drift');
        if (attr) {
          const [maxX, maxY] = attr.split(' ').map(val => parseFloat(val));
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          
          const deltaX = (e.clientX - centerX) / centerX;
          const deltaY = (e.clientY - centerY) / centerY;
          
          const translateX = maxX * deltaX;
          const translateY = maxY * deltaY;
          
          el.setAttribute('style', `transform: translate(${translateX}px, ${translateY}px)`);
        }
      });
      
      if (!prlxElements.current) {
        prlxElements.current = document.querySelectorAll('[data-prlx]');
      }
      
      prlxElements.current.forEach((el) => {
        const attr = el.getAttribute('data-prlx');
        if (attr) {
          const [minY, maxY] = attr.split(' ').map(val => parseFloat(val));
          const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          const translateY = minY + (maxY - minY) * percent;
          
          el.setAttribute('style', `transform: translateY(${translateY * 100}px)`);
        }
      });
    };

    // Initialisation
    window.addEventListener("mousemove", handleMouseMove);
    handleMouseMove(new MouseEvent("mousemove")); // Exécuter immédiatement pour les éléments visibles au chargement

    // Nettoyage
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <motion.div 
        className="section space-y-32 relative bg-[#F4F9FC] mx-[20px] mt-[20px] min-h-[calc(100vh-15px)] "
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero section */}
        <div className="flex flex-col min-h-screen ">
          <div className="flex-1 flex items-center">
            <Hero />
          </div>
        </div>
        
        <div className="h-[1px]" />
        <HorizontalBand />

<LazySection className="min-h-screen py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-0">
    <motion.div
      className="space-y-8"
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
          className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-12 skill-item"
          variants={{
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
            }
          }}
        >
          <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'} text-center md:text-left mx-auto`}>
            <h2 className="skills_title text-4xl font-bold mb-6 text-center md:text-left">{skill.title}<span className="text-[#73BBC5]">.</span>
            </h2>
            <p className="skills text-base mb-8 system-font text-center md:text-left">{skill.description}</p>
            
              <motion.a href={skill.link} className="btn mx-auto md:mx-0">
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
                </motion.span>
              </motion.a>
          </div>
          <motion.div 
            className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
            whileHover={{ scale: 1.05 }}
          >
            <a href={skill.imageLink || skill.link}>
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </a>
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
