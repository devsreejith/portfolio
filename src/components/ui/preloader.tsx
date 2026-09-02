"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0B0B0F] flex items-center justify-center select-none"
        >
          {/* 20px Minimal Dark Loader with Rotating Crescent Light Arc */}
          <div className="relative w-[20px] h-[20px] flex items-center justify-center">
            <svg
              className="w-[20px] h-[20px] animate-spin"
              style={{ animationDuration: "0.65s", animationTimingFunction: "linear" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="crescent-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Thin Glowing White Crescent Arc */}
              <path
                d="M 12 2 A 10 10 0 0 1 22 12"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                filter="url(#crescent-glow)"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
