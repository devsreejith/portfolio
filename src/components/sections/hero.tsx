"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, User } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] hero-glow-bg px-4 sm:px-6">
      {/* Background Subtle Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#00E599]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00E599]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Status Pill on Left Side */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 items-center gap-2.5 bg-[#121217]/90 border border-white/10 rounded-full px-4 py-2 backdrop-blur-xl shadow-xl hover:border-[#00E599]/50 transition-colors group cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E599]"></span>
        </span>
        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
          Available for projects
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00E599] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.div>

      {/* Main Content Container - Vertically & Horizontally Centered */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Mobile Status Pill */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="xl:hidden inline-flex items-center gap-2 bg-[#121217] border border-white/10 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-[#00E599]" />
          <span className="text-xs text-gray-300">Available for projects</span>
          <ArrowUpRight className="w-3 h-3 text-gray-400" />
        </motion.div>

        {/* 2-Column Grid (Centered Vertical Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Left-Aligned Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Greeting, Title & Subtitle */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono text-gray-400 font-medium tracking-wide">
                Hey there, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-none">
                Sreejith S
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#00E599] tracking-tight pt-1">
                Software Engineer
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-normal max-w-xl">
              Building fast, scalable web applications, mobile apps, and e-commerce platforms with clean code, modern technologies, and exceptional user experiences.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-black text-black" />
                <span>View my work</span>
                <span className="text-sm font-mono">→</span>
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center gap-2 bg-[#121217] text-gray-200 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all duration-200 backdrop-blur-md hover:scale-105"
              >
                <User className="w-4 h-4 text-gray-300" />
                <span>About me</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Proportional Circular Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Outer Dotted Orbital Arc */}
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[360px] lg:h-[360px] rounded-full border border-dashed border-[#00E599]/30 absolute -inset-3 m-auto animate-spin-slow pointer-events-none" />

            {/* Floating Particle Accents */}
            <div className="w-2 h-2 bg-[#00E599] rounded-full absolute top-4 left-8 animate-ping opacity-75" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full absolute bottom-6 right-6 shadow-glow" />

            {/* Main Circle Portrait Container */}
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full p-1.5 border-2 border-[#00E599] bg-[#0d0d12] shadow-[0_0_40px_rgba(0,229,153,0.25)] relative overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#181822]">
                <img
                  src="/images/profile.png"
                  alt="Sreejith S"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse Scroll Pill Positioned at Bottom 15% */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="#what-i-do" aria-label="Scroll down">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 hover:border-[#00E599]/70 transition-colors flex justify-center p-1.5 backdrop-blur-md bg-white/5 shadow-lg">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1.5 h-2.5 bg-[#00E599] rounded-full"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
