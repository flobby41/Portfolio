"use client"

import React from 'react';
import Work from '@/components/home/Work';
import { motion } from "framer-motion";


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function WorkPage() {
  return (
  
  <motion.div 
          className=""
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
    <Work />
  </motion.div>

)
}