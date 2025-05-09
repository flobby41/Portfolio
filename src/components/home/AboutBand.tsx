"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-100px",
  });
  
  // Nouvel état pour contrôler le démarrage des animations après le LoadingScreen
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Attendre que le LoadingScreen soit terminé avant de démarrer nos animations
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 1200); // Réduit de 1500ms à 1200ms pour correspondre au nouveau timing du LoadingScreen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden my-16 ">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
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
              className="font-bitter text-[4.68rem] text-[#1c494c] leading-[67.5px] [-webkit-font-smoothing:antialiased]"
              initial={{ opacity: 0, y: 20 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                delay: 0.5,          
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
            About me
            
            <span className="text-[#73cadc]">.</span>
            </motion.h1>

        </div>
      </motion.div>

      {/* Bande horizontale - modifiée pour partir de la droite */}
      <motion.div
        initial={{ x: "0%", width: "8%" }}
        animate={loadingComplete ? { opacity: 1, x: 0, width: "30%" } : { opacity: 0, x: "0%" }}
        transition={{ 
          opacity: { delay: 0.8, duration: 0.4 },
          width: { delay: 0.9, duration: 0.3 } 
        }}
        className="relative h-[3px] bg-[#73cadc] mt-10 ml-auto" 
        style={{ 
          transformOrigin: "right",
          right: 0
        }}
      />

      {/* Nouveau contenu */}
      <motion.p 
              className="font-bitter text-xl text-[#1c494c] mt-10"
              initial={{ opacity: 0, y: 5 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            > 
      
      I'm a <b>developer, designer </b> and <b>singer </b> who has been building for the web in some capacity since 2023. I specialise in accessibility, performance and usability without sacrificing creativity.
 
        

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

export default AboutMe;