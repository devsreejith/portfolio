"use client";

import { motion } from "framer-motion";
import { Check, Code2, Server, Smartphone } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function WhatIDoSection() {
  const services = PORTFOLIO_DATA.whatIDo;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code-2":
        return <Code2 className="w-6 h-6 text-[#00E599]" />;
      case "smartphone":
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case "server":
        return <Server className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-[#00E599]" />;
    }
  };

  return (
    <section id="work" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            What I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
          >
            Specialized engineering solutions built for speed, scalability, and seamless user experiences.
          </motion.p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-7 flex flex-col justify-between shadow-2xl relative group hover:border-white/20 transition-all duration-300"
            >
              {/* Subtle Gradient Backlight */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 rounded-[28px] transition-opacity duration-500 pointer-events-none`}
              />

              <div className="space-y-6 relative z-10">
                {/* Header Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-[#1c1c24] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-300 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00E599]" />
                      </div>
                      <span>{feat}</span>
                    </div>
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
