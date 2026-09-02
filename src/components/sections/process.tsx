"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Search } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ProcessSection() {
  const steps = PORTFOLIO_DATA.process;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-[#00E599]" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#00E599]" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            Engineering Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
          >
            A disciplined, 3-step workflow from architectural planning to production launch.
          </motion.p>
        </div>

        {/* 3 Steps Stack */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Step Meta */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00E599] font-bold bg-[#00E599]/10 border border-[#00E599]/25 px-3 py-1 rounded-full">
                      STEP {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#1c1c24] border border-white/10 flex items-center justify-center">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Right Mock Code Block */}
                <div className="lg:col-span-6 bg-[#09090d] border border-white/10 rounded-2xl p-4 font-mono text-xs text-emerald-400/90 overflow-x-auto shadow-inner">
                  <pre className="leading-relaxed">
                    <code>{step.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
