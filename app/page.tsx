import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import CertificationsSection from "@/components/CertificationsSection"
import TimelineSection from "@/components/TimelineSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main className="space-y-16 overflow-hidden">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center mt-16">
        <p className="text-sm md:text-base">Made with ❤️ by Dhanashree S R | &copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  )
}