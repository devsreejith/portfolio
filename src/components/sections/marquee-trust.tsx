"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function MarqueeTrustSection() {
  const logos = PORTFOLIO_DATA.trustedLogos;
  const doubleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-black/60 border-y border-white/5 relative overflow-hidden">
      {/* Side Fade Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest font-mono text-gray-500">
          Trusted Modern Technologies & Tools
        </p>
      </div>

      {/* Ticker Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 whitespace-nowrap min-w-max pr-8"
        >
          {doubleLogos.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-[#121218]/60 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md hover:border-[#00E599]/40 hover:bg-white/5 transition-all group"
            >
              <div className="w-2 h-2 rounded-full bg-[#00E599] group-hover:scale-125 transition-transform" />
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
