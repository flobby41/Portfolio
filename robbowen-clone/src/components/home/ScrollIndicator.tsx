"use client";

import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const letters = "SCROLL".split("");

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex space-x-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div 
        className="h-32 w-[1px] bg-gray-300 mt-6"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeOut"
        }}
      />
    </div>
  );
};

export default ScrollIndicator; 