import styled from "styled-components"
import { HtmlIcon, CSSIcon, JSIcon, MongoDBIcon, NodeJsIcon, ReactIcon } from "./Icons"
import { IconContext } from "react-icons"


const SkillsnTech = () => {
    return <div>
    <StyledDivForSkills>
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
    </div>
}

const StyledDivForSkills = styled.div`
    padding: 4rem;
    border-bottom: dashed 3px var(--color-text-light);
    border-top: dashed 3px var(--color-text-light);
`

export default SkillsnTech

{/* <h2>Skills & Technologies</h2> */}