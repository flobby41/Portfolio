"use client";

import { useState } from "react";
import Link from "next/link";
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
        duration: 0.5, // ⚡️ Réduit de 0.8 à 0.5
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.05 // ⚡️ Réduit de 0.1 à 0.05 pour accélérer l'animation des enfants
      }
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0,
        ease: [0.76, 0, 0.24, 1],
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    initial: { 
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // ⚡️ Réduit de 0.8 à 0.4
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0
      }
    }
  };

  const socialIconsVariants = {
    initial: { 
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // ⚡️ Plus rapide que les autres animations
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0
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
        <div className="flex items-center gap-8 z-50">
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
                <span className="menu-link__label font-bold">
                  {isMenuOpen ? 'CLOSE' : 'MENU'}
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 z-50">
          <Link
            href="mailto:florian.cheheb@gmail.com?subject=🤘 Hi Florian, I'd like to hire you"
            className="hire-me flex items-center gap-2 text-dark-blue text-sm font-['Inter'] tracking-[0.2em] font-bold transition-all duration-300 hover:tracking-[0.3em]"
          >
            <div className="shade" data-drift="-4 -6" data-drift-center="y" style={{ transform: "translateY(-50%) translate(-3.94702px, 2.41256px)" }}>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path className="filled-path" d="M30.78,9.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L42.37,50.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C10.42,45,6.24,38.52,6.24,31.2,6.24,19.53,17.26,9.87,30.78,9.87Z"></path>
              </svg>
            </div>
            <div className="main">
              <svg viewBox="0 0 60 60" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path className="stroke-path" d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z" />
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
              className="main-menu fixed top-[20px] left-5 right-5 bottom-0  bg-red-300"
              id="main-menu"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="main-menu__flyout">
                <div className="main-menu__inr p-8 grid grid-rows-[50px_auto]  min-h-screen">
                  <motion.div 
                    className="flex justify-between items-center mb-8"
                    variants={itemVariants}
                  >
                  </motion.div>
                  <div className="flex items-center gap-8">

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
                    className="relative h-[3px] bg-[#7f00e0]"
                  />

                  {/* Social Icons */}
                  <motion.div 
                    className="flex space-x-4"
                    variants={{
                      animate: {
                        transition: {
                          delayChildren: 0.5,
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {socialIcons.map((social) => (
                      <motion.a
                        key={social.icon}
                        href={social.href}
                        className="group text-[#342c6e] hover:text-[#f5f5f5] transition-colors"
                        variants={socialIconsVariants}
                      >
                        <span className="sr-only">{social.label}</span>
                        {social.icon === 'linkedIn' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
                            <path fill="#FCA5A5" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/>
                          </svg>
                        )}
                        {social.icon === 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30">
                            <path fill="" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                          </svg>
                        )}
                        {social.icon === 'mail' && (
                          <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          width="28" 
                          height="28" 
                          viewBox="0 0 22 22"
                        >
                          <g 
                            fill="" 
                            transform="translate(2, 5) scale(0.5)"
                          >
                            <path d="M19,15.4615385 L36.3076923,0.461538462 L1.69230769,0.461538462 L19,15.4615385 Z M14.3251765,13.8010536 L19,17.6382399 L23.6015813,13.8010536 L36.3076923,24.6923077 L1.69230769,24.6923077 L14.3251765,13.8010536 Z M0.538461538,23.5384615 L0.538461538,1.61538462 L13.2307692,12.5769231 L0.538461538,23.5384615 Z M37.4615385,23.5384615 L37.4615385,1.61538462 L24.7692308,12.5769231 L37.4615385,23.5384615 Z"/>
                          </g>
                        </svg>
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                  </div>


                  <motion.ul className="main-menu__links primary-links"
                  variants={{
                    animate: {
                      transition: {
                        delayChildren: 0.7, // ⚡️ Apparaît après les icônes sociales
                        staggerChildren: 0.05
                      }
                    }
                  }}>
                    {[
                      { href: "/", title: "Home", desc: "Back to the home page." },
                      { href: "/work", title: "Work", desc: "My approach to development." },
                      { href: "/about", title: "About", desc: "A little about me and my background." },
                      { href: "/writing", title: "Writing", desc: "My latest writing on tech and language." }
                    ].map((link, index) => (
                      <motion.li 
                        key={link.href}
                        className="primary-links__item mb-4 flex items-baseline gap-8"
                        variants={itemVariants}
                      >
                        <Link
                          href={link.href}
                          className="primary-links__link t-primary text-4xl font-bold mb-5"
                          aria-describedby={`desc_${link.title.toLowerCase()}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                        <span 
                          id={`desc_${link.title.toLowerCase()}`} 
                          className="primary-links__summary block "
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
