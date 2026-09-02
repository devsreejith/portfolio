"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Atom,
  BarChart,
  Check,
  Code,
  CreditCard,
  Database,
  Eye,
  Flame,
  Globe,
  Grid,
  Layers,
  Palette,
  Server,
  Shield,
  Smartphone,
  X,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import EcommerceMockup from "@/components/ui/mockups/ecommerce-mockup";
import DicomMockup from "@/components/ui/mockups/dicom-mockup";
import MobileMockup from "@/components/ui/mockups/mobile-mockup";
import DashboardMockup from "@/components/ui/mockups/dashboard-mockup";
import PropertyMockup from "@/components/ui/mockups/property-mockup";
import CrmMockup from "@/components/ui/mockups/crm-mockup";

const getTechInfo = (tag: string) => {
  const normalized = tag.toLowerCase().trim();
  if (normalized.includes("react native")) {
    return { name: tag, role: "Mobile Framework", icon: Smartphone, color: "#61DAFB" };
  }
  if (normalized.includes("react") || normalized.includes("react.js")) {
    return { name: tag, role: "Frontend Library", icon: Atom, color: "#61DAFB" };
  }
  if (normalized.includes("next.js") || normalized.includes("next")) {
    return { name: tag, role: "Fullstack Framework", icon: Zap, color: "#FFFFFF" };
  }
  if (normalized.includes("node") || normalized.includes("node.js")) {
    return { name: tag, role: "Backend Runtime", icon: Server, color: "#68A063" };
  }
  if (normalized.includes("postgres") || normalized.includes("postgresql")) {
    return { name: tag, role: "Database", icon: Database, color: "#336791" };
  }
  if (normalized.includes("mongo") || normalized.includes("mongodb")) {
    return { name: tag, role: "NoSQL Database", icon: Database, color: "#47A248" };
  }
  if (normalized.includes("n-genius") || normalized.includes("gateway") || normalized.includes("stripe")) {
    return { name: tag, role: "Payment Gateway", icon: CreditCard, color: "#00E599" };
  }
  if (normalized.includes("tailwind")) {
    return { name: tag, role: "CSS Framework", icon: Palette, color: "#38BDF8" };
  }
  if (normalized.includes("material ui") || normalized.includes("mui")) {
    return { name: tag, role: "UI Component Library", icon: Palette, color: "#0081CB" };
  }
  if (normalized.includes("redux")) {
    return { name: tag, role: "State Management", icon: Layers, color: "#764ABC" };
  }
  if (normalized.includes("firebase")) {
    return { name: tag, role: "Backend Service", icon: Flame, color: "#FFCA28" };
  }
  if (normalized.includes("websocket") || normalized.includes("websockets")) {
    return { name: tag, role: "Real-time Protocol", icon: Zap, color: "#00E599" };
  }
  if (normalized.includes("ohif") || normalized.includes("dicom") || normalized.includes("meddream") || normalized.includes("cornerstone")) {
    return { name: tag, role: "Medical Imaging Tech", icon: Activity, color: "#00E599" };
  }
  if (normalized.includes("openmrs")) {
    return { name: tag, role: "Enterprise EHR Platform", icon: Shield, color: "#00E599" };
  }
  if (normalized.includes("highcharts")) {
    return { name: tag, role: "Analytics Visualization", icon: BarChart, color: "#38BDF8" };
  }
  if (normalized.includes("jwt") || normalized.includes("auth")) {
    return { name: tag, role: "Security & Authentication", icon: Shield, color: "#00E599" };
  }
  if (normalized.includes("rest") || normalized.includes("api") || normalized.includes("web api")) {
    return { name: tag, role: "API Architecture", icon: Globe, color: "#00E599" };
  }
  return { name: tag, role: "Technology Stack", icon: Code, color: "#00E599" };
};

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  // Lock background body and html scroll when any modal is open
  useEffect(() => {
    if (selectedProject || showAllModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
              <span>View all</span>
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
              className="bg-[#121217] border border-white/10 rounded-[28px] p-4 sm:p-5 group relative shadow-2xl hover:border-[#00E599]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Showcase Container with Top-Right Floating Arrow */}
              <div className="w-full aspect-[3/2] rounded-[20px] overflow-hidden relative bg-[#08080c] flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full p-2">
                    {renderMockupFallback(project.imageType)}
                  </div>
                )}

                {/* Top-Right Floating Arrow Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#00E599] group-hover:border-[#00E599]/40 group-hover:bg-black/60 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Details Section Under Image */}
              <div className="pt-4 px-1 flex items-end justify-between gap-4">
                <div className="space-y-1 min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white tracking-tight group-hover:text-[#00E599] transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal truncate">
                    {project.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg tracking-wider font-medium">
                    {project.category}
                  </span>
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
                      All Projects
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
              <div data-lenis-prevent="true" className="p-6 overflow-y-auto flex-1 custom-scrollbar overscroll-contain">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => {
                        setShowAllModal(false);
                        setSelectedProject(project);
                      }}
                      className="bg-[#181820] border border-white/10 rounded-[24px] p-4 group relative shadow-xl hover:border-[#00E599]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      <div className="w-full aspect-[3/2] rounded-[16px] overflow-hidden relative bg-[#08080c] flex items-center justify-center">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full p-2">
                            {renderMockupFallback(project.imageType)}
                          </div>
                        )}

                        <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#00E599] group-hover:border-[#00E599]/40 group-hover:bg-black/60 transition-all duration-300 shadow-lg">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="pt-3 px-1 flex items-center justify-between gap-3">
                        <div className="font-display font-semibold text-sm text-white group-hover:text-[#00E599] transition-colors truncate">
                          {project.title}
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase shrink-0 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                          {project.category}
                        </span>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box with Fixed Sticky Top Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 bg-[#111116] border border-white/15 rounded-3xl max-w-5xl lg:max-w-6xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden my-4 sm:my-6"
            >
              {/* Sticky Top Header Bar (Fixed Close X Button, No Breadcrumb) */}
              <div className="p-4 sm:p-5 border-b border-white/10 bg-[#111116]/95 backdrop-blur-md flex items-center justify-between shrink-0 z-30">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    <span className="text-[#00E599]">Project</span> Detail
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

              {/* Scrollable Main Content Container */}
              <div
                data-lenis-prevent="true"
                className="p-5 sm:p-7 md:p-8 overflow-y-auto flex-1 custom-scrollbar overscroll-contain"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Image -> Title -> Overview -> Key Features (lg:col-span-7 xl:col-span-8) */}
                  <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                    {/* Top Showcase Image */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden w-full shadow-2xl border border-white/10 bg-[#08080c]">
                      {selectedProject.image ? (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-auto object-contain block rounded-2xl md:rounded-3xl"
                        />
                      ) : (
                        <div className="w-full h-[320px] p-2 flex items-center justify-center">
                          {renderMockupFallback(selectedProject.imageType)}
                        </div>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight leading-tight">
                      {selectedProject.title}
                    </h3>

                    {/* Project Overview */}
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      <h4 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight">
                        Project Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                        {selectedProject.detailedOverview || selectedProject.description}
                      </p>
                    </div>

                    {/* Project Focus if present */}
                    {selectedProject.projectFocus && (
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                        <div className="text-xs font-mono uppercase text-[#00E599] font-bold">Project Focus</div>
                        <div className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                          {selectedProject.projectFocus}
                        </div>
                      </div>
                    )}

                    {/* Key Features Section with Dark Cards & Green Badges */}
                    {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                      <div className="space-y-4 pt-2 border-t border-white/10">
                        <h4 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight">
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.keyFeatures.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-3.5 bg-[#16161e]/90 border border-white/10 rounded-2xl p-4 sm:p-4.5 hover:border-white/20 transition-colors"
                            >
                              <div className="w-7 h-7 rounded-full bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center text-[#00E599] shrink-0 mt-0.5 shadow-sm">
                                <Check className="w-4 h-4" />
                              </div>
                              <div className="text-xs sm:text-sm leading-relaxed text-gray-200">
                                {feat.description ? (
                                  <div>
                                    <h5 className="text-white font-semibold mb-0.5">{feat.title}</h5>
                                    <p className="text-gray-300 text-xs font-normal leading-relaxed">{feat.description}</p>
                                  </div>
                                ) : (
                                  <span className="text-gray-200 font-normal">{feat.title}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Technology Cards Sidebar (lg:col-span-5 xl:col-span-4) */}
                  <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-0">
                    {/* Technology Section Header */}
                    <div className="space-y-1.5">
                      <h4 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight">
                        Technology
                      </h4>
                      <div className="w-8 h-0.5 bg-[#00E599] rounded-full" />
                    </div>

                    {/* Stacked Technology Cards */}
                    <div className="space-y-3">
                      {selectedProject.tags.map((tag, tIdx) => {
                        const tech = getTechInfo(tag);
                        const IconComp = tech.icon;
                        return (
                          <div
                            key={tIdx}
                            className="bg-[#14141c] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#00E599]/40 transition-colors group shadow-md"
                          >
                            <div
                              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                              style={{ color: tech.color }}
                            >
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-sm font-semibold text-white truncate group-hover:text-[#00E599] transition-colors">
                                {tech.name}
                              </div>
                              <div className="text-xs text-gray-400 truncate mt-0.5">
                                {tech.role}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Button: Live Demo */}
                    {selectedProject.liveUrl && (
                      <div className="pt-2">
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
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
