"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Research & Strategy",
      description: "I begin every project with thorough user research and stakeholder interviews to understand the problem space and align on project goals.",
      type: "wireframe",
    },
    {
      title: "Design & Prototype",
      description: "From wireframes to high-fidelity designs, I create interactive prototypes that bring ideas to life and enable early user testing.",
      type: "code",
    },
    {
      title: "Test & Refine",
      description: "Through continuous user testing and data analysis, I iterate and refine designs until they deliver exceptional user experiences and measurable results.",
      type: "metrics",
    },
  ];

  return (
    <section id="process" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Horizon Ambient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            My Process
          </motion.h2>
        </div>

        {/* 3 Step Cards Grid (Matching Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Research & Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -6 }}
            className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Top Visual Mockup Box */}
              <div className="bg-[#09090d] border border-white/10 rounded-2xl p-4 mb-6 relative overflow-hidden">
                <div className="bg-[#15151e] border border-white/10 rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                    <span>Research & Strategy</span>
                    <span className="text-[#00E599]">🕒 Week 1-2</span>
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Understanding users and business goals
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[9px] text-gray-400 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#00E599]/20 text-[#00E599] flex items-center justify-center font-bold text-[8px]">S</div>
                      <span>Sreejith S • Insights</span>
                    </div>
                    <span>↗</span>
                  </div>
                </div>
              </div>

              {/* Title & Paragraph */}
              <h3 className="text-xl font-display font-semibold text-white mb-2 tracking-tight">
                Research & Strategy
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                I begin every project with thorough <strong className="text-gray-200 font-semibold">user research</strong> and stakeholder interviews to understand the problem space and align on project goals.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Design & Prototype (Code Window) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Code Window Box */}
              <div className="bg-[#09090d] border border-white/10 rounded-2xl p-4 mb-6 font-mono text-[10px] relative overflow-hidden">
                <div className="flex items-center gap-1.5 pb-3 border-b border-white/10 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="space-y-1 text-gray-300">
                  <div className="text-gray-500">// Figma Design System</div>
                  <div><span className="text-cyan-400">const</span> <span className="text-amber-300">components</span> = &#123;</div>
                  <div className="pl-3"><span className="text-emerald-400">button</span>: <span className="text-cyan-300">"primary-cta"</span>,</div>
                  <div className="pl-3"><span className="text-emerald-400">card</span>: <span className="text-cyan-300">"glass-container"</span>,</div>
                  <div className="pl-3"><span className="text-emerald-400">typography</span>: <span className="text-cyan-300">"system-fonts"</span></div>
                  <div>&#125;;</div>
                  <div className="text-gray-500 pt-1">// Interactive prototypes</div>
                  <div><span className="text-purple-400">function</span> <span className="text-blue-400">createPrototype</span>() &#123;</div>
                  <div className="pl-3"><span className="text-purple-400">return</span> userTesting;</div>
                  <div>&#125;</div>
                </div>
              </div>

              {/* Title & Paragraph */}
              <h3 className="text-xl font-display font-semibold text-white mb-2 tracking-tight">
                Design & Prototype
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                From wireframes to high-fidelity designs, I create <strong className="text-gray-200 font-semibold">interactive prototypes</strong> that bring ideas to life and enable early user testing.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Test & Refine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Metrics Visual Box */}
              <div className="bg-[#09090d] border border-white/10 rounded-2xl p-4 mb-6 relative overflow-hidden">
                <div className="bg-[#15151e] border border-white/10 rounded-xl p-3 space-y-2 text-[10px]">
                  <div className="flex items-center justify-between text-gray-300 font-semibold">
                    <span>USABILITY</span>
                    <span className="text-[#00E599] font-mono">+94%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00E599] h-full w-[94%] rounded-full" />
                  </div>
                  <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-gray-400 text-[9px]">
                    <div>Task Success: <span className="text-white font-mono">94%</span></div>
                    <div>Satisfaction: <span className="text-[#00E599] font-mono">4.8/5</span></div>
                  </div>
                </div>
              </div>

              {/* Title & Paragraph */}
              <h3 className="text-xl font-display font-semibold text-white mb-2 tracking-tight">
                Test & Refine
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Through continuous <strong className="text-gray-200 font-semibold">user testing</strong> and data analysis, I iterate and refine designs until they deliver exceptional user experiences and measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
