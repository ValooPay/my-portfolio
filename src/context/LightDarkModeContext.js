import React from "react";
import { useState, useEffect } from "react";

export const LightDarkModeContext = React.createContext();

const LightDarkModeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const handleClick = () => {
        if(theme === "light"){
            localStorage.setItem("theme", "dark")
            return setTheme("dark")
        }
        else{
            localStorage.setItem("theme", "light")
            return setTheme("light")
        }
    }

    useEffect(() => {
        if(localStorage.getItem("theme") === "light"){
            setTheme("light")
        } else {
            setTheme("dark")
        }
    })

    return <>
    <LightDarkModeContext.Provider value={{handleClick, theme}}>
        {children}
    </LightDarkModeContext.Provider>
    </>
}

export default LightDarkModeProvider