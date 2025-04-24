import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const HorizontalBand = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "-150px",
  });

  return (
    <div ref={ref} className="relative w-full overflow-hidden my-16">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          delay: 0.3, // Réduit de 1.2 à 0.3
          duration: 0.4, // Réduit de 0.6 à 0.4
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mt-12 pl-24"
      >
        <div className="relative">
          <h2 className="font-bitter text-[4rem] text-[#0A0F4C] leading-[67.5px] [-webkit-font-smoothing:antialiased]">
            Let&apos;s work together
            <span className="text-[#73BBC5]">.</span>
          </h2>
        </div>
      </motion.div>

      {/* Bande horizontale */}
      <motion.div
        initial={{ x: "100%", width: "10%" }}
        animate={inView ? { 
          x: 0,
          width: ["20%", "10%"],
        } : { x: "100%", width: "100%" }}
        transition={{
          x: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }, // Réduit de 0.8 à 0.5
          width: {
            delay: 0.4, // Réduit de 0.8 à 0.4
            duration: 0.3, // Réduit de 0.4 à 0.3
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        className="relative h-[5px] bg-[#73BBC5] ml-24 mt-8"
      />

      {/* Nouveau contenu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          delay: 0.6, // Réduit de 1.6 à 0.6
          duration: 0.4, // Réduit de 0.6 à 0.4
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mt-16 pl-24 max-w-4xl"
      >
        <p className="text-[#0A0F4C] text-xl leading-relaxed mb-8">
          From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. I help awesome people to build ambitious yet accessible web projects - <span className="font-semibold">the wilder, the better</span>.
        </p>
        
        <motion.a href="" className="btn"
        >
          <span className="btn__label">
          About my approach
          </span>
          <motion.span 
    className="btn__fill stripes" 
    data-drift="-10 -12" 
    aria-hidden="true"
    initial={{ x: -4.95845, y: 7.15695 }}
    whileHover={{ 
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }}
  >
    About my approach
  </motion.span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HorizontalBand;