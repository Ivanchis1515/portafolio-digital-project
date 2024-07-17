//importaciones de react
import React from 'react'

//componentes de estilo de MUI
import { Box } from '@mui/material';

//importacion de Spline
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
    return (
        <>
            <Box 
                sx={{
                    width: '100%',
                    // height: '100%',
                    transform: 'scale(0.2)', // Ejemplo de escala al 50%
                    alignItems:"left",
                    justifyItems:"left"
                }}
            >
                <Spline 
                    scene="https://prod.spline.design/JiYTN6-AdBm6-0sT/scene.splinecode" 
                    
                />
            </Box>
        </>
    )
}

export default SplineComponent