"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageLoaded, setPageLoaded] = useState(false);

  // Remove any extension-added classes during hydration and setup animations
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-off-white";
    
    // Add a slight delay to ensure smooth animations
    const timeout = setTimeout(() => {
      setPageLoaded(true);
      document.body.classList.add('is-loaded');
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <body className="antialiased bg-off-white" suppressHydrationWarning>
      <div 
        className={`pagewrap min-h-screen flex flex-col ${pageLoaded ? 'page-ready' : ''}`}
        style={{
          opacity: pageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        <Navbar />
        <main 
          id="main-content" 
          className="page-body flex-grow" 
          tabIndex={-1}
          style={{
            animation: pageLoaded ? 'fadeIn 0.6s ease forwards 0.3s' : 'none'
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}
