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
      <div className="flex"style={{ columnGap: "0.4rem" }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`text-xs ${inter.className}`} // Applique la classe générée par next/font
            initial={{ y: 0, color: "#919795" }}
            animate={{ 
              y: [0, -6, 0, -6, 0],
              color: ["#919795", "#A8D7E6", "#A8D7E6", "#A8D7E6", "#919795"]
            }}
            transition={{
              y: {
                times: [0, 0.2, 0.4, 0.6, 0.8],
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 5,
                delay: index * 0.1,
              },
              color: {
                times: [0, 0.2, 0.4, 0.6, 0.8],
                duration: 1.5,
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
      <div className="h-32 w-[1px] bg-[#3a78c9] mt-6" />
    </div>
  );
};

export default ScrollIndicator; 