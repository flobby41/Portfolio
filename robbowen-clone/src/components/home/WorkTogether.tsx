"use client";

import Link from "next/link";

const WorkTogether = () => {
  return (
    <div className="panels py-16 px-6 md:px-12">
      <div className="panels__main max-w-3xl mx-auto">
        <div className="article-heading mb-8">
          <h2 className="article-heading__title t-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            <span>
              Let's work <b>together</b><span className="dot">.</span>
            </span>
          </h2>
        </div>

        <div className="flow reveal-content space-y-6">
          <p className="text-lg leading-relaxed">
            <span className="md:hidden">
              I'm an <b>independent creative developer</b> from Abergavenny, South Wales.{" "}
            </span>
            From interaction design to scaleable design systems, single-page apps to something more
            experimental with WebGL. I help awesome people to build ambitious yet accessible web projects - {" "}
            <b>the wilder, the better</b>.
          </p>

          <Link href="/work" className="btn inline-block">
            <span className="btn__label">About my approach</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
