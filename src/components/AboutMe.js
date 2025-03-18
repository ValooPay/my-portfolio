import styled from "styled-components"
import { useRef } from "react"


const AboutMe = () => {
    return <section id="About me" className="paleSections scrollable columnOnMobile">
    <StyledAboutMe>
        <div className="hidden">
            <h2>About me</h2>
                <p>
                    Hello! I'm Valerie! <span className="smallText">(Nice to meet you!)</span>
                </p>
                <p>
                    At my core, I am an artist with a passion for bringing ideas to life. I'm also a gamer who loves putting her brain to work solving puzzles. 
                </p>
                <p>
                    My near 10 years of experience in the animation industry has shaped me into the dedicated person I am today. I always strive to improve my skills, as well as learning new things. 
                    Learning how to code in a short period of time has been a wonderful challenge and I look forward to learning more in future projects!
                </p>
        </div>
    </StyledAboutMe>
    <img src="/assets/valuigi.jpg" alt="A photo of me!" className="valPhoto hidden"/>
    </section>
}


const StyledAboutMe = styled.div`
    max-width: 50%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        padding: 5px;
    }
    @media screen and (max-width: 1024px) {
        &{max-width: 90%;}
    }
    @media screen and (max-width: 768px) {
        &{max-width: 90%;
        min-height: 55vh;}
    }
    @media screen and (max-width: 480px) {
        &{max-width: 90%;
        min-height: 40vh;}
    }
`


export default AboutMe