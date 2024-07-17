import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
    'https://images.pexels.com/photos/991012/pexels-photo-991012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/92733/pexels-photo-92733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1008732/pexels-photo-1008732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
];

const CarouselCardComponent = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh',
                    // backgroundColor: '#eaeaea',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        maxWidth: 900,
                        maxHeight: 550,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {images.map((img, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: current === index ? 'flex' : 'none',
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                position: 'absolute',
                                transition: '0.6s all linear',
                                backgroundColor: '#fff',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '60%',
                                    height: '100%',
                                    backgroundImage: `url(${img})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                            />
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    padding: '0 40px',
                                    width: '40%',
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ letterSpacing: 3, textTransform: 'uppercase', color: '#7E7E7E' }}>
                                    {`Subtitle ${index + 1}`}
                                </Typography>
                                <Typography variant="h3" sx={{ letterSpacing: 3, color: '#2C2C2C', mt: 1 }}>
                                    {`Title ${index + 1}`}
                                </Typography>
                                <Typography sx={{ mt: 3, color: '#7e7e7e', lineHeight: '22px' }}>
                                    {`Description for image ${index + 1}`}
                                </Typography>
                                <Button sx={{ mt: 3, textTransform: 'uppercase', letterSpacing: 3 }}>
                                    {`Button ${index + 1}`}
                                </Button>
                            </Box>
                        </Box>
                    ))}
                    <Box
                        sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#fff',
                            zIndex: 2,
                        }}
                    >
                        <IconButton onClick={handlePrev}>
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton onClick={handleNext}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CarouselCardComponent