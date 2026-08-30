"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            About Me
          </motion.h2>
        </div>

        {/* Main Split Grid */}
        <div className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-10 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Main Portrait Box */}
            <div className="h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#1c1c24] via-[#121218] to-black border border-white/15 overflow-hidden relative group p-4 flex flex-col justify-end shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Sreejith S"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 bg-black/80 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                <div className="text-xs font-bold text-white">Sreejith S</div>
                <div className="text-[10px] text-[#00E599] font-mono">Software Engineer</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading & Story Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
              {PORTFOLIO_DATA.about.heading}
            </h3>

            <div className="space-y-5 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {PORTFOLIO_DATA.about.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
