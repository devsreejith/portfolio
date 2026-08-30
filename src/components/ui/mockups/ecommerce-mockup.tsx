"use client";

import { motion } from "framer-motion";

export default function EcommerceMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0c] border border-white/10 rounded-xl p-4 overflow-hidden relative group">
      {/* Top Navbar Mock */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-400">dubaipolice-store.gov.ae</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#00E599]">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          Live Orders Active
        </div>
      </div>

      {/* Main Grid UI */}
      <div className="grid grid-cols-3 gap-3">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-[#121216] p-3 rounded-lg border border-white/5 space-y-2">
          <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Categories</div>
          <div className="h-6 bg-[#00E599]/20 text-[#00E599] rounded text-xs px-2 flex items-center justify-between font-medium">
            <span>Tactical Gear</span>
            <span className="text-[10px] bg-[#00E599]/30 px-1 rounded">142</span>
          </div>
          <div className="h-6 bg-white/5 text-gray-400 rounded text-xs px-2 flex items-center justify-between">
            <span>Apparel</span>
            <span className="text-[10px] text-gray-500">89</span>
          </div>
          <div className="h-6 bg-white/5 text-gray-400 rounded text-xs px-2 flex items-center justify-between">
            <span>Collectibles</span>
            <span className="text-[10px] text-gray-500">54</span>
          </div>
          <div className="mt-4 p-2 bg-emerald-950/30 border border-[#00E599]/30 rounded">
            <div className="text-[10px] text-gray-400">Total Revenue</div>
            <div className="text-sm font-bold text-white mt-0.5">AED 1,284,900</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-2 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#141418] border border-white/10 rounded-lg p-2.5 relative group/card overflow-hidden"
            >
              <div className="h-20 bg-gradient-to-br from-emerald-900/40 via-zinc-900 to-black rounded flex items-center justify-center relative">
                <span className="text-2xl">🛡️</span>
                <span className="absolute top-1 right-1 bg-[#00E599] text-black font-bold text-[9px] px-1.5 py-0.5 rounded">AED 450</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-white">Tactical Duty Jacket</div>
              <div className="text-[10px] text-gray-400">PostgreSQL Sync • In Stock</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#141418] border border-white/10 rounded-lg p-2.5 relative group/card overflow-hidden"
            >
              <div className="h-20 bg-gradient-to-br from-cyan-900/40 via-zinc-900 to-black rounded flex items-center justify-center relative">
                <span className="text-2xl">⌚</span>
                <span className="absolute top-1 right-1 bg-[#00E599] text-black font-bold text-[9px] px-1.5 py-0.5 rounded">AED 890</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-white">Commemorative Watch</div>
              <div className="text-[10px] text-gray-400">Stripe Gateway Ready</div>
            </motion.div>
          </div>

          {/* Activity Bar */}
          <div className="bg-[#121216] border border-white/5 rounded-lg p-2.5 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Realtime Auth: JWT Active</span>
            </div>
            <span className="font-mono text-[10px] text-[#00E599]">240ms Latency</span>
          </div>
        </div>
      </div>
    </div>
  );
}
