import styled from "styled-components"
import React, { useRef } from "react"
import emailjs from '@emailjs/browser'
import { LinkedInIcon } from "./Icons"
import Paperplane from "../assets/paperplane.png"

const Contact = () => {
    const form = useRef()
    const SERVICE_ID = "valerie_contact_service"
    const TEMPLATE_ID = "template_32h3dxr"
    const PUBLIC_KEY = "B4kkWeoNj_QfPbxg6"

    const handleSubmitEmail = (ev) => {
        ev.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, ev.target, PUBLIC_KEY)
        .then((result) => {
                alert("Message sent successfully!")
                ev.target.reset()
                console.log("Success!");
            },
            (error) => {
                alert("An error has occurred")
                console.log("Failed...", error.text);
            })
    }

    return <StyledContactDiv id="Contact" className="scrollable">
        <div className="hidden" >
            <h2>Contact</h2>
            <div style={{margin: "2rem 0 9"}}>
                <p>If you'd like to get in touch with me, you can find me over on <a target="_blank" href="https://www.linkedin.com/in/val%C3%A9rie-payeur-0050baa7/"><LinkedInIcon />LinkedIn</a></p>
                <p>or fill out this form!</p>
            </div>
            <form ref={form} onSubmit={handleSubmitEmail} style={{margin: "1rem auto", position: "relative"}}>
                <div className="formDiv">
                    <div className="formElements">
                        <label htmlFor="from_name">Name: </label>
                        <input required id="from_name" name="from_name" type="text"></input>
                    </div>
                    <div className="formElements">
                        <label htmlFor="from_email">email: </label>
                        <input required id="from_email" name="from_email" type="email"></input>
                    </div>
                    <div className="formElements">
                        <label htmlFor="title">Title: </label>
                        <input required id="title" name="title" type="text"></input>
                    </div>
                </div>
                <textarea required name="message" id="message" placeholder="Type your message here!" style={{margin: "2rem auto 1rem", width: "100%", maxWidth: "500px", height: "100px", fontFamily: "Grandstander"}}></textarea>
                <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </form>
            <p>Thank you for visiting!</p>
            <img className="paperPlaneImage" src={Paperplane} alt="Send me a message, let's get in touch!" />
        </div>
    </StyledContactDiv>
}

const StyledContactDiv = styled.div`
    padding: 4rem 2rem 2rem;
    background-color: var(--color-sections-dark);
`

const StyledSubmitButton = styled.button`
    margin: 1rem auto;
    background-color: var(--color-text-light);
    border: none;
    border-radius: 15px;
    color: white;
    padding: 20px 25px;
    font-family: "Grandstander";
    font-size: 1rem;
    font-weight: bolder;
    text-shadow: 1px 1px 3px rgba(0, 0, 3, 0.25)
`

export default Contact