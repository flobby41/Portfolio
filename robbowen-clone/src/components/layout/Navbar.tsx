"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#EEF5FB] z-50">
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

        {isMenuOpen && (
          <div className="main-menu fixed inset-0 bg-red-200" id="main-menu">
            <div className="main-menu__flyout">
              <div className="main-menu__inr p-8">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-2xl font-bold text-dark-blue">Robb Owen</Link>
                  <button
                    className="text-dark-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <ul className="social-links mb-8">
                  <li className="social-links__item mb-2">
                    <a className="social-links__link social-links__link--bs flex items-center gap-2 text-dark-blue" href="https://bsky.app/profile/robbowen.digital" rel="noopener noreferrer" target="_blank">
                      Follow me on Bluesky
                    </a>
                  </li>
                  <li className="social-links__item mb-2">
                    <a className="social-links__link social-links__link--in flex items-center gap-2 text-dark-blue" href="http://www.instagram.com/robb0wen" rel="noopener noreferrer" target="_blank">
                      Follow me on Instagram
                    </a>
                  </li>
                  <li className="social-links__item mb-2">
                    <a className="social-links__link social-links__link--gh flex items-center gap-2 text-dark-blue" href="https://github.com/robb0wen" rel="noopener noreferrer" target="_blank">
                      Visit my GitHub
                    </a>
                  </li>
                  <li className="social-links__item mb-2">
                    <a className="social-links__link social-links__link--rss flex items-center gap-2 text-dark-blue" href="/feed.xml" rel="noopener noreferrer" target="_blank">
                      Subscribe to my RSS feed
                    </a>
                  </li>
                  <li className="social-links__item mb-2">
                    <a className="social-links__link social-links__link--email flex items-center gap-2 text-dark-blue" href="mailto:hello@robbowen.digital" rel="noopener noreferrer" target="_blank">
                      Send me an Email
                    </a>
                  </li>
                </ul>

                <ul className="main-menu__links primary-links">
                  <li className="primary-links__item mb-4">
                    <Link
                      href="/"
                      className="primary-links__link t-primary text-xl font-bold"
                      aria-describedby="desc_home"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <span id="desc_home" className="primary-links__summary block text-sm text-gray-500">
                      Back to the home page.
                    </span>
                  </li>
                  <li className="primary-links__item mb-4">
                    <Link
                      href="/work"
                      className="primary-links__link t-primary text-xl font-bold"
                      aria-describedby="desc_work"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Work
                    </Link>
                    <span id="desc_work" className="primary-links__summary block text-sm text-gray-500">
                      My approach to development.
                    </span>
                  </li>
                  <li className="primary-links__item mb-4">
                    <Link
                      href="/about"
                      className="primary-links__link t-primary text-xl font-bold"
                      aria-describedby="desc_about"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <span id="desc_about" className="primary-links__summary block text-sm text-gray-500">
                      A little about me and my background.
                    </span>
                  </li>
                  <li className="primary-links__item mb-4">
                    <Link
                      href="/writing"
                      className="primary-links__link t-primary text-xl font-bold"
                      aria-describedby="desc_writing"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Writing
                    </Link>
                    <span id="desc_writing" className="primary-links__summary block text-sm text-gray-500">
                      My latest writing on tech and language.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
