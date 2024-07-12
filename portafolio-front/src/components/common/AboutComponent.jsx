//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Container, Box, Typography, Grid, Button, Divider } from '@mui/material';

//importacion del uso de tema actual
import { useTheme } from '@mui/material/styles';

//importacion de la libreria de diseño libre
import { styled } from '@mui/system';

const AboutComponent = () => {
    //importacion del tema actual
    const theme = useTheme();
    return (
        <Grid
            container //grid tipo contenedor ROW
        >
            <Grid item sm={12} md={12}>
                <Box
                    sx={{
                        backgroundColor: 'gray'
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
                                    <Typography variant='h3' color='white'>
                                        I’m a digital designer
                                    </Typography>
                                    <Typography variant='h2' fontWeight="bold" color='white'>
                                        Julian Mack
                                    </Typography>
                                    <Typography variant='p' color='white'>
                                        Image by Freepik
                                    </Typography>
                                    <br />
                                    <Grid item sm={12} md={6} lg={6} xl={8} order={{ xs: 2, sm: 2, md: 1 }}>
                                        <Divider sx={{ bgcolor: 'white' }} />
                                    </Grid>
                                    <Typography variant='p' color='white' fontWeight="bold">
                                        Date of Birth:  <Typography variant='p' color='white'>Aug 25, 1988</Typography>
                                    </Typography>
                                    {/* 
                                    
                <br>Address:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-weight: 400;">
                  <span style="font-weight: 700;">&nbsp;</span>Rosia Road 55, Gibraltar, UK
                </span>
                <br>E-mail:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                  style="font-weight: 400;">
                  <a href="#"
                    class="u-active-none u-border-1 u-border-active-palette-5-light-2 u-border-hover-palette-5-light-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-5-light-2 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">&nbsp;julian.mack@company.com</a>
                </span>
                <span style="font-size: 1.25rem;"></span>
                <br>Phone:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-weight: 400;">&nbsp; &nbsp;
                  +13 5266 22 345</span>
              </p>
                                     */}
                                </Box>
                                <Box sx={{ mt: 2, textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'center' } }}>

                                </Box>
                            </Grid>
                            <Divider />
                            <Grid item sm={12} md={6} lg={6} xl={4} order={{ xs: 1, sm: 1, md: 2 }}>
                                <Box sx={{ p: 2, textAlign: 'center' }}>
                                    <img
                                        src="https://img.freepik.com/fotos-premium/empresario-su-equipo_605022-1819.jpg"
                                        alt="Imagen Principal"
                                        style={{ width: "90%" }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AboutComponent