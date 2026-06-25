import Navigation from "@/sections/Navigation";
import HeroSection from "@/sections/HeroSection";
import DualIdentitySection from "@/sections/DualIdentitySection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsMatrix from "@/sections/SkillsMatrix";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <DualIdentitySection />
      <ProjectsSection />
      <SkillsMatrix />
      <ContactSection />
      <Footer />
    </div>
  );
}