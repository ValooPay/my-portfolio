import styled from "styled-components"
import NyanCat from "../assets/NyanCatZubatGame.png"
import TicTacToe from "../assets/tictactoe.PNG"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const Projects = () => {
    const { lang } = useContext(LanguageContext)

    return <>
    {lang === "en" ? 
    <div id="Projects" className="paleSections scrollable" style={{position: "relative", padding: "5rem 0"}}>
        <div className="hidden">
            <h2>Coding Projects</h2>
            <StyledGrid>
                <div>
                    <p>Final project - Doodle Board</p>
                        <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/7Tyty6oGY-o?si=4lw9fIgCB9kDiW7J"></iframe>
                </div>
                <div>
                    <p>Group project - E-commerce</p>
                        <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/mg8nJJRPYtg?si=Ef3PEu6MlWZe6SNS"></iframe>
                </div>
                <div>
                    <p>Nyan Cat game</p>
                        <img className="projects" src={NyanCat} />
                </div>
                <div>
                    <p>Tic Tac Toe</p>
                        <img className="projects" src={TicTacToe} />
                </div>
            </StyledGrid>
        </div>
    </div>
    :
    <div id="Projects" className="paleSections scrollable" style={{position: "relative", padding: "5rem 0"}}>
        <div className="hidden">
            <h2>Projets de programmation</h2>
            <StyledGrid>
                <div>
                    <p>Projet final - Doodle Board</p>
                        <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/7Tyty6oGY-o?si=4lw9fIgCB9kDiW7J"></iframe>
                </div>
                <div>
                    <p>Projet de groupe - Commerce en ligne</p>
                        <iframe className="projects" width="560" height="315" src="https://www.youtube.com/embed/mg8nJJRPYtg?si=Ef3PEu6MlWZe6SNS"></iframe>
                </div>
                <div>
                    <p>Jeu Nyan Cat</p>
                        <img className="projects" src={NyanCat} />
                </div>
                <div>
                    <p>Tic Tac Toe</p>
                        <img className="projects" src={TicTacToe} />
                </div>
            </StyledGrid>
        </div>
    </div>
    }
    </>
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
    margin: 3rem 2rem;
`

export default Projects
