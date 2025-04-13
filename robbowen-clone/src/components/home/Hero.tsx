"use client";

import Avatar from "./Avatar";
import { motion } from "framer-motion";
import Image from 'next/image';


const Hero = () => {
  return (
    <motion.div 
      className="flex items-center justify-between max-w-6xl mx-auto py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 pr-12">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, my name is Florian.
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm an independent creative developer from Paris, France.
        </motion.p>
      </div>

      <motion.div 
        className="relative w-80 h-80"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/profile.jpg"
          alt="Florian's profile"
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
