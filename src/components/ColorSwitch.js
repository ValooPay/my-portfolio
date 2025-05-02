import { useContext } from "react"
import { LightDarkModeContext } from "../context/LightDarkModeContext"

const ColorSwitch = () => {
    const {theme, handleClick} = useContext(LightDarkModeContext)
    
return <>
    {theme === "light" ? <button className="modeButton" onClick={handleClick} type="button" style={{border: "2px dashed #001b2e"}}>
            <p className="modeButtonText">☀︎</p>
        </button> : 
        <button className="modeButton" onClick={handleClick} type="button" style={{border: "2px dashed #c98403"}}>
            <p className="modeButtonText" style={{transform: "rotate(30deg)", padding: "0 5px"}}>☽</p>
    </button>}
    </> 
}

export default ColorSwitch