"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function WhatIDoSection() {
  const cards = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web applications built from strategy and architecture to pixel-perfect interfaces that users love.",
      items: [
        "React.js & Next.js 15 (App Router)",
        "TypeScript & Clean Architecture",
        "Tailwind CSS & Glassmorphism UI",
        "Node.js APIs & Admin Dashboards",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native iOS and Android app development that feels at home on every platform while maintaining performance.",
      items: [
        "React Native & Expo Ecosystem",
        "Cross-Platform iOS & Android",
        "Push Notifications & OTP Auth",
        "Stripe & Payment Integration",
      ],
    },
    {
      title: "Backend & Cloud Systems",
      description: "Scalable backend architectures and cloud microservices that ensure high reliability across all touchpoints.",
      items: [
        "Express.js & PostgreSQL",
        "MongoDB & Prisma ORM",
        "AWS Cloud & Docker Containers",
        "REST APIs & JWT Authentication",
      ],
    },
  ];

  return (
    <section id="work" className="py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight"
          >
            What I do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 font-normal"
          >
            Full-spectrum engineering services for ambitious companies
          </motion.p>
        </div>

        {/* 3 Clean Minimal Cards Grid (Matching Reference Image Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#121217] border border-white/10 rounded-[28px] p-8 sm:p-9 transition-all duration-300 hover:border-white/20 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <h3 className="text-2xl font-display font-semibold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8 font-normal">
                  {card.description}
                </p>

                {/* Checklist with Green Checkmarks */}
                <div className="space-y-3.5 pt-2">
                  {card.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#00E599] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200 font-normal">
                        {item}
                      </span>
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
