//importaciones de react
import React from 'react';//componentes de estilo MUI

import { Container, Box, Typography, Grid, Button, alpha, useMediaQuery } from '@mui/material';
//importacion del uso de tema actual
import { useTheme } from '@mui/material/styles';
//importacion de la libreria de diseño libre
import { styled } from '@mui/system';

//recursos
import DarkModeGradient from '../../assets/images/svg/darkmode.svg';
import LightModeGradient from '../../assets/images/svg/lightmode.svg';

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

const Start = () => {
  const theme = useTheme();

  //obtener el tema actual
  const getBackgroundImage = () => {
    if (theme.palette.mode === 'dark') {
      return `url(${DarkModeGradient})`;
    } else {
      return `url(${LightModeGradient})`;
    }
  };

  //media querys de MUI para detectar el tipo de pantalla
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Grid
        container //grid tipo contenedor ROW
      >
        <Grid item sm={12} md={12}>
          <Box
            id="hero"
            sx={{
              width: '100%',
              backgroundImage:getBackgroundImage(),
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
                pt: { xs: 14, sm: 20, lg: 25 },
                pb: { xs: 8, sm: 12, lg: 15 },
              }}
              data-aos="fade-up"
            >
              <Grid
                container
                spacing={1}
                alignItems="center"
              >
                <Grid item sm={12} md={12} lg={6} xl={8} order={{ xs: 2, sm: 2, md: 2 }}>
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
                      La casa del código
                    </Typography>
                    <Typography variant='h4'>
                      La verdad solo se puede encontrar en un lugar "El código"
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
                    <Typography variant='body1' sx={{ mt: 2 }}>
                      Somos un equipo de desarrollo de software con programadores FullStack enfocados en la creacion de programas y aplicaciones.
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
                <Grid item sm={12} md={12} lg={6} xl={4} order={{ xs: 1, sm: 1, md: 1 }}>
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Img
                      src="src/assets/images/principal.jpg"
                      alt="Imagen Principal"
                      style={{ width: "95%" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Start
