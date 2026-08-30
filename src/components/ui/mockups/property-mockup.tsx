"use client";

import { motion } from "framer-motion";

export default function PropertyMockup() {
  return (
    <div className="w-full h-full bg-[#08070b] border border-cyan-500/20 rounded-xl p-4 overflow-hidden relative group">
      {/* Search Header */}
      <div className="bg-[#121018] p-2 rounded-lg border border-white/10 mb-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-gray-300">
          <span>📍 Dubai Marina Villa</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400">Oct 12 - Oct 18</span>
        </div>
        <div className="bg-[#00E599] text-black font-semibold px-2 py-0.5 rounded text-[10px]">
          Stripe Ready
        </div>
      </div>

      {/* Grid: Map + Villa Card */}
      <div className="grid grid-cols-2 gap-3">
        {/* Villa Card */}
        <div className="bg-[#14121c] border border-white/10 rounded-lg p-2 relative">
          <div className="h-20 bg-gradient-to-br from-indigo-900/60 via-purple-900/30 to-black rounded overflow-hidden relative flex items-center justify-center">
            <span className="text-2xl">🏛️</span>
            <div className="absolute top-1 left-1 bg-black/60 backdrop-blur text-[8px] text-white px-1.5 py-0.5 rounded">
              ★ 4.98 (124 reviews)
            </div>
          </div>
          <div className="mt-2 font-semibold text-xs text-white">Palm Jumeirah Haven</div>
          <div className="text-[10px] text-[#00E599] font-bold mt-0.5">$850 / night</div>
        </div>

        {/* Map View Mock */}
        <div className="bg-[#0f0e15] border border-white/10 rounded-lg p-2 relative flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
          
          <div className="relative z-10 flex items-center justify-between text-[9px] text-cyan-400 font-mono">
            <span>Mapbox GL Integration</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>

          <div className="relative z-10 flex justify-center items-center py-4">
            <div className="bg-[#00E599] text-black font-extrabold text-[9px] px-2 py-1 rounded-full shadow-lg border border-white">
              📍 $850
            </div>
          </div>

          <div className="relative z-10 text-[9px] text-gray-400 text-center font-mono">
            Instant Stripe Checkout API
          </div>
        </div>
      </div>
    </div>
  );
}
