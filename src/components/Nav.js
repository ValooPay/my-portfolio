import styled from "styled-components"
import React from "react"

const navBarDirectories = ["Home", "About me", "Projects", "Contact"]
const navBarHrefLink = ["/", "/#aboutMe", "/#projects", "/#contact"]

const Nav = () => {
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
            }} >{directory}</a>
        })}
    </StyledNavigationBar>
}

const StyledNavigationBar = styled.nav`
    background-color: #FFC49B;
    border-bottom: dotted 5px #294C60;
    font-weight: bolder;
    font-size: 2rem;
    padding: 1.5rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    align-items: center;
    position: sticky;
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