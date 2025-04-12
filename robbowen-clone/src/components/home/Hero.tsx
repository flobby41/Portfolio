"use client";

import Avatar from "./Avatar";

const Hero = () => {
  return (
    <header className="page-header page-header--masthead py-12 px-6 md:px-12 relative">
      <div className="page-header__inr max-w-6xl mx-auto">
        <div
          className="page-header__content relative"
          style={{ transform: 'translate3d(0px, 0px, 0px)' }}
        >
          <h1 className="page-header__title lh-tight t-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, my <br />name is <b>Robb</b><span className="dot">.</span>
          </h1>
          <p className="page-header__lede lh-loose t-primary text-lg md:text-xl max-w-xl">
            I'm an <b>independent creative developer</b> from Abergavenny, South Wales.
          </p>
        </div>
      </div>

      <div className="avatar-bg max-w-xl mx-auto mt-8">
        <Avatar />
      </div>

      <div className="scroll-indicator flex justify-center mt-16">
        <div className="scroll text-text-gray uppercase text-sm tracking-widest">
          Scroll
        </div>
      </div>
    </header>
  );
};

export default Hero;
