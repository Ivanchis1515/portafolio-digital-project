//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Divider } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';

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
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    pt: { xs: 14, sm: 20, lg: 13 },
                }}
                
            >
                <Typography variant='h2'>Sobre Nosotros</Typography>
            </Container>
            {/* Persona 1*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    pt: { xs: 10, sm: 20, lg: 12 },
                }}
                data-aos="fade-up"
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 2, md: 2, lg: 1 }}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Typography variant='h4' >
                                Hernández Velázquez
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Jorge Ivan
                            </Typography>
                            <br />
                            <Typography variant='p' >
                                Soy un programador full-stack con una amplia experiencia en diversos proyectos de desarrollo web y móvil. Poseo un sólido dominio de los frameworks front-end fundamentales basados en HTML, CSS y JavaScript
                            </Typography>
                            <br /><br />
                            <Divider />
                        </Box>
                        <Box sx={{ mt: 2, textAlign: { xs: 'left', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Edad:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">21 años</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+52 221 371 9953</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">ivannhdz03@gmail.com </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Redes Sociales:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href='https://www.facebook.com/Ian.Hz7u7?mibextid=ZbWKwL'><Facebook /></a>
                                    <a href="https://www.linkedin.com/in/jorge-iv%C3%A1n-hern%C3%A1ndez-vel%C3%A1zquez-a2339a2b2/"><LinkedIn /></a>
                                    <a href="https://github.com/Ivanchis1515"><GitHub /></a>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 1, md: 1, lg: 2 }}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/IvanSinFondo.png"
                                alt="Imagen Principal"
                                style={{ width: "55%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades Persona 1*/}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8 },
                    pb: { xs: 8, sm: 12, lg: 8 },
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h3'>
                                Especialidades
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
            {/* Complemento Especialidad Persona 1 */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8, lg: 3 },
                    pb: { xs: 6, sm: 8, lg: 3 }
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/angular.png"
                                    alt="angular"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Angular</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/react.png"
                                    alt="react"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">React</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/jquery.png"
                                    alt="jquery"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">JQuery</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/bootstrap.png"
                                    alt="bootstrap"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Bootstrap</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/js.png"
                                    alt="js"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">JavaScript</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/php.png"
                                    alt="php"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">PHP</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/python.png"
                                    alt="python"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Python</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/cSharp.png"
                                    alt="cSharp"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">C#</span>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            {/* Persona 2*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 2, md: 2, lg: 2 }}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Typography variant='h4' >
                                Alarcon Briones
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Alejandro
                            </Typography>
                            <br />
                            <Typography variant='p' >
                                Soy programador full-stack con una pasión por la integración de API´S en distintos entornos del entorno laboral, así mismo poseo distintas habilidades para crear soluciones innovadoras y automatización a los problemas de la vida diaria ya sea en la industria o comercio.
                            </Typography>
                            <br /><br />
                            <Divider />
                        </Box>
                        <Box sx={{ mt: 2, textAlign: { xs: 'left', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Edad:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">22 años</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+52 221 371 9953</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">al3xgith@gmail.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Redes Sociales:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href='#'><Facebook /></a>
                                    <a href="http://www.linkedin.com/in/alejandro-alarcon5457b1319"><LinkedIn /></a>
                                    <a href="https://github.com/AlexAlar69"><GitHub /></a>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 1, md: 1, lg: 1 }}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/alejandro.png"
                                alt="Imagen Principal"
                                style={{ width: "50%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades Persona 2 */}
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
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h3'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Complemento Especialidad Persona 2 */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8, lg: 3 },
                    pb: { xs: 6, sm: 8, lg: 3 }
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/laravel.png"
                                    alt="laravel"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Laravel</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/nodejs.png"
                                    alt="nodejs"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">NodeJS</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/react.png"
                                    alt="react"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">React</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/python.png"
                                    alt="python"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Python</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/js.png"
                                    alt="js"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">JavaScript</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/github.png"
                                    alt="github"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Github</span>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            {/* Persona 3*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 2, md: 2, lg: 1 }}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Typography variant='h4' >
                                Luna Sedeño
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Jose Angel
                            </Typography>
                            <br />
                            <Typography variant='p' >
                                Como desarrollador de Software con un enfoque en el desarrollo Web y creacion de Base de Datos, he adquirido una amplia gama de habilidades y competencias. Mi experiencia abarca tanto el front-end como el back-end, lo que me permite crear aplicaciones completas y funcionales
                            </Typography>
                            <br /><br />
                            <Divider />
                        </Box>
                        <Box sx={{ mt: 2, textAlign: { xs: 'left', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Edad:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">20 años</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+52 222 809 1690</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">angellunas2609@gmail.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Redes Sociales:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href='https://www.facebook.com/share/j2CZsHWHrXbh6zWr/?mibextid=qi2Omg'><Facebook /></a>
                                    <a href="https://www.linkedin.com/in/jose-angel-luna-sede%C3%B1o-491231273?trk=contact-info"><LinkedIn /></a>
                                    <a href="https://github.com/AngelLuna6969"><GitHub /></a>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 1, md: 1, lg: 2 }}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/angel.png"
                                alt="Imagen Principal"
                                style={{ width: "80%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades Persona 3 */}
            <Container
                maxWidth="lg"
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
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h3'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Complemento Especialidad Persona 3 */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8, lg: 3 },
                    pb: { xs: 6, sm: 8, lg: 3 }
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/kotlin.png"
                                    alt="kotlin"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Kotlin</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/php.png"
                                    alt="php"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">PHP</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/react.png"
                                    alt="react"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">React</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/django.png"
                                    alt="laravel"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">django</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/cSharp.png"
                                    alt="cSharp"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">C#</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/postgres.png"
                                    alt="nodejs"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Postgres</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/python.png"
                                    alt="python"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Python</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/bootstrap.png"
                                    alt="bootstrap"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Bootstrap</span>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            {/* Persona 4*/}
            {/* Foto e informacion */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
                data-aos="fade-up"
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 2, md: 2, lg: 2 }}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Typography variant='h4' >
                                Salas Amaro
                            </Typography>
                            <Typography variant='h1' component='h2' fontWeight="bold" >
                                Nidian
                            </Typography>
                            <br />
                            <Typography variant='p' >
                                Soy una programadora Frontend con una gran intuición para resolver ,automatizar e innovar problemas en el entorno laboral por lo que es un gran activo para lograr un desarrollo,despliegue eficiente y sin problemas
                            </Typography>
                            <br /><br />
                            <Divider />
                        </Box>
                        <Box sx={{ mt: 2, textAlign: { xs: 'left', sm: 'center', md: 'center', lg: 'right' } }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Edad:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">21 años</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Telefono:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">+52 221 371 9019</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        E-mail:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="lighter">nidireyes52@gmail.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='p' fontWeight="bold">
                                        Redes Sociales:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href='#'><Facebook /></a>
                                    <a href="https://www.linkedin.com/in/nidian-salas-amaro-a05585313/"><LinkedIn /></a>
                                    <a href="https://github.com/Nidi-2323"><GitHub /></a>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 1, md: 1, lg: 1 }}>
                        <Box sx={{ textAlign: 'center', alignItems: "center" }}>
                            <Img
                                src="src/assets/images/nidian.png"
                                alt="Imagen Principal"
                                style={{ width: "60%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Especialidades Persona 4 */}
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
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <Typography variant='h3'>
                                Especialidades
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Complemento Especialidad Persona 4 */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, sm: 8, lg: 3 },
                    pb: { xs: 6, sm: 8, lg: 3 }
                }}
                data-aos="fade-up"
            >
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/html.png"
                                    alt="html"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">HTML</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/css.png"
                                    alt="css"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">CSS</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/js.png"
                                    alt="js"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">JavaScript</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/react.png"
                                    alt="react"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">React</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/github.png"
                                    alt="github"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Github</span>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={1.5} lg={1.5}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>
                            <div className="image-container">
                                <Img
                                    src="src/assets/images/python.png"
                                    alt="python"
                                    style={{ width: "100%" }}
                                />
                                <span className="tooltip">Python</span>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutComponent