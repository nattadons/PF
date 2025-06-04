'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Certificates from './components/Certificates';
import VantaBirdsBackground from './components/VantaBirdsBackground';

export default function FullStackPortfolio() {
  return (
    <>
      {/* Vanta Background */}
      <VantaBirdsBackground />

      {/* เนื้อหาเว็บ */}
      <main className="relative z-10 text-white">
        <HeroSection />
        <ProjectsSection />
        <Certificates />
        <ContactSection />
      </main>
    </>
  );
}
