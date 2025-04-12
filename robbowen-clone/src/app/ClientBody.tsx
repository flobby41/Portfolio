"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-off-white";
  }, []);

  return (
    <body className="antialiased bg-off-white" suppressHydrationWarning>
      <div className="pagewrap min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="page-body flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}
