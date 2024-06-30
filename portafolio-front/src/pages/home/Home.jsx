//importaciones de react
import React from 'react';

//componentes de estilo MUI
import { Typography, Container, Grid } from '@mui/material';

const Home = () => {
    return (
        <>
            <Container maxWidth="md">
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: '100vh' }} // Ajuste de altura para centrar contenido
                >
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" gutterBottom>
                            ¡Bienvenido a nuestro sitio!
                        </Typography>
                        <Typography variant="body1" align="center">
                            Este es un mensaje de bienvenida utilizando Material-UI.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home