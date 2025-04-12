"use client";

import Link from "next/link";
import Image from "next/image";

const OpenSource = () => {
  return (
    <div className="py-16 px-6 md:px-12">
      <div className="dot-header mb-12">
        <div className="dot-header__content flow max-w-3xl">
          <h2 className="t-heading text-3xl md:text-4xl font-bold mb-4">
            Open Source<span className="dot">.</span>
          </h2>
          <p className="text-lg leading-relaxed">
            From time to time I like to release open source projects to help the wider web development
            community. Below are two of my most popular releases.
          </p>
        </div>
        <div className="dot-header__dots mt-6">
          <div className="dots h-24 w-full" />
        </div>
      </div>

      <div className="project-promo max-w-6xl mx-auto">
        {/* SynthWave '84 Project */}
        <div className="project-promo__item project grid md:grid-cols-2 gap-8 mb-16">
          <div className="project__header">
            <div className="illustration relative h-64 w-full">
              {/* Base layer */}
              <div className="relative w-full h-full">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <rect width="400" height="256" fill="#a5d0e1" rx="8" />
                </svg>
              </div>

              {/* Decorative layer */}
              <div
                className="illustration__layer absolute inset-0"
                style={{ transform: 'translate(3px, 3px)' }}
              >
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <path d="M50,50 L200,30 L350,50 L350,200 L200,220 L50,200 Z"
                        fill="none" stroke="#8e27e2" strokeWidth="2" />
                </svg>
              </div>

              {/* Static layer */}
              <div className="illustration__layer absolute inset-0">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <text x="50%" y="50%"
                        fontSize="40"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#342c6e">
                    SynthWave '84
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="project__details">
            <div className="flow space-y-6">
              <h3 className="t-heading text-2xl md:text-3xl font-bold">
                SynthWave <b>'84</b><span className="dot">.</span>
              </h3>
              <p>
                I'm a big fan of Visual Studio Code, but when I couldn't find a colour scheme I
                liked, I decided to roll my own. SynthWave '84 was the result.
              </p>
              <p>
                Since I first posted about its development the theme has proven to be wildly
                popular, passing two million downloads in October 2024.
              </p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
                target="_blank"
                rel="noreferrer"
                className="btn inline-block"
              >
                <span className="btn__label">Get SynthWave '84</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rest of the code stays the same */ }
        {/* Tornis Project */}
        <div className="project-promo__item project grid md:grid-cols-2 gap-8 mb-16">
          <div className="project__header">
            <div className="illustration relative h-64 w-full">
              {/* Base layer */}
              <div className="relative w-full h-full">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <rect width="400" height="256" fill="#a5d0e1" rx="8" />
                </svg>
              </div>

              {/* Decorative layer - Lighthouse */}
              <div
                className="illustration__layer absolute inset-0"
                style={{ transform: 'translate(3px, 4px)' }}
              >
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <rect x="150" y="120" width="100" height="80" fill="#ffffff" stroke="#342c6e" />
                  <rect x="180" y="40" width="40" height="80" fill="#ffffff" stroke="#342c6e" />
                  <path d="M165,120 L235,120" stroke="#342c6e" strokeWidth="2" />
                  <path d="M165,140 L235,140" stroke="#342c6e" strokeWidth="2" />
                  <path d="M165,160 L235,160" stroke="#342c6e" strokeWidth="2" />
                  <path d="M165,180 L235,180" stroke="#342c6e" strokeWidth="2" />
                </svg>
              </div>

              {/* Static layer */}
              <div className="illustration__layer absolute inset-0">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <text x="50%" y="25%"
                        fontSize="40"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#342c6e">
                    Tornis
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="project__details">
            <div className="flow space-y-6">
              <h3 className="t-heading text-2xl md:text-3xl font-bold">
                Tornis<span className="dot">.</span>
              </h3>
              <p>
                Tornis is a minimal JavaScript library that watches the state of your browser's
                viewport, allowing you to respond whenever something changes.
              </p>
              <p>
                Think of it as a data store for your viewport, giving you access to screen size,
                mouse cursor position, scroll position, gyroscope and more.
              </p>
              <a
                href="https://tornis.robbowen.digital"
                target="_blank"
                rel="noreferrer"
                className="btn inline-block"
              >
                <span className="btn__label">Get Tornis</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rekishi Project */}
        <div className="project-promo__item project grid md:grid-cols-2 gap-8">
          <div className="project__header">
            <div className="illustration relative h-64 w-full">
              {/* Base layer */}
              <div className="relative w-full h-full">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <rect width="400" height="256" fill="#a5d0e1" rx="8" />
                </svg>
              </div>

              {/* Decorative layer - Abstract rainbow */}
              <div
                className="illustration__layer absolute inset-0"
                style={{ transform: 'translate(3px, 3px)' }}
              >
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <path d="M100,186 A 86,86 0 0 1 186,100" fill="none" stroke="#8e27e2" strokeWidth="16" />
                  <path d="M120,186 A 66,66 0 0 1 186,120" fill="none" stroke="#d29ef1" strokeWidth="16" />
                  <path d="M140,186 A 46,46 0 0 1 186,140" fill="none" stroke="#ffffff" strokeWidth="16" />
                </svg>
              </div>

              {/* Static layer */}
              <div className="illustration__layer absolute inset-0">
                <svg viewBox="0 0 400 256" className="w-full h-full">
                  <text x="50%" y="50%"
                        fontSize="40"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#342c6e">
                    Rekishi
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="project__details">
            <div className="flow space-y-6">
              <h3 className="t-heading text-2xl md:text-3xl font-bold">
                Rekishi<span className="dot">.</span>
              </h3>
              <p>
                Rekishi is a minimal wrapper for the History API that provides additional pub/sub
                functionality.
              </p>
              <p>
                If you need to create dynamic transitions between different pages or different types
                of content, then Rekishi can help.
              </p>
              <a
                href="/wrote-about/introducing-rekishi/"
                className="btn inline-block"
              >
                <span className="btn__label">Get Rekishi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
