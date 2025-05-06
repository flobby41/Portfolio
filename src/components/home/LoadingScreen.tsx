"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  
  // Determine background color based on path
  const bgColor = 
    pathname === "/work" ? "#fcc5d3" : 
    pathname === "/about" ? "#9bdabe" : 
    pathname === "/experiences" ? "#ffdaa5" : 
    "#aadcec";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading loading--in fixed my-4 mx-5 inset-0 z-50 overflow-hidden"
          style={{ backgroundColor: bgColor }}
          initial={{ y: 0 }}
          exit={{
            y: "100%",
            transition: {
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
        >
          <div className="loader fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out">
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

