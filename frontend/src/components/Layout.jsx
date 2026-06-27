import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { AIConsultant } from "./AIConsultant";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollWidth(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <ScrollToTop />
      <div
        className="scroll-progress"
        style={{ width: `${scrollWidth}%` }}
        data-testid="scroll-progress-indicator"
      />
      <Navigation />
      <main key={location.pathname} className="animate-fadeIn">
        <Outlet />
      </main>
      <AIConsultant />
      <Footer />
    </div>
  );
}
