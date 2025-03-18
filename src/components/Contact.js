import styled from "styled-components"
import { LinkedInIcon } from "./Icons"

const Contact = () => {
    return (<StyledContactDiv id="Contact" className="scrollable">
        <div className="hidden">
            <h2 style={{marginBottom: "2rem"}}>Contact</h2>
            <p>If you'd like to get in touch with me, you can find me over on <a target="_blank" href="https://www.linkedin.com/in/val%C3%A9rie-payeur-0050baa7/"><LinkedInIcon />LinkedIn</a></p>
            <p>or fill out this form! (Currently disabled)</p>
            <form onSubmit={(ev) => {ev.preventDefault()}}>
                <label htmlFor="nameInput">Name: <input required id="nameInput" type="text"></input></label>
                <label htmlFor="emailInput">email: <input required id="emailInput" type="text"></input></label>
                <textarea placeholder="Type your message here!" style={{margin: "2rem auto 1rem", width: "500px", height: "100px"}}></textarea>
                <StyledSubmitButton disabled={true} type="submit">Submit</StyledSubmitButton>
            </form>
            <p>Thank you for visiting!</p>
            <img className="paperPlaneImage" src="./assets/paperplane.png" alt="Send me a message, let's get in touch!" />
        </div>
    </StyledContactDiv>
    )
}

const StyledContactDiv = styled.div`
    background-color: #FFC49B;
    padding: 4rem 2rem;
    height: 60vh;
    border-top: dotted 10px #294c60;
`

const StyledSubmitButton = styled.button`
    margin: auto;
    background-color: #001b2e;
    border: none;
    border-radius: 15px;
    color: white;
    padding: 20px 25px;
    font-family: "Grandstander";
    font-size: 1rem;
    font-weight: bolder;
`

export default Contact