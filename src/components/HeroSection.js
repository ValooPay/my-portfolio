import styled from "styled-components"

const HeroSection = () => {
    return (
        <>            
        <StyledHeroSection id="Home">
            <h1>Welcome!</h1>
            <div>to my portfolio!</div>
            <img src="./assets/valanimation.gif" alt="Hello there!! I'm Val!" className="animationVal" />
        </StyledHeroSection>
        </>
    )
}

export default HeroSection

const StyledHeroSection = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    font-size: 5rem;
    font-weight: bolder;
    justify-content: center;
    overflow-x: hidden;
    border-bottom: dotted 10px #294C60;
    h1{
        font-size: 10rem;
        animation-name: slide-in;
        animation-duration: 1s;
    }
    div {
        animation-name: fade-in;
        animation-duration: 2.25s;
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
    }
`