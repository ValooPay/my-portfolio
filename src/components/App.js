import Nav from "./Nav"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import SkillsnTech from "./SkillsnTech"
import Projects from "./Projects"
import Contact from "./Contact"
import { useEffect } from "react"

const App = () => {
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
        <>
            <Nav />
            <HeroSection />
            <AboutMe />
            <SkillsnTech />
            <Projects />
            <Contact />
        </>
    )
}

export default App