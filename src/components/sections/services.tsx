"use client";

import { motion } from "framer-motion";
import {
  Figma,
  Globe,
  LayoutDashboard,
  Palette,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ServicesSection() {
  const services = PORTFOLIO_DATA.services;

  const getServiceIcon = (iconName: string) => {
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
        return <ShoppingBag className="w-5 h-5 text-yellow-400" />;
      case "Figma":
        return <Figma className="w-5 h-5 text-pink-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#00E599]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-orange-400" />;
      default:
        return <Palette className="w-5 h-5 text-[#00E599]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            Services Offered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
          >
            End-to-end web & mobile engineering services tailored for businesses and startups.
          </motion.p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#121217] border border-white/10 rounded-[24px] p-6 shadow-2xl space-y-4 group hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1c24] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-display font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
