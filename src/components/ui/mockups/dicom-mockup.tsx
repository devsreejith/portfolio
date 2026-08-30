"use client";

import { motion } from "framer-motion";

export default function DicomMockup() {
  return (
    <div className="w-full h-full bg-[#050608] border border-cyan-500/20 rounded-xl p-4 overflow-hidden relative group">
      {/* DICOM Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 uppercase font-semibold tracking-wider">DICOM 3.0 / CornerstoneJS</span>
        </div>
        <div className="text-[10px] bg-cyan-950/80 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
          Patient ID: #9842-X
        </div>
      </div>

      {/* Main Medical Viewer */}
      <div className="grid grid-cols-4 gap-3">
        {/* Tools bar */}
        <div className="col-span-1 bg-[#0c0e12] border border-white/10 rounded-lg p-2 space-y-2 text-[10px]">
          <div className="text-gray-400 font-semibold mb-1">Tools</div>
          <div className="bg-cyan-500/20 text-cyan-300 p-1.5 rounded flex items-center gap-1.5 font-medium">
            <span>📐</span> Measure
          </div>
          <div className="bg-white/5 text-gray-300 p-1.5 rounded flex items-center gap-1.5">
            <span>🔍</span> Zoom / Pan
          </div>
          <div className="bg-white/5 text-gray-300 p-1.5 rounded flex items-center gap-1.5">
            <span>🌗</span> Window Level
          </div>
          <div className="bg-white/5 text-gray-300 p-1.5 rounded flex items-center gap-1.5">
            <span>🧠</span> 3D Volumetric
          </div>
        </div>

        {/* Brain/Chest Scan Display Window */}
        <div className="col-span-3 bg-black border border-cyan-500/30 rounded-lg p-2 relative flex items-center justify-center min-h-[140px] overflow-hidden">
          {/* Simulated CT Scan Radial Rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-28 h-28 border border-cyan-400 rounded-full animate-ping" />
            <div className="w-20 h-20 border border-emerald-400 rounded-full" />
            <div className="w-12 h-12 bg-cyan-400/20 rounded-full blur-md" />
          </div>

          {/* Grid crosshair overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

          {/* Patient Data Overlay */}
          <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400">
            <div>WW: 400 WL: 40</div>
            <div>Slice: 45/120</div>
          </div>

          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-emerald-400">
            <div>HIPAA Encrypted</div>
            <div>FPS: 60</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="text-3xl mb-1">🩻</div>
            <div className="text-xs font-semibold text-white">CT Volumetric Render</div>
            <div className="text-[10px] text-cyan-400 font-mono">Cornerstone.js WebGL Engine</div>
          </div>
        </div>
      </div>
    </div>
  );
}
