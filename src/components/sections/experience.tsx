"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            Work Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal"
          >
            Track record of building enterprise platforms, Dubai government solutions, and international apps.
          </motion.p>
        </div>

        {/* Timeline Container with Perfect Center-Aligned Line */}
        <div className="relative space-y-8">
          {/* Vertical Timeline Line (Passes Exactly Through Center of All 24px Indicator Circles) */}
          <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-[#00E599]/40" />

          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex items-start gap-4 sm:gap-6 group"
            >
              {/* Perfectly Centered Circle Indicator Dot */}
              <div className="relative z-10 shrink-0 mt-5">
                <div className="w-6 h-6 rounded-full bg-[#050505] border-2 border-[#00E599] flex items-center justify-center shadow-[0_0_12px_rgba(0,229,153,0.4)] group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#00E599]" />
                </div>
              </div>

              {/* Card Container */}
              <div className="flex-1 bg-[#121217] border border-white/10 rounded-[24px] p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#00E599] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#00E599] flex items-center gap-2 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3 h-3 text-[#00E599]" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
