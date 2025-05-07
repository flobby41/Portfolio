"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();
  
  // Determine background color based on path
  const bgColor = 
    pathname === "/work" ? "#fcc5d3" : 
    pathname === "/about" ? "#9bdabe" : 
    pathname === "/experience" ? "#ffdaa5" : 
    "#aadcec";

  useEffect(() => {
    // Cette approche en deux étapes aide à éviter les problèmes de rendu bloqué
    // D'abord, nous marquons l'écran comme "en train de sortir"
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 600); // Réduit de 800ms à 600ms
    
    // Ensuite, nous le supprimons complètement du DOM après l'animation
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Réduit de 1300ms à 1000ms

    // Garantir que les navigateurs lents aient une expérience raisonnable avec un timeout de sécurité
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 250); // Réduit de 3000ms à 2500ms

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="loading loading--in fixed my-4 mx-5 inset-0 z-50 overflow-hidden"
          style={{ backgroundColor: bgColor }}
          initial={{ y: 0 }}
          animate={{ y: isExiting ? "100%" : 0 }}
          exit={{
            y: "100%",
            transition: {
              duration: 0.4,
            }
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="loader fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-200 ease-out">
            <div className="lds-ellipsis">
              <div className="absolute top-[27px] w-[8px] h-[8px] rounded-full bg-white [animation:lds-ellipsis1_0.6s_infinite] left-[6px]"></div>
              <div className="absolute top-[27px] w-[8px] h-[8px] rounded-full bg-white [animation:lds-ellipsis2_0.6s_infinite] left-[6px]"></div>
              <div className="absolute top-[27px] w-[8px] h-[8px] rounded-full bg-white [animation:lds-ellipsis2_0.6s_infinite] left-[26px]"></div>
              <div className="absolute top-[27px] w-[8px] h-[8px] rounded-full bg-white [animation:lds-ellipsis3_0.6s_infinite] left-[45px]"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

