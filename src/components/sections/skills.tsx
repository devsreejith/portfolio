"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function SkillsSection() {
  const categories = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
          >
            Technologies, frameworks, and developer tools I use to engineer products.
          </motion.p>
        </div>

        {/* 4-Column Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-6 shadow-2xl space-y-5 group hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-display font-semibold text-white tracking-tight">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  {cat.skills.length} Stack
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                      skill.highlight
                        ? "bg-[#00E599]/10 border-[#00E599]/30 text-white font-medium"
                        : "bg-white/5 border-white/10 text-gray-300 hover:text-white"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
