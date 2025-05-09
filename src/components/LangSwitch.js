import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const LangSwitch = () => {
    const { lang, langHandleClick } = useContext(LanguageContext)

    return <>
    {lang === "en" ? <a onClick={langHandleClick}>fr</a> : <a onClick={langHandleClick}>en</a>}
    </>
}

export default LangSwitch