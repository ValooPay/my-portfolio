import ReactDOM from "react-dom/client"
import App from "./components/App"
import LightDarkModeProvider from "./context/LightDarkModeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<>
    <LightDarkModeProvider>
        <App />
    </LightDarkModeProvider>
</>)