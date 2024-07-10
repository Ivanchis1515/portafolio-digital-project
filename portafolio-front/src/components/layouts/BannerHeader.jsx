import React from 'react'

//componentes de estilo MUI
import { Typography, Container, Grid, Button } from '@mui/material';

const BannerHeader = () => {
    return (
        <Container maxWidth="lg" //ajuste para el tamaño de la pantalla
        >
            <Grid // grid principal
                container
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
                style={{ height: '100vh' }} // Ajuste de altura para centrar contenido
            >
                <Grid //grid banner
                    item xs={6}>
                    <Typography variant='h1' fontWeight="bold" align='left'>Desarrolladores Full Stack</Typography>
                    <br />
                    <Typography variant='inherit' align='left'>
                        Ingenieros de front-end y diseñadores de UI/UX que ayudan a las empresas emergentes a convertir sus visiones en una realidad digital.
                    </Typography>
                    <br />
                    <div style={{ textAlign: 'left' }}>
                        <Button variant="contained" style={{ marginRight: '15px' }}>Ver CV</Button>
                        <Button variant="contained" color='inherit'>Contactar</Button>
                    </div>
                </Grid>
                <Grid //grid imagen principal 
                    item xs={6}
                >
                    <img src="https://img.freepik.com/foto-gratis/reunion-empresarios-oficina-trabajo_23-2148908910.jpg" alt="Imagen" width="100%" height="100%"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BannerHeader
