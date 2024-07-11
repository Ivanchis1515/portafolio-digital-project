//importaciones de react
import React, { useContext } from 'react';

// Navegacion entre paginas
import { Link } from 'react-router-dom';

//componentes de estilo MUI
import { Box, Container, Typography, Grid, Button, alpha } from '@mui/material';

const BannerHeader = () => {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: 'auto',
                height: '100%',
                backgroundImage:
                    theme.palette.mode === 'dark'
                        ? `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`
                        : 'linear-gradient(180deg, #CEE5FD, #FFF)',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Grid
                    container
                    spacing={1}
                    justifyContent="flex-start"
                    alignItems="center"
                // style={{ height: '100vh' }} // Ajuste de altura para centrar contenido
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h1' fontWeight="bold" align='left'>
                            Desarrolladores Full Stack
                        </Typography>
                        <br />
                        <Typography variant='inherit' align='left'>
                            Ingenieros de front-end y diseñadores de UI/UX que ayudan a las empresas emergentes a convertir sus visiones en una realidad digital.
                        </Typography>
                        <br />
                        <div style={{ textAlign: 'left' }}>
                            <Button variant="contained" style={{ marginRight: '15px' }}>
                                Ver CV
                            </Button>
                            <Button variant="contained" color='inherit'>
                                Contactar
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            src="https://img.freepik.com/fotos-premium/empresario-su-equipo_605022-1819.jpg"
                            alt="Imagen Principal"
                            width="100%"
                            height="100%"
                        />
                    </Grid>
                </Grid>
                {/* <Box
                    id="image"
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 200, sm: 700 },
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'light'
                                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                                : 'url("/static/images/templates/templates-images/hero-dark.png")',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                /> */}
            </Container>
        </Box>
    )
}

export default BannerHeader
