"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutSection() {
  const { heading, paragraphs } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Subtle Title Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-[#121217] border border-white/10 rounded-[28px] p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-mono text-[#00E599] uppercase tracking-wider font-semibold">
                  About
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight leading-tight">
                  Software Engineer & Solution Architect
                </h3>
                <div className="w-12 h-1 bg-[#00E599] rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Paragraph Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
              {heading}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
