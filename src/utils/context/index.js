import { useState } from "react";
import { createContext } from "react";
import { urlApi } from "../const/urlApi";
import { urlMock } from "../const/urlMock";
/**
 * Contexte de mode pour gérer l'URL actuelle utilisée par l'application.
 */
export const ModeContext = createContext()

/**
 * Fournit un contexte de mode et permet de basculer entre les URL de l'API et les URL simulées (URL Mock).
 * @param {Object} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Les composants enfants à envelopper dans le contexte.
 */

//Provider (use in routeur) and setting urlApi by default in state
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(urlApi)

    /**
     * Function for change state between urlApi and urlMock (called onClick on button page Home)
     */
    const toogleMode = () => {
        setMode(mode === urlMock ? urlApi : urlMock)
    }

    return (
        <ModeContext.Provider value={{ mode, toogleMode }}>
            {children}
        </ModeContext.Provider>
    )
}