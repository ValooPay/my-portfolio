import React from "react";
import { useState, useEffect } from "react";

export const LanguageContext = React.createContext();

const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("en")

    const langHandleClick = () => {
        if(lang === "en"){
            localStorage.setItem("lang", "fr")
            return setLang("fr")
        }
        else {
            localStorage.setItem("lang", "en")
            return setLang("en")
        }
    }

    useEffect(() => {
        if(localStorage.getItem("lang") === "en"){
            setLang("en")
        } else {
            setLang("fr")
        }
    })

    return <>
    <LanguageContext.Provider value={{langHandleClick, lang}}>
        {children}
    </LanguageContext.Provider>
    </>
}

export default LanguageProvider