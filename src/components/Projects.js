import styled from "styled-components"

const Projects = () => {
    return <div id="Projects" className="paleSections scrollable">
        <div className="hidden">
            <h2>Projects</h2>
                <StyledProjectsDiv>
                    <p>Nyan Cat game</p>
                    <img src="./assets/NyanCatZubatGame.png" />
                </StyledProjectsDiv>
                <StyledProjectsDiv>
                    <p>Tic Tac Toe game</p>
                    <img src="./assets/tictactoe.PNG" />
                </StyledProjectsDiv>
                <div>
                    <p>...And more to come!</p>
                </div>
        </div>
    </div>
}

const StyledProjectsDiv = styled.div`
    display: inline-block;
    margin: 3rem 2rem;
    img {
        height: 32rem;
        padding: 5px;
        background-color: #ffc49b;
        border: dashed 3px #001b2e;
        margin-top: 1rem;
    }
`

export default Projects