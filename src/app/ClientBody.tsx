"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/home/LoadingScreen";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased bg-white";
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <body className="antialiased bg-[#EEF5FB]" suppressHydrationWarning>
      <div className="pagewrap min-h-screen flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main id="main-content" className="page-body flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}