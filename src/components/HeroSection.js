import styled from "styled-components"
import AnimVal from "../assets/animationval.gif"

const HeroSection = () => {
    return (
        <>
        <StyledHeroSection id="Home">
            <h1>Welcome!</h1>
            <div>
                <img className="valAnimation" src={AnimVal + "?a="+Math.random()+""} alt="Welcome!" />
                <p>to my portfolio!</p>
            </div>
        </StyledHeroSection>
        </>
    )
}

export default HeroSection

const StyledHeroSection = styled.div`
    display: block;
    min-height: 100vh;
    font-size: 5rem;
    font-weight: bolder;
    overflow-x: hidden;
    align-content: center;
    h1{
        font-size: 10rem;
        animation-name: slide-in;
        animation-duration: 1s;
    }
    div {
        position: relative;
    }
    p{
        animation-name: fade-in;
        animation-duration: 2.25s;
    }
    img{
        position: absolute;
        width: 250px;
        height: auto;
        left: 15dvw;
        bottom: 0;
    }
    @keyframes slide-in {
        0% {
            transform-origin: left;
            transform: translate(1800px) scale(1.5, 0.5);
        }
        85% {
            transform-origin: left;
            transform: translate(100px) scale(0.75, 1.25);
            animation-timing-function: ease-in-out;
        }
        100% {
            transform-origin: left;
            transform: translate(0) scale(1, 1);
            animation-timing-function: ease-in-out;
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0%;
            
        }
        50% {
            opacity: 0%
        }
        100% {
            opacity: 100%;
        }
        
    }
    @media screen and (max-width: 480px) {
        &{max-width: 100%;
        min-height: 100;}
        img{
            left: 10dvw;
        }
    }
`