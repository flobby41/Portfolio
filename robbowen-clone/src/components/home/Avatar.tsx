"use client";

import { useEffect, useRef, useState } from "react";

const Avatar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

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
          <circle cx="200" cy="200" r="150" fill="#a5d0e1" />
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
                    fill="#ffffff"
                    stroke="#342c6e"
                    strokeWidth="2" />
            </svg>
          </div>

          {/* Glasses */}
          <div
            className="glasses absolute inset-0"
            style={{ transform: `translateY(${mousePosition.y * 0.2}px) translateX(${mousePosition.x * 0.2}px)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="130" y="160" width="60" height="45" rx="10" fill="none" stroke="#342c6e" strokeWidth="4" />
              <rect x="210" y="160" width="60" height="45" rx="10" fill="none" stroke="#342c6e" strokeWidth="4" />
              <line x1="190" y1="182" x2="210" y2="182" stroke="#342c6e" strokeWidth="4" />
              <line x1="130" y1="182" x2="110" y2="175" stroke="#342c6e" strokeWidth="4" />
              <line x1="270" y1="182" x2="290" y2="175" stroke="#342c6e" strokeWidth="4" />
            </svg>
          </div>

          {/* Eyes */}
          <div
            className="eyes absolute inset-0"
            style={{ transform: `translateY(${mousePosition.y * 0.5}px) translateX(${mousePosition.x * 0.5}px)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="160" cy="182" r="6" fill="#342c6e" />
              <circle cx="240" cy="182" r="6" fill="#342c6e" />
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
                    stroke="#342c6e"
                    strokeWidth="3"
                    strokeLinecap="round" />
            </svg>
          </div>

          {/* Hair */}
          <div
            className="hair absolute inset-0"
            style={{ transform: `rotate(${mousePosition.x * 0.1}deg)` }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M120,150 Q150,80 200,80 Q250,80 280,150"
                    fill="none"
                    stroke="#342c6e"
                    strokeWidth="4" />
              <path d="M280,150 L300,120 L320,150 L340,140"
                    fill="none"
                    stroke="#342c6e"
                    strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
