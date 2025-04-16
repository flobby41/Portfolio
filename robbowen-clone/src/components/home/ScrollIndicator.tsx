"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ScrollIndicator = () => {
  const letters = "SCROLL".split("");

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex space-x-2">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`text-xs ${inter.className}`} // Applique la classe générée par next/font
            initial={{ y: 0, color: "#8a8f96" }}
            animate={{ 
              y: [0, -10, 0, -10, 0],
              color: ["#9CA3AF", "#87CEEB", "#87CEEB", "#87CEEB", "#9CA3AF"]
            }}
            transition={{
              y: {
                times: [0, 0.2, 0.4, 0.6, 0.8],
                duration: 1,
                repeat: Infinity,
                repeatDelay: 5,
                delay: index * 0.1,
              },
              color: {
                times: [0, 0.2, 0.4, 0.6, 0.8],
                duration: 1,
                repeat: Infinity,
                repeatDelay: 5,
                delay: index * 0.1,
              },
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="h-32 w-[1px] bg-gray-300 mt-6" />
    </div>
  );
};

export default ScrollIndicator; 