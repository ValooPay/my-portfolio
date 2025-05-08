import styled from "styled-components"
import React from "react"
import LangSwitch from "./LangSwitch"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"


const Nav = () => {
    const { lang } = useContext(LanguageContext)
    const navBarDirectories = ["Home", "About me", "Projects", "Contact"]
    const navBarDirectoriesFr = ["Accueil", "À propos", "Projets", "Contact"]
    const navBarHrefLink = ["/", "/#aboutMe", "/#projects", "/#contact"]

    return <StyledNavigationBar>
        {navBarDirectories.map((directory, index) => {
            return <a href={navBarHrefLink[index]} key={directory} onClick={(ev) => {ev.preventDefault()
                if(index === 0){
                    window.scrollTo({top: 0, behavior: "smooth"})
                }
                else {
                    document.getElementById(directory).scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }} >{lang === "en" ? directory : navBarDirectoriesFr[index]}</a>
        })}
        <LangSwitch />
    </StyledNavigationBar>
}

const StyledNavigationBar = styled.nav`
    background-color: var(--color-sections-dark);
    border-bottom: dashed 3px var(--color-text-light);
    font-weight: bolder;
    font-size: 2rem;
    padding: 1.5rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    a{
        animation-name: fadeIn;
        animation-duration: 2s;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }
`

export default Nav