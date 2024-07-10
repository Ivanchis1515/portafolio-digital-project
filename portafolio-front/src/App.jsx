//importaciones de react
import React from 'react';

//importacion del enrutador
import Router from './routes/Router';

//Uso de la libreria CssBaseLine para el estilo MUI
import { CssBaseline } from '@mui/material';

//importacion del tema aplicado
import { ThemeProvider } from '@emotion/react';
//importacion del tema personalizado
import theme from './themes/Theme';

//importaciones de librerias Roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//importacion de la libreria Animated on Scroll
// import AOS from 'aos';
// import 'aos/dist/aos.css';

//importacion del contexto de la aplicacion
import ContextProvider from './context/ContextProvider';

const App = () => {
  const mainColor = '#3F51B5'; //ejemplo que define el color principal dinámico
  const isDarkMode = false; //ejemplo que define si está en modo oscuro o no
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme(mainColor, isDarkMode)}>
          <CssBaseline />
          <Router /> {/* este es el contenido */}
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}
export default App;