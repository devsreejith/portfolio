"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
          >
            A timeline of key full-stack engineering roles and client contributions.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Continuous Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-white/10" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 group relative"
              >
                {/* Dedicated Indicator Circle Column */}
                <div className="shrink-0 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#121217] border-2 border-[#00E599] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#00E599]" />
                  </div>
                </div>

                {/* Experience Card Content */}
                <div className="flex-1 bg-[#121217] border border-white/10 rounded-[24px] p-6 sm:p-8 shadow-2xl space-y-4 group-hover:border-white/20 transition-all duration-300">
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] font-medium pt-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono text-gray-300 bg-[#1c1c24] border border-white/10 px-2.5 py-1 rounded-md"
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
      </div>
    </section>
  );
}
