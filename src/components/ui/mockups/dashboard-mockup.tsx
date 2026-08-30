"use client";

import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#07080a] border border-white/10 rounded-xl p-4 overflow-hidden relative group">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded flex items-center justify-center font-bold text-[8px] text-black">DP</div>
          <span className="text-xs font-semibold text-white">DP World Global Logistics</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-400">
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">Next.js 15 App Router</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-[#121318] p-2 rounded-lg border border-white/5">
          <div className="text-[9px] text-gray-400">Active Shipments</div>
          <div className="text-sm font-bold text-white mt-0.5">14,290</div>
          <div className="text-[8px] text-[#00E599] mt-0.5">↑ 12.4% vs last week</div>
        </div>
        <div className="bg-[#121318] p-2 rounded-lg border border-white/5">
          <div className="text-[9px] text-gray-400">Port Throughput</div>
          <div className="text-sm font-bold text-white mt-0.5">98.4%</div>
          <div className="text-[8px] text-cyan-400 mt-0.5">Optimal Speed</div>
        </div>
        <div className="bg-[#121318] p-2 rounded-lg border border-white/5">
          <div className="text-[9px] text-gray-400">Net Freight Rev</div>
          <div className="text-sm font-bold text-[#00E599] mt-0.5">$4.8M</div>
          <div className="text-[8px] text-gray-400 mt-0.5">Live Sync</div>
        </div>
      </div>

      {/* Simulated Chart Bars */}
      <div className="bg-[#0e0f14] p-3 rounded-lg border border-white/5 relative">
        <div className="text-[10px] font-semibold text-gray-300 mb-2 flex justify-between">
          <span>Monthly Container Throughput</span>
          <span className="text-[9px] text-emerald-400 font-mono">Chart.js Engine</span>
        </div>
        <div className="h-16 flex items-end justify-between gap-1 pt-2">
          {[40, 65, 45, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="w-full bg-gradient-to-t from-emerald-600/40 via-cyan-500 to-[#00E599] rounded-t-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
