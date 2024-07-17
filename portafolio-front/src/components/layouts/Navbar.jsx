//importaciones de react
import React, { useState, useContext } from 'react';

//importaciones de estilo de MUI
import { AppBar, Container, Toolbar, Box, MenuItem, Button, Typography, Drawer, Divider, useTheme } from '@mui/material';

//recursos
import HomeIcon from '@mui/icons-material/Home'; //icono casa
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //icono usuario´
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; //icono maletin
import MenuIcon from '@mui/icons-material/Menu'; //icono menu hamburguesa
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'; //icno sol
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'; //icono luna
import LinkedInIcon from '@mui/icons-material/LinkedIn'; //icono linkedin
import GitHubIcon from '@mui/icons-material/GitHub'; //icono git
import SplineComponent from '../common/SplineComponent'; //sppline

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

//importacion del contexto
import { portafolioContext } from '../../context/portafolioContext';

const Navbar = () => {
    //uso del tema definido
    const theme = useTheme();

    //variables globales
    const { colorTheme, setColorTheme } = useContext(portafolioContext);

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    // PANTALLAS PEQUEÑAS
    //estado para capturar la apertura del menu
    const [open, setOpen] = useState(false);
    //funcion para abrir el menu
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            {/* Appbar */}
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: "transparent",
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                {/* Content lg */}
                <Container maxWidth="lg">
                    {/* Toolbar */}
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            borderRadius: "999px",
                            bgcolor: theme.palette.mode === 'dark'
                                ? 'rgba(0, 0, 0, 0.4)'
                                : 'rgba(255, 255, 255, 0.4)',
                            backdropFilter: "blur(24px)",
                            maxHeight: "32px", // Reducido el alto de la navbar
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow: theme.palette.mode === 'dark'
                            ? '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)'
                            : `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
                        }}
                    >
                        {/* Content lg */}
                        {/* Links */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0
                            }}
                        >
                            <img
                                src={
                                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                                }
                                style={logoStyle}
                                alt="logo of sitemark"
                                onClick={() => scrollToSection("home")}
                            />
                            {/* <SplineComponent onClick={() => scrollToSection("hero")} /> */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                    onClick={() => scrollToSection("hero")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">Inicio</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("about")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">Acerca de nosotros</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("project")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">Proyectos</Typography>
                                </MenuItem>
                                <MenuItem
                                    // onClick={() => scrollToSection("Nombre_seccion")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">Reconocimientos</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("footer")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">FaQ</Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        {/* ./links */}
                        {/* Colormode */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0.5,
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ maxWidth: "32px" }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    aria-label="Cambiar el tema"
                                    sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                                >
                                    <LinkedInIcon />
                                </Button>
                            </Box>
                            <Box sx={{ maxWidth: "32px" }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    aria-label="Cambiar el tema"
                                    sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                                >
                                    <GitHubIcon />
                                </Button>
                            </Box>
                            {/* <Button
                                color="primary"
                                variant="text"
                                size="small"
                                target="_blank"
                            >
                                Sign in
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                target="_blank"
                            >
                                Sign up
                            </Button> */}
                            <Divider orientation="vertical" flexItem sx={{ marginLeft: "10px" }} />
                            <Box sx={{ maxWidth: "32px" }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    aria-label="Cambiar el tema"
                                    sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                                    onClick={() => setColorTheme(!colorTheme)}
                                >
                                    {colorTheme ? <WbSunnyRoundedIcon /> : <ModeNightRoundedIcon />}
                                </Button>
                            </Box>
                        </Box>
                        {/* ./colormode */}
                        {/* ./content lg */}

                        {/* content sm */}
                        <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                            color: theme.palette.primary.main
                                        }}
                                        onClick={() => setColorTheme(!colorTheme)}
                                    >
                                        {colorTheme ? <WbSunnyRoundedIcon /> : <ModeNightRoundedIcon />}
                                    </Box>
                                    <MenuItem
                                        // onClick={() => ScrollToSection("Nombre_seccion")}
                                        sx={{ py: "6px", px: "12px" }}
                                    >
                                        <Typography variant="body2" color="text.primary">Features</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        // onClick={() => ScrollToSection("Nombre_seccion")}
                                        sx={{ py: "6px", px: "12px" }}
                                    >
                                        <Typography variant="body2" color="text.primary">Testimonials</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        // onClick={() => ScrollToSection("Nombre_seccion")}
                                        sx={{ py: "6px", px: "12px" }}
                                    >
                                        <Typography variant="body2" color="text.primary">Highlights</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        // onClick={() => ScrollToSection("Nombre_seccion")}
                                        sx={{ py: "6px", px: "12px" }}
                                    >
                                        <Typography variant="body2" color="text.primary">Pricing</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        // onClick={() => ScrollToSection("Nombre_seccion")}
                                        sx={{ py: "6px", px: "12px" }}
                                    >
                                        <Typography variant="body2" color="text.primary">FAQ</Typography>
                                    </MenuItem>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            gap: 1, // Espacio entre íconos
                                            mb: 2, // Margen inferior
                                            marginLeft: "10px"
                                        }}
                                    >
                                        <LinkedInIcon />
                                        <GitHubIcon />
                                    </Box>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            target="_blank"
                                            sx={{ width: "100%" }}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            target="_blank"
                                            sx={{ width: "100%" }}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                        {/* ./content sm */}

                    </Toolbar>
                </Container>
                {/* ./Content lg */}
            </AppBar>

        </>
    )
}

export default Navbar