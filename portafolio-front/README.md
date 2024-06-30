# Nombre del proyecto: Portafolio Digital
****

Este proyecto toma forma de la materia Administración de proyectos para TI. El objetivo de este proyecto es generar un portafolio digital de un grupo de desarrollo, que amplie asi sus capacidades de obtener trabajo además de demostrar las capacidades tecnicas que poseen.

# Tabla de contenidos
1. [Descripción general](#descripción)
2. [Tecnologías usadas](#tecnologias)
3. [Instalación](#instalación)
4. [Colaboración](#colaboracion)
5. [Paqueterias](#pqueterias)


## Descripción general
El proyecto consiste en un portafolio digital que eleva el concepto tradicional de un currículum vitae a un nuevo nivel. Utilizando tecnologías modernas, este portafolio ofrece una experiencia de usuario única y destaca la trayectoria y habilidades de nuestro equipo de desarrollo. Además de aumentar las contrataciones, servirá como una vitrina para mostrar todos los proyectos que hemos realizado.

## Tecnologias usadas
***
Esta es una lista de las tecnologias usadas en este proyecto
* [React Vite](https://vitejs.dev/): Version 4.1.0
* [Material UI](https://mui.com/): Version 5.15.21

## Instalación
para instalar y ejecutar este proyecto localmente sigue estos pasos.
```
git clone url
```

*pasos para instalar las dependencias del frontend*
```
cd portafolio-front
npm install
npm run dev
```

*pasos backend*
proximamente

## Colaboración


## Paqueterias instaladas
**Front-End**
* Material UI:
1. Instalacion por defecto:
```
npm install @mui/material @emotion/react @emotion/styled 
```
2. Los estilos de componentes:
```
npm install @mui/material @mui/styled-engine-sc styled-components
```
3. Fuentes Roboto: 
```
npm install @fontsource/roboto
**NOTA AGREGAR LOS SIGUIENTES FUENTES AL ARCHIVO MAIN**
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```
4. Agregar los iconos de MUI
```
npm install @mui/icons-material
```
5. Opcional Lab:
```
npm install @mui/lab
```

* React Router DOM
1. Instalar 
```
npm install react-router-dom@6
NOTA: hacer la importacion del modulo 
*import { BrowserRouter } from "react-router-dom";*
y englobar toda la aplicacion dentro de ella del main o app
```
* AOS (Animation On Scroll)
1. Biblioteca de desplazamiento
```
npm install aos --save
```