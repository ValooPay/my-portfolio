import Nav from "./Nav"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import SkillsnTech from "./SkillsnTech"
import Projects from "./Projects"
import Contact from "./Contact"
import ProjectsAnimation from "./ProjectsAnimation"
import ColorSwitch from "./ColorSwitch"
import { useEffect, useContext } from "react"
import { LightDarkModeContext } from "../context/LightDarkModeContext"

const App = () => {
    const { theme } = useContext(LightDarkModeContext)

    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".hidden")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            })
        })
        hiddenElements.forEach((el) => observer.observe(el))
    })

    return (
        <div data-theme={theme}>
            <div className="generalColors">
                <Nav />
                <HeroSection />
                <AboutMe />
                <SkillsnTech />
                <Projects />
                <ProjectsAnimation />
                <Contact />
                <ColorSwitch />
            </div>
        </div>
    )
}

export default App