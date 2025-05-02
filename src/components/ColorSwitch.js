import { useContext } from "react"
import { LightDarkModeContext } from "../context/LightDarkModeContext"

const ColorSwitch = () => {
    const {theme, handleClick} = useContext(LightDarkModeContext)
    
return <>
    {theme === "light" ? <button className="modeButton" onClick={handleClick} type="button" style={{padding: "0 10px", border: "2px dashed #001b2e"}}>
            <p style={{fontSize: "2.5rem", color: "var(--color-text-dark)"}}>☀</p>
        </button> : 
        <button className="modeButton" onClick={handleClick} type="button" style={{padding: "0 15px", border: "2px dashed #c98403"}}>
            <p style={{fontSize: "2.5rem", transform: "rotate(30deg)"}}>☽</p>
    </button>}
    </> 
}

export default ColorSwitch