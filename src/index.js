import ReactDOM from "react-dom/client"
import App from "./components/App"
import LightDarkModeProvider from "./context/LightDarkModeContext"
import LanguageProvider from "./context/LanguageContext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<>
    <LightDarkModeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </LightDarkModeProvider>
</>)