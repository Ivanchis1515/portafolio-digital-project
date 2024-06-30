//importacion de libreria de tema personalizado
import { createTheme } from "@mui/material/styles";

const theme = (mainColor, isDarkMode) => {
    return createTheme({
        palette:{
            mode: isDarkMode ? 'dark' : 'light',
            primary:{
                main: mainColor,
            },
            secondary: {
                //define los colores específicos que necesitas
                light: '#EDE7F6',
                200: '#B39DDB',
                main: '#673AB7',
                dark: '#5E35B1',
                800: '#4527A0',
            },
        },
    });
}
export default theme;