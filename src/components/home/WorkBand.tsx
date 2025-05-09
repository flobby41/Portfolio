"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const WorkBand = () => {
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
              className="font-bitter text-[4.68rem] text-[#0f1b61] leading-[67.5px] [-webkit-font-smoothing:antialiased]"
              initial={{ opacity: 0, y: 20 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                delay: 0.5,          
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
            About my work
            
            <span className="text-[#f67796]">.</span>
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
        className="relative h-[3px] bg-[#f67796] mt-10 ml-auto" 
        style={{ 
          transformOrigin: "right",
          right: 0
        }}
      />

      {/* Nouveau contenu */}
      <motion.p 
              className="font-bitter text-3xl text-[#0f1b61] mt-10"
              initial={{ opacity: 0, y: 5 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
      
      De senaste åren har jag arbetat med att utveckla headless-webbshoppar och digitala tjänster i Next.js, React och Node.js, där jag haft helhetsansvar från idé till deployment.
      <p>Jag är en frontendutvecklare specialiserad på e-handel och headless-arkitektur. De senaste åren har jag byggt kompletta headless-webbshoppar med <strong>Next.js</strong>, <strong>React</strong>, <strong>Sanity</strong> och <strong>Shopify Storefront API</strong>, med fokus på prestanda, UX och SEO. Jag drivs av att skapa snabba, tillgängliga och konverterande digitala kundresor, och arbetar gärna nära produkt, CRO och UX-designers för att optimera upplevelsen från idé till release.</p>


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

export default WorkBand;