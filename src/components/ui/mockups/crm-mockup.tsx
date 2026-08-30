"use client";

import { motion } from "framer-motion";

export default function CrmMockup() {
  return (
    <div className="w-full h-full bg-[#06070a] border border-purple-500/20 rounded-xl p-4 overflow-hidden relative group">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <span className="text-xs font-semibold text-white">AI Revenue CRM Engine</span>
        </div>
        <div className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 font-mono">
          OpenAI GPT-4 Integration
        </div>
      </div>

      {/* Main CRM Grid */}
      <div className="grid grid-cols-3 gap-2">
        {/* Leads Column */}
        <div className="col-span-1 bg-[#0d0e14] p-2 rounded-lg border border-white/5 space-y-1.5 text-[9px]">
          <div className="text-gray-400 font-semibold mb-1">Qualified Leads</div>
          <div className="bg-[#151722] p-1.5 rounded border-l-2 border-[#00E599]">
            <div className="text-white font-medium">Acme Corp deal</div>
            <div className="text-gray-400">$45,000 • 94% AI Match</div>
          </div>
          <div className="bg-[#151722] p-1.5 rounded border-l-2 border-cyan-400">
            <div className="text-white font-medium">Starlight SaaS</div>
            <div className="text-gray-400">$18,500 • 88% AI Match</div>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="col-span-2 bg-[#10111a] p-2.5 rounded-lg border border-purple-500/30 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] text-purple-300 font-medium mb-1">
              <span>✨ AI Smart Insight</span>
              <span className="text-[8px] bg-purple-950 px-1 rounded text-purple-400">Live</span>
            </div>
            <p className="text-[9px] text-gray-300 leading-relaxed italic">
              "Lead Acme Corp showed 40% higher engagement after product demo. Recommending auto-closing pitch email."
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-[9px]">
            <span className="text-gray-400 font-mono">PostgreSQL Pipeline</span>
            <button className="bg-[#00E599] text-black font-bold px-2 py-0.5 rounded text-[9px]">
              Send AI Pitch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
