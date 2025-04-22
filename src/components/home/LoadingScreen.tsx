"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Changez l'export pour un export default
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Animation des points
  const dotsVariants = {
    initial: {
      opacity: 0
    },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        delay: i * 0.1
      }
    })
  };
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#aadcec] z-50 flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{
            y: "100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
        >
          <motion.div
            className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={dotsVariants}
                initial="initial"
                animate="animate"
                className="w-2 h-2 bg-white rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

