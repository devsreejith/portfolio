"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Eye, Grid, X } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import EcommerceMockup from "@/components/ui/mockups/ecommerce-mockup";
import DicomMockup from "@/components/ui/mockups/dicom-mockup";
import MobileMockup from "@/components/ui/mockups/mobile-mockup";
import DashboardMockup from "@/components/ui/mockups/dashboard-mockup";
import PropertyMockup from "@/components/ui/mockups/property-mockup";
import CrmMockup from "@/components/ui/mockups/crm-mockup";

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  // Lock background body scroll when any modal is open
  useEffect(() => {
    if (selectedProject || showAllModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, showAllModal]);

  const renderMockupFallback = (type: string) => {
    switch (type) {
      case "ecommerce":
        return <EcommerceMockup />;
      case "dicom":
        return <DicomMockup />;
      case "mobile":
        return <MobileMockup />;
      case "dashboard":
        return <DashboardMockup />;
      case "property":
        return <PropertyMockup />;
      case "crm":
        return <CrmMockup />;
      default:
        return <DashboardMockup />;
    }
  };

  return (
    <section id="projects" className="py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Row: Title on Left, See All Pill on Right */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight"
          >
            Selected Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAllModal(true)}
              className="inline-flex items-center gap-1.5 bg-[#181820] hover:bg-[#22222c] border border-white/10 text-xs font-medium text-gray-300 hover:text-white px-4 py-1.5 rounded-full transition-all duration-200 shadow-md"
            >
              <span>See all ({projects.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* 2-Column Main Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#121217] border border-white/10 rounded-[24px] overflow-hidden p-3 group relative shadow-2xl hover:border-[#00E599]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Full Card Image Showcase Container (object-contain so full image is visible) */}
              <div className="h-[270px] sm:h-[320px] rounded-[18px] overflow-hidden relative bg-[#08080c] flex items-center justify-center p-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full p-2">
                    {renderMockupFallback(project.imageType)}
                  </div>
                )}

                {/* Hover Overlay with View More Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 bg-[#00E599] text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-black" />
                    <span>View More</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </span>
                </div>

                {/* Integrated Floating Bottom Glass Overlay Bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#181820]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl group-hover:border-white/20 transition-colors">
                  <div className="font-display font-semibold text-xs sm:text-sm text-white tracking-wide group-hover:text-[#00E599] transition-colors truncate max-w-[70%]">
                    {project.title}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-gray-400 font-medium tracking-wider shrink-0">
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* See All Projects Grid Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 bg-[#111116] border border-white/15 rounded-3xl max-w-5xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden my-6"
            >
              {/* Sticky Header with Fixed Close Button */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111116] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E599]">
                    <Grid className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
                      All Projects ({projects.length})
                    </h3>
                    <p className="text-xs text-gray-400">Click any project to view full architecture details</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close all projects modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Container */}
              <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => {
                        setShowAllModal(false);
                        setSelectedProject(project);
                      }}
                      className="bg-[#181820] border border-white/10 rounded-[20px] overflow-hidden p-3 group relative shadow-xl hover:border-[#00E599]/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="h-[220px] rounded-xl overflow-hidden relative bg-[#08080c] flex items-center justify-center p-2">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full p-2">
                            {renderMockupFallback(project.imageType)}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-2 bg-[#00E599] text-black font-bold text-xs px-4 py-2 rounded-full shadow-2xl">
                            <Eye className="w-3.5 h-3.5 text-black" />
                            <span>View More</span>
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur-md p-2 rounded-lg border border-white/10">
                          <div className="font-display font-semibold text-xs text-white group-hover:text-[#00E599] transition-colors truncate max-w-[70%]">
                            {project.title}
                          </div>
                          <span className="text-[10px] font-mono text-gray-400 uppercase">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Single Project Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box with Fixed Sticky Top Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 bg-[#111116] border border-white/15 rounded-3xl max-w-3xl w-full shadow-2xl max-h-[88vh] flex flex-col overflow-hidden my-6"
            >
              {/* Sticky Top Header Bar (Fixed Close X Button) */}
              <div className="p-4 sm:p-5 border-b border-white/10 bg-[#111116]/95 backdrop-blur-md flex items-center justify-between shrink-0 z-30">
                <div className="flex items-center gap-2">
                  <span className="bg-[#00E599]/15 border border-[#00E599]/30 text-[#00E599] text-xs font-mono font-semibold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white truncate max-w-[320px] sm:max-w-md">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors shrink-0"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Inside Modal Content Only */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                {/* Banner Visual (object-contain so full image is visible) */}
                <div className="h-60 sm:h-80 rounded-2xl overflow-hidden relative bg-[#08080c] border border-white/10 flex items-center justify-center p-3">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain object-center"
                    />
                  ) : (
                    <div className="w-full h-full p-2">
                      {renderMockupFallback(selectedProject.imageType)}
                    </div>
                  )}
                </div>

                {/* Overview Text */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {selectedProject.detailedOverview || selectedProject.description}
                  </p>
                </div>

                {/* Project Focus if present */}
                {selectedProject.projectFocus && (
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-1">
                    <div className="text-[11px] font-mono uppercase text-[#00E599] font-bold">Project Focus</div>
                    <div className="text-xs text-gray-300 font-medium leading-relaxed">
                      {selectedProject.projectFocus}
                    </div>
                  </div>
                )}

                {/* Key Features & Contributions */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h4 className="text-base font-display font-semibold text-white tracking-tight">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedProject.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                          <Check className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm leading-relaxed text-gray-200">
                            {feat.description ? (
                              <>
                                <strong className="text-white font-semibold">{feat.title}</strong> —{" "}
                                <span className="text-gray-300 font-normal">{feat.description}</span>
                              </>
                            ) : (
                              <span className="text-gray-200 font-normal">{feat.title}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-gray-400">Technology</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-white/5 border border-white/10 text-gray-200 text-xs font-mono px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button: Live Demo Only (Rendered conditionally) */}
                {selectedProject.liveUrl && (
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
