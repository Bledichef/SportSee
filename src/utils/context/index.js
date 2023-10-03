import { useState } from "react";
import { createContext } from "react";
import { urlApi } from "../const/urlApi";
import { urlMock } from "../const/urlMock";

export const ModeContext = createContext()

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