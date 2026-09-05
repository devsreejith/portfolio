"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full flex justify-center">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full transition-all duration-300 rounded-2xl flex items-center justify-between px-4 sm:px-6 border shadow-2xl ${
            scrolled
              ? "py-3 bg-[#111116]/90 backdrop-blur-2xl border-white/20 shadow-black/90"
              : "py-3.5 bg-[#121217]/85 backdrop-blur-xl border-white/15"
          }`}
        >
        {/* Left: Brand Initial Box (SS) */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#1c1c24] border border-white/15 flex items-center justify-center font-display font-bold text-white group-hover:border-white/40 transition-colors shadow-inner">
            <span className="text-white text-sm font-semibold tracking-wider">SS</span>
          </div>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Desktop: Download Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/Sreejith_S.pdf"
            download="Sreejith_S_Resume.pdf"
            onClick={() =>
              trackEvent("resume_download", {
                file_name: "Sreejith_S_Resume.pdf",
                page_url: typeof window !== "undefined" ? window.location.href : "",
              })
            }
            className="group relative inline-flex items-center gap-2 bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            <span>Download Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Right: Resume Button Left of Hamburger Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/Sreejith_S.pdf"
            download="Sreejith_S_Resume.pdf"
            onClick={() =>
              trackEvent("resume_download", {
                file_name: "Sreejith_S_Resume.pdf",
                page_url: typeof window !== "undefined" ? window.location.href : "",
              })
            }
            className="inline-flex items-center gap-1.5 bg-white text-black font-semibold text-xs px-3.5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>
    </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-20 z-50 bg-[#111116]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-[#00E599] py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
