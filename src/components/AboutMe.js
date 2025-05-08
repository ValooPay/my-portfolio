import styled from "styled-components"
import Valuigi from "../assets/valuigi.jpg"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const AboutMe = () => {
    const { lang } = useContext(LanguageContext)

    return <section id="About me" className="paleSections scrollable columnOnMobile" style={{position: "relative"}}>
    <div className="custom-shape-divider-top-1744989386">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>
    <StyledAboutMe>
        {lang === "en" ? <>
        <div className="hidden">
            <h2>About me</h2>
                <p>
                    Hello! I'm Valérie! <span className="smallText">(Nice to meet you!)</span>
                </p>
                <p>
                    At my core, I am an artist with a passion for bringing ideas to life. I'm also a gamer who loves putting her brain to work solving puzzles. 
                </p>
                <p>
                    My near 10 years of experience in the animation industry has shaped me into the dedicated person I am today. I always strive to improve my skills, as well as learning new things. 
                    Learning how to code in a short period of time has been a wonderful challenge and I look forward to putting my knowledge to the test!
                </p>
        </div>
        </> : <>
        <div className="hidden">
            <h2>À propos</h2>
                <p>
                    Coucou! Je m'appelle Valérie! <span className="smallText">(Enchantée!)</span>
                </p>
                <p>
                    Je suis avant tout une artiste qui adore donner vie à différents projets. Je suis aussi une passionnée de jeux vidéos qui adore la résolution de problèmes. 
                </p>
                <p>
                    Ma dizaine d'années d'expérience dans l'industrie de l'animation ont fait de moi la personne dévouée que je suis aujourd'hui. Je cherche toujours à améliorer mes compétences et à étendre mes connaissances.
                    Apprendre à programmer dans un délai si court a été un défi formidable et j'ai hâte de mettre mes connaissances à exécution!
                </p>
        </div>
        </>
        }
    </StyledAboutMe>
    <img src={Valuigi} alt="A photo of me!" className="valPhoto hidden"/>
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