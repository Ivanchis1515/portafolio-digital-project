//importaciones de react
import React, {useState} from 'react';

//importacion del contexto
import { portafolioContext } from './portafolioContext';
const ContextProvider = ({ children }) => {
    //contexto para atrapar la eleccion del tema en todas las pantallas
    const [colorTheme, setColorTheme] = useState("");

    return (
        <>
            <portafolioContext.Provider
                value={{
                    //seleccion del tema
                    colorTheme, setColorTheme
                }}
            >
                { children }
            </portafolioContext.Provider>
        </>
    )
}

export default ContextProvider