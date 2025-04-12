"use client";

import { useEffect, useState } from "react";
import Avatar from "./Avatar";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);

  useEffect(() => {
    // Séquence d'animations pour l'apparition progressive
    const timeouts = [
      setTimeout(() => setIsLoaded(true), 100),
      setTimeout(() => setTitleVisible(true), 400),
      setTimeout(() => setSubtitleVisible(true), 900),
      setTimeout(() => setScrollIndicatorVisible(true), 1500)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <header className="page-header page-header--masthead py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="page-header__inr max-w-6xl mx-auto">
        <div
          className="page-header__content relative"
          style={{ 
            transform: `translate3d(0px, ${isLoaded ? '0px' : '10px'}, 0px)`,
            transition: 'transform 0.5s ease-out',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <h1 
            className="page-header__title lh-tight t-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              transform: `translate3d(0px, ${titleVisible ? '0px' : '20px'}, 0px)`,
              opacity: titleVisible ? 1 : 0,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
            }}
          >
            Hi, my <br />name is <b>Robb</b><span className="dot">.</span>
          </h1>
          <p 
            className="page-header__lede lh-loose t-primary text-lg md:text-xl max-w-xl"
            style={{
              transform: `translate3d(0px, ${subtitleVisible ? '0px' : '15px'}, 0px)`,
              opacity: subtitleVisible ? 1 : 0,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out',
              transitionDelay: '0.1s'
            }}
          >
            I'm an <b>independent creative developer</b> from Abergavenny, South Wales.
          </p>
        </div>
      </div>

      <div className="avatar-bg max-w-xl mx-auto mt-8">
        <Avatar />
      </div>

      <div 
        className="scroll-indicator flex justify-center mt-16"
        style={{
          opacity: scrollIndicatorVisible ? 0.7 : 0,
          transform: `translateY(${scrollIndicatorVisible ? '0' : '10px'})`,
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <div className="scroll text-text-gray uppercase text-sm tracking-widest">
          Scroll
        </div>
      </div>
    </header>
  );
};

export default Hero;
