import { useContext } from "react"
import { LightDarkModeContext } from "../context/LightDarkModeContext"

const ColorSwitch = () => {
    const {theme, handleClick} = useContext(LightDarkModeContext)
    
return <>
    {theme === "light" ? <button className="modeButton" onClick={handleClick} type="button" style={{border: "2px dashed #001b2e"}}>
            <p className="modeButtonText">&#127774;</p>
        </button> : 
        <button className="modeButton" onClick={handleClick} type="button" style={{border: "2px dashed #c98403"}}>
            <p className="modeButtonText">&#127773;</p>
    </button>}
    </> 
}

export default ColorSwitch