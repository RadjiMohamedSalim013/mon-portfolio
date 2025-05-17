import HeroSection from "@/components/home/HeroSection"
import AboutSection from '@/components/home/AboutSection'
import ProjectsSection from '@/components/home/ProjectsSection'


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}
