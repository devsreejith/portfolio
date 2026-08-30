"use client";

import { motion } from "framer-motion";
import { Figma, Globe, LayoutDashboard, Server, ShoppingBag, Smartphone, Sparkles, Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-[#00E599]" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-5 h-5 text-purple-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-[#00E599]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case "Figma":
        return <Figma className="w-5 h-5 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#00E599]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Globe className="w-5 h-5 text-[#00E599]" />;
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            Services Offered
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal"
          >
            Result-driven engineering packages tailored for startups and scaleups.
          </motion.p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181822] border border-white/10 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h3 className="text-base font-display font-semibold text-white mb-2 group-hover:text-[#00E599] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
