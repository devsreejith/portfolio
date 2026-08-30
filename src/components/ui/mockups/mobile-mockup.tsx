"use client";

import { motion } from "framer-motion";

export default function MobileMockup() {
  return (
    <div className="w-full h-full bg-[#07070a] border border-purple-500/20 rounded-xl p-4 overflow-hidden relative flex items-center justify-center">
      {/* Mobile Phone Mock Frame */}
      <div className="w-[180px] bg-[#111116] border-2 border-white/20 rounded-[24px] p-2 shadow-2xl relative">
        {/* Notch */}
        <div className="w-16 h-3 bg-black rounded-b-md mx-auto mb-2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-purple-500/40" />
        </div>

        {/* Screen Content */}
        <div className="bg-[#09090c] rounded-[16px] p-2.5 space-y-2 text-[10px]">
          {/* Header */}
          <div className="flex items-center justify-between text-white">
            <span className="font-bold text-xs">BookNFix</span>
            <span className="text-[8px] bg-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded-full">OTP Verified</span>
          </div>

          {/* Service Cards */}
          <div className="bg-purple-950/40 border border-purple-500/30 p-2 rounded-lg text-white">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-[10px]">Plumbing Repair</span>
              <span className="text-[#00E599] font-mono">$45/h</span>
            </div>
            <div className="text-[8px] text-gray-400">Technician Arriving in 12 mins</div>
            <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-[#00E599] rounded-full" />
            </div>
          </div>

          {/* Map Preview Box */}
          <div className="h-16 bg-[#161620] rounded-lg relative overflow-hidden border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:8px_8px] opacity-30" />
            <div className="relative z-10 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full border border-purple-400/40">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
              <span className="text-[8px] text-white font-medium">GPS Tracking</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="bg-[#00E599] text-black font-bold text-center py-1.5 rounded-lg text-[9px]">
            Confirm Booking →
          </div>
        </div>
      </div>
    </div>
  );
}
