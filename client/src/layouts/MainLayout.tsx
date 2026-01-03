import { useRef } from "react"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

export default function MainLayout() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text">
      <Navbar
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  )
}
