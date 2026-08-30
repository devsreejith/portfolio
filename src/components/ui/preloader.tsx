"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Initiate fade-out after 1 second
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 400);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center select-none transition-opacity duration-400 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Centered Circular White Spinner Loader */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Subtle Outer Track Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />

        {/* Pure Tailwind CSS Animated White Spinning Arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white/80 animate-spin shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
      </div>
    </div>
  );
}
