import EducationsSection from "@/components/EducationsSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import HackathonsSections from "@/components/HackathonsSections";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="dark:text-white text-2xl text-center">Chai aur code</h1> */}
      <HeroSection/>
      <EducationsSection/>
      <ProjectsSection/>
      <HackathonsSections/>
      <ExperienceSection/>
      <SkillsSection/>
    </main>
  );
}
