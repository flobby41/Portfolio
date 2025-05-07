"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AboutMyWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-100px",
  });
  
  // Ajout d'un état pour suivre si le LoadingScreen a terminé
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Attendre que le LoadingScreen soit complètement terminé
    // Le LoadingScreen prend environ 1300ms pour se terminer complètement
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 100); // Un peu plus que les 1300ms du LoadingScreen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden my-16 ">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          delay: 0.,
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mt-12"
      >
        <div className="relative">
          <motion.h1 
              className="font-bitter text-[4.68rem] text-[#0f1b61] leading-[67.5px] [-webkit-font-smoothing:antialiased]"
              initial={{ opacity: 0, y: 20 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.8,          
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
            About my work
            
            <span className="text-[#f67796]">.</span>
            </motion.h1>

        </div>
      </motion.div>

      {/* Bande horizontale */}
      <motion.div
        initial={{ x: "100%", width: "10%" }}
        animate={loadingComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="relative h-[3px] bg-[#f67796] mt-10"
      />

      {/* Nouveau contenu */}
      <motion.p 
              className="font-bitter text-3xl text-[#0f1b61] mt-10"
              initial={{ opacity: 0, x: -20 }}
              animate={loadingComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.9, duration: 1.2 }}
            >
      
        From performance-driven storefronts to modular APIs, headless CMS to fully custom admin dashboards — I design and develop modern, fast and accessible web experiences that feel good to use. I believe that great user experience comes from a balance between clean design, solid architecture and small technical details that no one sees… but <span className="font-bold"> everyone feels</span>. 
        

        {/* Bouton très stylé */}
        
        {/* <motion.a href="/work" className="btn"
        >
          <span className="btn__label">
          About my approach
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
    About my approach
  </motion.span>
        </motion.a> */}
      </motion.p>
    </div>
  );
};

export default AboutMyWork;