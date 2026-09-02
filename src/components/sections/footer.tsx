"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-3 text-xs text-gray-400 text-center">
        {/* Brand Initial Box + Copyright */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#1c1c24] border border-white/15 flex items-center justify-center font-display font-bold text-white text-xs">
            SS
          </div>
          <div className="text-gray-400 font-normal">
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
