import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const LangSwitch = () => {
    const { lang, langHandleClick } = useContext(LanguageContext)

    return <>
    {lang === "en" ? <a onClick={langHandleClick}>{lang}</a> : <a onClick={langHandleClick}>{lang}</a>}
    </>
}

export default LangSwitch