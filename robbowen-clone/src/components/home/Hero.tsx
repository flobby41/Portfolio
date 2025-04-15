"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import ScrollIndicator from "./ScrollIndicator";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
};

const Hero = () => {
  return (
    <motion.div 
      className="flex items-center justify-between max-w-6xl mx-auto py-0 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 pr-12">
        <motion.h1 
          className="font-bitter text-[4.75rem] leading-[1.1] mb-4 font-normal text-[#0A0F4C]"
          variants={fadeInUp}
          transition={{
            duration: 1.2,
            delay: 1.5,          
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Hi, my <br /> name  is <span className="font-bold">Florian</span>.
        </motion.h1>
        <motion.p 
          className="font-bitter text-3xl text-[#0A0F4C]  "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          I'm an<span className="font-bold"> independent creative developer </span>  from Paris, France.
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
    <ScrollIndicator />
    </motion.div>
  );
};

export default Hero;
