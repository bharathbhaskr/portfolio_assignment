import Footer from "./components/footer"
import NavBar from "./components/navbar"
import AboutSection from "./components/sections/about-section"
import ContactSection from "./components/sections/contact-section"
import HeroSection from "./components/sections/hero-section"
import ProjectsSection from "./components/sections/projects-section"
import TechStackSection from "./components/sections/tech-stack-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
