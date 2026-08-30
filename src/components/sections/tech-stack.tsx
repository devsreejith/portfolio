"use client";

import { motion } from "framer-motion";
import { Atom, Box, Cloud, Cpu, Database, Flame, GitBranch, Leaf, Zap } from "lucide-react";

export default function TechStackShowcase() {
  const techItems = [
    { name: "React", icon: <Atom className="w-6 h-6 text-[#00E599]" />, glow: "hover:shadow-[#00E599]/30" },
    { name: "Next.js 15", icon: <Zap className="w-6 h-6 text-white" />, glow: "hover:shadow-white/30" },
    { name: "Node.js", icon: <Cpu className="w-6 h-6 text-green-400" />, glow: "hover:shadow-green-500/30" },
    { name: "MongoDB", icon: <Leaf className="w-6 h-6 text-emerald-400" />, glow: "hover:shadow-emerald-500/30" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6 text-cyan-400" />, glow: "hover:shadow-cyan-500/30" },
    { name: "Firebase", icon: <Flame className="w-6 h-6 text-amber-400" />, glow: "hover:shadow-amber-500/30" },
    { name: "Docker", icon: <Box className="w-6 h-6 text-blue-400" />, glow: "hover:shadow-blue-500/30" },
    { name: "AWS", icon: <Cloud className="w-6 h-6 text-orange-400" />, glow: "hover:shadow-orange-500/30" },
    { name: "GitHub", icon: <GitBranch className="w-6 h-6 text-purple-400" />, glow: "hover:shadow-purple-500/30" },
  ];

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-12">
        <div className="space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
            Core Technology Stack
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-normal">
            Hover over any tech pill to trigger orbital glow physics.
          </p>
        </div>

        {/* Floating Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {techItems.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ scale: 1.15, y: -6 }}
              animate={{ y: [0, -6, 0] }}
              style={{ animationDuration: `${5 + (idx % 3)}s` }}
              className={`bg-[#121217] border border-white/15 px-5 py-3.5 rounded-2xl backdrop-blur-xl flex items-center gap-3 shadow-lg cursor-pointer transition-all duration-300 ${tech.glow}`}
            >
              {tech.icon}
              <span className="text-xs sm:text-sm font-semibold text-white">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
