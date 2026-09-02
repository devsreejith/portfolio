"use client";

import { useState } from "react";
import { Check, Copy, Globe, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Action Buttons - Centered on mobile */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-display font-semibold text-white leading-tight tracking-tight">
                Let's create something amazing together
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
                Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together.
              </p>
            </div>

            {/* Action Button: Email Only */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>{copied ? "Copied!" : PORTFOLIO_DATA.personal.email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/60" />}
              </button>
            </div>

            {/* Social Icons Row (Globe, LinkedIn - GitHub removed) */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://www.sreejiths.in"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#14141a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00E599]/50 transition-all"
                title="Website (www.sreejiths.in)"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sreejith-s2103"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#14141a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00E599]/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Links Card */}
          <div className="lg:col-span-5 bg-[#121217] border border-white/10 rounded-[28px] p-8 shadow-2xl space-y-6">
            <h3 className="text-lg font-display font-semibold text-white tracking-tight">
              Quick Links
            </h3>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs text-gray-300 font-normal">
              <Link href="#work" className="hover:text-white transition-colors">Work</Link>
              <a href="#about" className="hover:text-white transition-colors">Resume</a>
              <Link href="#about" className="hover:text-white transition-colors">About</Link>
              <Link href="#projects" className="hover:text-white transition-colors">Case Studies</Link>
              <Link href="#process" className="hover:text-white transition-colors">Process</Link>
              <Link href="#skills" className="hover:text-white transition-colors">Speaking</Link>
              <Link href="#experience" className="hover:text-white transition-colors">Journal</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Mentoring</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
