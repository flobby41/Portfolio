"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Changez l'export pour un export default
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#87CEEB] z-50 flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{
            y: "100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
        >
          <motion.h1
            className="text-white text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.5,
                ease: "easeIn"
              }
            }}
          >
            Welcome
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

