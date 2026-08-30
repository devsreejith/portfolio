import Navbar from "@/components/navigation/navbar";
import HeroSection from "@/components/sections/hero";
import MarqueeTrustSection from "@/components/sections/marquee-trust";
import WhatIDoSection from "@/components/sections/what-i-do";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import ProcessSection from "@/components/sections/process";
import ServicesSection from "@/components/sections/services";
import TechStackShowcase from "@/components/sections/tech-stack";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Preloader from "@/components/ui/preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Preloader />
      <Navbar />
      <HeroSection />
      <MarqueeTrustSection />
      <WhatIDoSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <ProcessSection />
      <ServicesSection />
      <TechStackShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
