//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Button, alpha, useMediaQuery } from '@mui/material';
//importacion del uso de tema actual
import { useTheme } from '@mui/material/styles';
//importacion de la libreria de diseño libre
import { styled } from '@mui/system';

//layouts
import Navbar from '../../components/layouts/Navbar';

//commons
import CarouselComponent from '../../components/common/CarouselComponent';
import AboutComponent from '../../components/common/AboutComponent';
//Contacto-Seccion Footer
import ContactFooter from '../../components/common/ContactFooter';
import Skills from '../../components/common/Skills';
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
            <Box>
                <Navbar />
                <Grid
                    container //grid tipo contenedor ROW
                >
                    <Grid item sm={12} md={12}>
                        <Box
                            id="hero"
                            sx={{
                                width: '100%',
                                backgroundImage:
                                    theme.palette.mode === 'dark'
                                        ? `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`
                                        : 'linear-gradient(180deg, #CEE5FD, #FFF)',
                                backgroundSize: '100% 20%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Container
                                maxWidth="xl"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    pt: { xs: 14, sm: 20 },
                                    pb: { xs: 8, sm: 12 },
                                }}
                                data-aos="fade-up"
                            >
                                <Grid
                                    container
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, sm: 2, md: 1 }}>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                                            <Typography
                                                variant='h1'
                                                fontWeight="bold"
                                                sx={{ //detecta si existe pantalla pequeña
                                                    fontSize: matchesSM
                                                        ? 'h3.fontSize'
                                                        : matchesMD ? 'h3.fontSize'
                                                            : 'h1.fontSize',
                                                }}
                                            >
                                                Desarrolladores Full Stack.
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                                            <Typography variant='body1' sx={{ mt: 2 }}>
                                                Ingenieros de front-end y diseñadores de UI/UX que ayudan a las empresas emergentes a convertir sus visiones en una realidad digital.
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: 2, textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                                            <Button variant="outlined" sx={{ mr: 2 }}>
                                                Ver CV
                                            </Button>
                                            <Button variant="contained" color='inherit'>
                                                Contactar
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, sm: 1, md: 2 }}>
                                        <Box sx={{ p: 2, textAlign: 'center' }}>
                                            <Img
                                                src="https://img.freepik.com/fotos-premium/empresario-su-equipo_605022-1819.jpg"
                                                alt="Imagen Principal"
                                                style={{ width: "80%" }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Container>

                        </Box>
                    </Grid>
                </Grid>
                {/* Sobre nosotros */}
                
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
                <ContactFooter/>
            </Box>
        </>
    )
}

export default Home