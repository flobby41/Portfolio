"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    initial: { 
      y: "-100%"
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    initial: { 
      y: 40,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIcons = [
    { href: "https://www.linkedin.com/in/florian-dev/", icon: "linkedIn", label: "linkedIn" },
    { href: "https://github.com/flobby41", icon: "github", label: "GitHub" },
    { href: "mailto:florian.cheheb@gmail.com?subject=🤘 Hi Florian, I'd like to hire you", icon: "mail", label: "Email" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="bg-white h-[15px] w-full"></div>
      <div className="mainnav flex justify-between items-center w-full py-4 px-6">
        <div className="flex items-center gap-8">
          <div className="logo-wrap">
            <Link href="/" className="block">
              <span className="u-vhide">Back to the homepage</span>
              <span className="logo relative w-[60px] h-[60px] block">
                <div className="logo__sugarloaf">
                  <div className="logo">
                    <svg viewBox="0 0 22.93 22.93" width="60" height="60">
                      <polygon fill="#aadcec" points="0 8.18 14.75 22.93 22.74 22.93 0 0.19 0 8.18" />
                      <polygon fill="#aadcec" points="22.93 14.75 0 14.75 0 22.93 22.93 22.93 22.93 14.75" />
                      <polygon fill="#8e27e2" points="8.04 0 0 0 0 8.04 8.04 0" />
                    </svg>
                  </div>
                </div>
              </span>
            </Link>
          </div>

          <div className="menu-link">
            <button
              className="menu-link__trigger flex items-center gap-2 text-dark-blue text-sm font-['Inter'] tracking-[0.2em] transition-all duration-300 hover:tracking-[0.3em]"
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              onClick={toggleMenu}
            >
              <span className="menu-link__mask">
                <span className="menu-link__label font-bold">MENU</span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:florian.cheheb@gmail.com?subject=🤘 Hi Florian, I'd like to hire you"
            className="hire-me flex items-center gap-2 text-dark-blue text-sm font-['Inter'] tracking-[0.2em] font-bold transition-all duration-300 hover:tracking-[0.3em]"
          >
            <div className="main">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="12" r="10" fill="#a5d0e1" stroke="none" />
                <path d="M12 16v-4M12 8h.01" stroke="#342c6e" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            HIRE ME
          </Link>
        </div>

        {/* Texte vertical */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 transform">
          <div className="vertical-text font-mono text-xs tracking-wider text-gray-400" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            © MMXXV. Gwneud yn Ne Cymru.
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="main-menu fixed inset-0 bg-[#aadcec]"
              id="main-menu"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="main-menu__flyout">
                <div className="main-menu__inr p-8">
                  <motion.div 
                    className="flex justify-between items-center mb-8"
                    variants={itemVariants}
                  >
                   
                    <button
                      className="text-dark-blue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Bande horizontale */}
                  <motion.div
                    initial={{ x: "100%", width: "10%" }}
                    animate={{ 
                      x: 0,
                      width: ["20%", "10%"],
                    }}
                    transition={{
                      x: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                      width: {
                        delay: 0.8,
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      },
                    }}
                    className="relative h-[2px] bg-[#342c6e] mt-8 mb-8"
                  />

                  {/* Social Icons */}
                  <motion.div 
                    className="flex space-x-8 mb-12"
                    variants={{
                      animate: {
                        transition: {
                          delayChildren: 1.2,
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {socialIcons.map((social) => (
                      <motion.a
                        key={social.icon}
                        href={social.href}
                        className="text-[#342c6e] hover:text-[#8e27e2] transition-colors"
                        variants={itemVariants}
                      >
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </motion.div>

                  <motion.ul className="main-menu__links primary-links">
                    {[
                      { href: "/", title: "Home", desc: "Back to the home page." },
                      { href: "/work", title: "Work", desc: "My approach to development." },
                      { href: "/about", title: "About", desc: "A little about me and my background." },
                      { href: "/writing", title: "Writing", desc: "My latest writing on tech and language." }
                    ].map((link, index) => (
                      <motion.li 
                        key={link.href}
                        className="primary-links__item mb-4"
                        variants={itemVariants}
                      >
                        <Link
                          href={link.href}
                          className="primary-links__link t-primary text-6xl font-bold"
                          aria-describedby={`desc_${link.title.toLowerCase()}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                        <span 
                          id={`desc_${link.title.toLowerCase()}`} 
                          className="primary-links__summary block text-sm text-gray-500"
                        >
                          {link.desc}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
