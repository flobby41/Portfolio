"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutMe from './AboutBand'
import './components.css'; // Importation du CSS modèle


const Work = () => {
  // Références pour les effets de parallaxe
  const driftElements = useRef<NodeListOf<Element> | null>(null);
  const prlxElements = useRef<NodeListOf<Element> | null>(null);
  
  // Création des refs pour l'animation au défilement
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-100px",
  });
  
  const [section1Ref, section1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });
  
  const [section2Ref, section2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });
  
  const [section3Ref, section3InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  useEffect(() => {
     // Défilement automatique vers le haut lors du chargement/refresh de la page
     window.scrollTo({
      top: 0,
      behavior: 'auto' // Utiliser 'auto' pour un défilement instantané ou 'smooth' pour un défilement fluide
    });
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      {/* Intégration des variables CSS de thème en haut du composant */}
      <style jsx global>{`
    :root {
        --bg: #f7f8f9;
        --line: #5269bd;
        --fill: #9bdabe;
        --text: #1c494c;
        --subtext: #73cadc;
        --duo: #9bdabe;
      }
      .stripes {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.93 22.93'%3E%3Cpolygon fill='%239bdabe' points='0 8.18 14.75 22.93 22.74 22.93 0 0.19 0 8.18'/%3E%3Cpolygon fill='%239bdabe' points='22.93 8.37 22.93 0.38 22.56 0 14.56 0 22.93 8.37'/%3E%3C/svg%3E");
        background-size: 11px;
        opacity: 0.6;
      }
      .dots {
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 22.9 22.9' style='enable-background:new 0 0 22.9 22.9;' xml:space='preserve'%3E%3Ccircle fill='%239bdabe' class='st0' cx='5.7' cy='5.9' r='3'/%3E%3Ccircle fill='%239bdabe' class='st0' cx='17.2' cy='17.2' r='3'/%3E%3C/svg%3E%0A");
        background-size: 12px;
      }
        .code__inr {
          background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 121.96 269.35'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%237E66C7;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECode%3C/title%3E%3Cline class='cls-1' x1='11.27' y1='8.69' x2='63.33' y2='8.69'/%3E%3Cline class='cls-1' x1='11.27' y1='16.12' x2='46.87' y2='16.12'/%3E%3Cline class='cls-1' x1='11.27' y1='29.51' x2='56.09' y2='29.51'/%3E%3Cline class='cls-1' x1='21.19' y1='36.25' x2='46.87' y2='36.25'/%3E%3Cline class='cls-1' x1='11.27' y1='214.69' x2='63.33' y2='214.69'/%3E%3Cline class='cls-1' x1='11.27' y1='222.12' x2='46.87' y2='222.12'/%3E%3Cline class='cls-1' x1='21.19' y1='42.9' x2='76.52' y2='42.9'/%3E%3Cline class='cls-1' x1='21.19' y1='49.54' x2='88.71' y2='49.54'/%3E%3C/svg%3E");
          background-size: 100% auto;
          background-repeat: repeat-y;
        }
        /* Style CSS pour le bouton de menu */

        .menu-link{
        position:absolute;
        display:flex;
        top:35px;
        left:150px;
        }
        .menu-link__trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s;
          
        }
      .menu-link:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 26px;
    margin-right: 25px;
    vertical-align: middle;
    background: #919795;
    animation: menuBarIn .45s cubic-bezier(.25,.46,.45,.94) .3s backwards
  }
  

  .hire-me .main svg, 
  .hire-me .shade {
    position: absolute;
    left: -35px;
    top: -40%;
    transform: translateY(0%);
    width: 35px;
    height: 35px;
  }

      `}</style>  
      
      <main className="page-body page-body--header" tabIndex={-1}>
        {/* SVG filtre pour l'effet duotone */}
        <AboutMe/>
        <svg
          style={{
            position: "absolute",
            top: "-900px",
            left: "-900px",
            clip: "rect(0, 0, 0, 0)",
          }}
        >
          <filter id="duotone_filter">
            <feColorMatrix
              type="matrix"
              result="grayscale"
              values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0"
            />
            <feComponentTransfer
              colorInterpolationFilters="sRGB"
              result="duotone"
            >
              <feFuncR
                type="table"
                tableValues="0.615686274509804 1.007843137254902"
              ></feFuncR>
              <feFuncG
                type="table"
                tableValues="-0.17647058823529413 0.9725490196078431"
              ></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.023529411764705882 0.9803921568627451"
              ></feFuncB>
              <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
          </filter>
        </svg>

        <div className="section">
          {/* Header section */}
          <header className="page-header" ref={headerRef}>
            <div className="page-header__inr">
              <motion.div
                className="page-header__content"
                data-prlx="0 0.25"
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
             
             
                
                <motion.span 
                  className="page-header__scroll" 
                  aria-hidden="true"
                  variants={fadeInUp}
                >
                 <span>
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>o</span>
                    <span>l</span>
                    <span>l</span>
                  </span>
                </motion.span>
              </motion.div>
            </div>
          </header>
          
          {/* First section: Considered development */}
          <div className="panels panels--centred" ref={section1Ref}>
            <motion.div 
              className="panels__main"
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <div className="flow">
                <motion.h2 
                  className="t-heading t-lede:s t-medium:m t-medium:l"
                  variants={fadeInUp}
                >
                  Building Digital Experiences, One Project at a Time

                </motion.h2>
                
                {/* ligne hz */}
                <motion.div 
                  className="relative h-[3px] bg-[var(--line)] mt-4 mb-8 w-[30%]"
                  initial={{ scaleX: 0 }}
                  animate={section1InView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{ originX: 0 }}
                />
                
                <motion.p variants={fadeInUp}>
                Originally from Paris, I draw inspiration from the city’s vibrant creative scene to write both code and music.
                </motion.p>
                
                <motion.p variants={fadeInUp}>
               
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              className="panels__side"
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <div className="circle">
                <div className="circle__inr" data-reveal="is-active">
                  <div className="circle__bg stripes" data-drift="-10 -14"></div>
                  <div className="illustration illustration--board">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 596.6 554.39"
                      className="main-board"
                    >
                      <path
                        className="svg-bg"
                        d="M495.76,114.63H362.5L308.56,80.41a13,13,0,0,0-5.28-8A13,13,0,0,0,279.84,78L222,114.63H83.22a14.2,14.2,0,0,0-14.11,14.29V371.07a14.2,14.2,0,0,0,14.11,14.28H495.76a14.19,14.19,0,0,0,14.11-14.28V128.92A14.2,14.2,0,0,0,495.76,114.63ZM281.7,86.75a13.17,13.17,0,0,0,3.51,3.7,13,13,0,0,0,21.87-1l39.7,25.18h-109Z"
                      />
                      <rect
                        className="svg-bg"
                        y="467.84"
                        width="596.6"
                        height="86.55"
                      />
                    </svg>
                    <motion.div 
                      className="illustration__layer" 
                      data-drift="-4 -4"
                      initial={{ x: 5, y: 5 }}
                      animate={section1InView ? { x: 0, y: 0 } : { x: 5, y: 5 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <rect
                          className="svg-fill"
                          x="223.63"
                          y="273.15"
                          width="103.26"
                          height="26.64"
                        />
                        <circle
                          className="svg-fill"
                          cx="237.5"
                          cy="255.96"
                          r="8.94"
                          transform="translate(-52.45 61.41) rotate(-13.28)"
                        />
                        <path
                          className="svg-fill"
                          d="M215.35,239.35H335V188.7H215.35Zm17.85-42.19a.92.92,0,1,1,.73-1.69L275,213.25l41.09-17.78a.92.92,0,0,1,.73,1.69l-39.51,17.09,39.51,17.09a.93.93,0,0,1,.48,1.21.94.94,0,0,1-1.21.48L275,215.25,233.93,233a1,1,0,0,1-.37.07.92.92,0,0,1-.36-1.76l39.5-17.09Z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Second section: Code Choreography */}
          <div className="panels panels--reversed panels--centred" ref={section2Ref}>
            <motion.div 
              className="panels__main"
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <div className="flow">
                <motion.h2 
                  className="t-heading t-lede:s t-medium:m t-medium:l"
                  variants={fadeInUp}
                >
                The Soundtrack to My Code
                <span className="dot">.</span>
                </motion.h2>
                
                <motion.div 
                  className="relative h-[3px] bg-[var(--line)] mt-4 mb-8 w-[30%]"
                  initial={{ scaleX: 0 }}
                  animate={section2InView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{ originX: 0 }}
                />
                
                <motion.p variants={fadeInUp}>
                 
                Before stepping into tech, I spent years immersed in the Parisian music scene as a songwriter, composer, and performer. Leading a French pop project taught me how to balance structure and spontaneity—skills that now fuel my work as a developer. Music remains a big part of my life, and I still find myself reaching for the guitar whenever I need to reset or spark new ideas.


                </motion.p>
                
                <motion.p variants={fadeInUp}>
              
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              className="panels__side"
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <div className="circle">
                <div className="circle__inr" data-reveal="is-active">
                  <div className="circle__bg stripes" data-drift="-10 -14"></div>
                  <div className="illustration illustration--laptop">
                    <div className="laptop-illustration">
                      <svg viewBox="0 0 610 610" className="main-laptop">
                        {/* Version simplifiée du laptop */}
                      </svg>
                    </div>
                    <motion.div 
                      className="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="code__inr" data-prlx="0 -0.075"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Third section: JAMstack */}
          <div className="panels panels--centred" ref={section3Ref}>
            <motion.div 
              className="panels__main"
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <div className="flow">
                <motion.h2 
                  className="t-heading t-lede:s t-medium:m t-medium:l"
                  variants={fadeInUp}
                >
 
 Code, Music, and the Art of Living in 
                                  <b> Sync</b><span className="dot">.</span>
                </motion.h2>
                
                <motion.div 
                  className="relative h-[3px] bg-[var(--line)] mt-4 mb-8 w-[30%]"
                  initial={{ scaleX: 0 }}
                  animate={section3InView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{ originX: 0 }}
                />
                
                <motion.p variants={fadeInUp}>
                <a
                    href="/garcondargent.com"
                    rel="noreferrer"
                    target="_blank"
                    className="ml-1"
                  >
                  </a>
                  Now based in Sweden, I work remotely, blending the methodical side of coding with the artistic process of music creation. For me, Paris is still a constant source of inspiration—its rhythm, its chaos, its unique ability to make even the simplest things feel <b> cinematic</b> . That’s the same feeling I aim to bring to the digital experiences I build: simple, impactful, and a little unexpected.
                </motion.p>
                
                <motion.p variants={fadeInUp}>
                
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              className="panels__side"
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <div className="circle">
                <div className="circle__inr" data-reveal="is-active">
                  <div className="circle__bg stripes" data-drift="-10 -14"></div>
                  <div className="illustration illustration--codeicons">
                    <svg viewBox="0 0 512 512" className="code-icons">
                      {/* Version simplifiée des icônes */}
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          
        </div>
        
  
      </main>
    </>
  );
};

export default Work;