"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#00E599]/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal"
          >
            Mastery across modern full-stack web architectures, mobile frameworks, and cloud tools.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-7 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#181822] border border-white/10 flex items-center justify-center text-[#00E599]">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2.5 rounded-full border text-xs font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                      skill.highlight
                        ? "bg-[#161822] border-[#00E599]/40 text-white hover:border-[#00E599] hover:shadow-[#00E599]/20"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
