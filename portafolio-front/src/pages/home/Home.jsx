//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Button, alpha, useMediaQuery } from '@mui/material';
//importacion del uso de tema actual
import { useTheme } from '@mui/material/styles';
//importacion de la libreria de diseño libre
import { styled } from '@mui/system';

//hojas de estilo
import '../../assets/css/estilo.css';

//layouts
import Navbar from '../../components/layouts/Navbar';

//commons
import CarouselComponent from '../../components/common/CarouselComponent';
import AboutComponent from '../../components/common/AboutComponent';
//Contacto-Seccion Footer
import ContactFooter from '../../components/common/ContactFooter';
import Skills from '../../components/common/Skills';
import Start from '../../components/common/Start';
import CarouselCardComponent from '../../components/common/CarouselCardComponent';
// import ContactFoot from '../../components/common/ContactFoot'

//creacion del nuevo modulo de imagen
const Img = styled("img")({
    width: "50%",
    height: "50%",
    objectFit: "cover",
    objectPosition: "center",
    transition: 'transform 0.3s ease', //transicion
    '&:hover': {
        transform: 'scale(1.1)', //acercamiento
    },
});

const Home = () => {
    const theme = useTheme();

    //media querys de MUI para detectar el tipo de pantalla
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Box id="home">
                <Navbar />
                <Start />
                {/* Sobre nosotros */}
                <AboutComponent />
                {/* Carrusel */}
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: matchesSM
                                        ? theme.typography.h3.fontSize
                                        : matchesMD
                                            ? theme.typography.h3.fontSize
                                            : theme.typography.h2.fontSize,
                                }}
                            >
                                Proyectos
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Typography variant="body1">
                                Hecha un vistazo a los proyectos que han consolidado nuestra presencia en el mercado
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ overflow: 'hidden' }}>
                            <CarouselComponent />
                        </Box>
                    </Grid>
                </Grid>
                {/* ./carrusel */}

                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item sm={12} lg={6}>
                        <Typography variant="h2" textAlign="center">
                            Habilidades que hemos adquirido a lo largo del tiempo
                        </Typography>
                    </Grid>
                    <Grid item sm={12} lg={12}>
                        {/* <Skills /> */}
                    </Grid>
                </Grid>
                <ContactFooter />
            </Box>
        </>
    )
}

export default Home