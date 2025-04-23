"use client";

import { useEffect, useRef, useState } from "react";

const Avatar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Dans Avatar.tsx, modifiez les valeurs de couleur
  const colors = {
    primary: '#7C3AED',    // Violet pour les traits
    secondary: '#E0F2FE',  // Bleu clair pour les remplissages
    background: '#ffffff'  // Blanc pour le fond
  };

  // Handle mouse movement to animate the avatar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center of avatar
      const relativeX = (e.clientX - centerX) / (window.innerWidth / 2);
      const relativeY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Limit the amount of movement
      const limitedX = Math.max(-10, Math.min(10, relativeX * 10));
      const limitedY = Math.max(-10, Math.min(10, relativeY * 10));

      setMousePosition({ x: limitedX, y: limitedY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Set loaded after a small delay to trigger animations
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={avatarRef}
      className={`avatar-wrap relative h-[350px] w-[300px] mx-auto ${isLoaded ? 'avatar--ready' : ''}`}
    >
      <div
        className="bar-outer absolute inset-0"
        style={{ transform: `translate3d(0px, ${-mousePosition.y * 3}px, 0px)` }}
      >
        <div
          className="bar stripes absolute inset-0"
          style={{ transform: `translateX(-50%) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
      </div>

      <div className="avatar avatar--intro relative">
        {/* Base avatar layer */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full absolute"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="150" fill={colors.secondary} />
        </svg>

        {/* Face features - simplified for the clone */}
        <div className="avatar__animwrap relative w-full h-full">
          {/* Face outline */}
          <div
            className="face-outline absolute inset-0"
            style={{ transform: `rotate(${mousePosition.x * 0.3}deg)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200,100 Q260,100 280,150 Q300,200 280,250 Q260,300 200,320 Q140,300 120,250 Q100,200 120,150 Q140,100 200,100 Z"
                    fill={colors.background}
                    stroke={colors.primary}
                    strokeWidth="2" />
            </svg>
          </div>

          {/* Eyes - maintenu mais sans lunettes */}
          <div
            className="eyes absolute inset-0"
            style={{ transform: `translateY(${mousePosition.y * 0.5}px) translateX(${mousePosition.x * 0.5}px)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="160" cy="182" rx="8" ry="12" fill={colors.primary} />
              <ellipse cx="240" cy="182" rx="8" ry="12" fill={colors.primary} />
            </svg>
          </div>

          {/* Mouth */}
          <div className="mouth absolute inset-0">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M170,250 Q200,270 230,250"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="3"
                    strokeLinecap="round" />
            </svg>
          </div>

          {/* Cheveux bouclés */}
          <div
            className="hair absolute inset-0"
            style={{ transform: `rotate(${mousePosition.x * 0.1}deg)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cheveux bouclés ajoutés ici */}
              <path d="M120,150 
                       C100,120 110,90 140,100
                       C170,70 200,80 210,110
                       C240,80 270,90 280,110
                       C310,90 340,100 340,140
                       C370,120 390,150 370,180
                       C400,200 380,230 360,220
                       C370,250 340,260 320,240
                       C310,270 280,260 270,240
                       C250,260 220,250 210,230
                       C190,250 160,240 150,210
                       C120,220 100,190 120,150"
                    fill={colors.secondary}
                    stroke={colors.primary}
                    strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;