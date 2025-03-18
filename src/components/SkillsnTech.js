import styled from "styled-components"
import { HtmlIcon, CSSIcon, JSIcon, MongoDBIcon, NodeJsIcon, ReactIcon } from "./Icons"
import { IconContext } from "react-icons"


const SkillsnTech = () => {
    return <StyledDivForSkills>
        <IconContext.Provider value={{className: "allIcons"}}>
            <div className="rowOfIcons hidden">
                <span className="iconAnimation hidden"><HtmlIcon  /></span> 
                <span className="iconAnimation hidden"><CSSIcon /> </span>
                <span className="iconAnimation hidden"><JSIcon /> </span>
                <span className="iconAnimation hidden"><MongoDBIcon /> </span>
                <span className="iconAnimation hidden"><NodeJsIcon /> </span>
                <span className="iconAnimation hidden"><ReactIcon /></span>
            </div>
        </IconContext.Provider>
        
    </StyledDivForSkills>
}

const StyledDivForSkills = styled.div`
    background-color: #FFC49B;
    padding: 4rem;
    border-bottom: dotted 10px #294C60;
    border-top: dotted 10px #294c60;
`

export default SkillsnTech

{/* <h2>Skills & Technologies</h2> */}