import styled from "styled-components"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const ProjectsAnimation = () => {
    const { lang } = useContext(LanguageContext)

    return <div id="Animation" className="paleSections scrollable" style={{position: "relative", padding: "0 0 5rem"}}>
        <div className="hidden">
            {lang === "en" ? <h2>Animation reels</h2> : <h2>Démos d'animation</h2>}
            <StyledProjectsAnimationDiv>
                <div>
                {lang === "en" ? <p>2024 Demoreel</p> : <p>Démo 2024</p>}
                    <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/m8mjNeu2-dM?si=TcGC0PzpyTYZPRdC"></iframe>
                </div>
                <div>
                    {lang === "en" ? <p>3D reel</p> : <p>Démo 3D</p>}
                    <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/mwWT-2knUag?si=kN4TM5bYMsOvwitE"></iframe>
                </div>
            </StyledProjectsAnimationDiv>
            <div>
                {lang === "en" ? <p style={{marginBottom: "1rem"}}>3D Final project (2021) - Move</p> : <p style={{marginBottom: "1rem"}}>Projet final 3D - Move</p>}
                    <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/rpri-I06o6o?si=NddfEDy2_EU1e1bP"></iframe>
                </div>
            <div>
                {lang === "en" ? <p>...And more to come!</p> : <p>...et plus à venir!</p>}
            </div>
        </div>
        <div className="custom-shape-divider-bottom-1744991574-TEST">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
}

const StyledProjectsAnimationDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: 3rem 2rem;
    gap: 2rem;
    p{
        margin-bottom: 1rem;
    }
`

export default ProjectsAnimation