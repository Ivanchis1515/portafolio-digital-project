//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Button, Divider } from '@mui/material';

//importacion de la libreria de diseño libre
import { styled } from '@mui/system';

const AboutComponent = () => {
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
    return (
        <>
            {/* Persona 1*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, md:2, lg:1}}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                            <Typography variant='h4' >
                                I’m a digital designer
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Julian Mack
                            </Typography>
                            <Typography variant='p' >
                                Image by Freepik
                            </Typography>
                            <br /><br />
                            <Grid item sm={12} md={6} lg={8} xl={6}>
                                <Divider />
                            </Grid>
                        </Box>
                        <Box width={400} sx={{ mt: 2, textAlign: { xs: 'left', sm: 'left', md: 'left', lg: 'left' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Fecha de Nacimiento:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Aug 25, 1988</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Direccion:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Rosia Road 55, Gibraltar, UK</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">julian.mack@company.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+55 5266 22 345</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, md:2, lg:2}}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/ImageExample.jpeg"
                                alt="Imagen Principal"
                                style={{ width: "85%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8 },
                    pb: { xs: 8, sm: 12 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h2'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Persona 2*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, md:2, lg:2}}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'right', lg: 'right' } }}>
                            <Typography variant='h4' >
                                I’m a digital designer
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Julian Mack
                            </Typography>
                            <Typography variant='p' >
                                Image by Freepik
                            </Typography>
                            <br /><br />
                            <Grid item sm={12} md={6} lg={8} xl={6}>
                                <Divider />
                            </Grid>
                        </Box>
                        <Box width={400} sx={{ mt: 2, textAlign: { xs: 'left', sm: 'left', md: 'right', lg: 'right' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Fecha de Nacimiento:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Aug 25, 1988</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Direccion:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Rosia Road 55, Gibraltar, UK</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">julian.mack@company.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+55 5266 22 345</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, md:1, lg:1}}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/ImageExample.jpeg"
                                alt="Imagen Principal"
                                style={{ width: "85%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8 },
                    pb: { xs: 8, sm: 12 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h2'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Persona 3*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, md:1, lg:1}}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                            <Typography variant='h4' >
                                I’m a digital designer
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Julian Mack
                            </Typography>
                            <Typography variant='p' >
                                Image by Freepik
                            </Typography>
                            <br /><br />
                            <Grid item sm={12} md={6} lg={8} xl={6}>
                                <Divider />
                            </Grid>
                        </Box>
                        <Box width={400} sx={{ mt: 2, textAlign: { xs: 'left', sm: 'left', md: 'left', lg: 'left' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Fecha de Nacimiento:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Aug 25, 1988</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Direccion:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Rosia Road 55, Gibraltar, UK</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">julian.mack@company.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+55 5266 22 345</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, md:2, lg:2}}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/ImageExample.jpeg"
                                alt="Imagen Principal"
                                style={{ width: "85%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8 },
                    pb: { xs: 8, sm: 12 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h2'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Persona 4*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, md:2, lg:2}}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                            <Typography variant='h4' >
                                I’m a digital designer
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Julian Mack
                            </Typography>
                            <Typography variant='p' >
                                Image by Freepik
                            </Typography>
                            <br /><br />
                            <Grid item sm={12} md={6} lg={8} xl={6}>
                                <Divider />
                            </Grid>
                        </Box>
                        <Box width={400} sx={{ mt: 2, textAlign: { xs: 'left', sm: 'left', md: 'left', lg: 'left' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Fecha de Nacimiento:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Aug 25, 1988</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Direccion:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">Rosia Road 55, Gibraltar, UK</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">julian.mack@company.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+55 5266 22 345</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, md:1, lg:1}}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/ImageExample.jpeg"
                                alt="Imagen Principal"
                                style={{ width: "85%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades */}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8 },
                    pb: { xs: 8, sm: 12 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h2'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutComponent