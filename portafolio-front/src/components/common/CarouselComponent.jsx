//importaciones de react
import React, { useState, useEffect, useRef } from 'react';
//componentes de MUI
import { Box, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
//recursos
import TeamH from '../../assets/images/logoADM.jpg';
import AMGALA from '../../assets/images/Amgala.jpeg';
import Vite from '../../assets/images/svg/vite.svg';
import FigmaIcon from '../../assets/images/svg/figma.svg';
import ReactIcon from '../../assets/images/svg/react.svg';
import DjangoIcon from '../../assets/images/svg/python.svg';
import BootstrapIcon from '../../assets/images/svg/bootstrap.svg';

import PHPIcon from '../../assets/images/svg/php.svg';
import JavaScriptIcon from '../../assets/images/svg/javascript.svg';
import PythonIcon from '../../assets/images/svg/django.svg';
import FirebaseIcon from '../../assets/images/svg/firebase.svg';

import CssIcon from '../../assets/images/svg/css3.svg';
import HTMLIcon from '../../assets/images/svg/html.svg';

//datos ficticios
const games = [
  {
    title: 'Team Hernández',
    description: 'Sistema de gestión administrativa para un gimnasio centralizado para eficientizar los registros del gimnasio.',
    imageUrl: TeamH,
    urlProject: 'https://github.com/Ivanchis1515/TeamHernandez',
    technologies: [
      { name: 'HTML', iconUrl: HTMLIcon },
      { name: 'Css', iconUrl: CssIcon },
      { name: 'JavaScript', iconUrl: JavaScriptIcon },
      { name: 'Php', iconUrl: PHPIcon }
    ],
  },
  {
    title: 'FIX-PHONE',
    description: 'Plataforma proveedora de servicios para los dispositivos moviles en multiples marcas.',
    imageUrl: 'https://fix-phone-b464a.web.app/assets/logo-75013d93.png',
    urlProject: 'https://fix-phone-b464a.web.app/',
    technologies: [
      { name: 'React', iconUrl: ReactIcon },
      { name: 'Bootstrap', iconUrl: BootstrapIcon },
      { name: 'Firebase', iconUrl: FirebaseIcon },
      { name: 'Figma', iconUrl: FigmaIcon }
    ],
  },
  {
    title: 'Criptografia de transacciones',
    description: 'A traves de la criptografía, se creo una plataforma de transacciones encriptadas.',
    imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png',
    urlProject: 'https://cripto-270b6.firebaseapp.com/',
    technologies: [
      { name: 'React', iconUrl: ReactIcon },
      { name: 'Bootstrap', iconUrl: BootstrapIcon },
      { name: 'Firebase', iconUrl: FirebaseIcon },
      { name: 'Figma', iconUrl: FigmaIcon }
    ],
  },
  {
    title: 'React-WeatherApi',
    description: 'Aplicacion de clima consumiendo la API de openweathermap, diagnosticos en tiempo real y diseño moderno.',
    imageUrl: Vite,
    urlProject: 'https://github.com/Ivanchis1515/React-WeatherAPIMap',
    technologies: [
      { name: 'React', iconUrl: ReactIcon },
      { name: 'Bootstrap', iconUrl: BootstrapIcon },
    ],
  },
  {
    title: 'AMGALA',
    description: 'Sistema de gestion de una empresa, ofrece un sentido descentralizado por lo que se considera un sistema robusta',
    imageUrl: AMGALA,
    urlProject: 'https://github.com/AngelLuna6969/Plantilla-Django',
    technologies: [
      { name: 'Django', iconUrl: DjangoIcon },
      { name: 'Python', iconUrl: PythonIcon },
      { name: 'Css', iconUrl: CssIcon },
      { name: 'HTML', iconUrl: HTMLIcon },
    ],
  },
];

//cartas por separado con la informacion 
const GameCard = ({ game, active }) => (
  //estas cartas reciben los atributos del arreglo games
  <Card
    onClick={() => window.open(game.urlProject, '_blank')}
    sx={{
      margin: '0 15px',
      width: active ? '500px' : '320px',
      height: '400px',
      display: 'flex',
      alignItems: 'flex-end',
      background: `url(${game.imageUrl}) center center / cover no-repeat`,
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.4s ease-in-out',
      boxShadow: active ? '12px 40px 40px rgba(0, 0, 0, 0.25)' : 'none',
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
      },
    }}
  >
        <Box
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        display: 'flex',
        gap: '8px',
      }}
    >
      {game.technologies.map((tech, index) => (
        <img
          key={index}
          src={tech.iconUrl}
          alt={tech.name}
          style={{ width: '24px', height: '24px' }}
        />
      ))}
    </Box>
    <CardContent
      sx={{
        padding: '0 24px 12px',
        color: '#fff',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        transform: active ? 'none' : 'translateY(calc(100% - 54px))',
        transition: 'all 0.4s ease-in-out',
        '& p': {
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.4s ease-in-out 0.2s',
        },
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '10px', fontSize: '28px', lineHeight: '36px' }}>{game.title}</Typography>
      <Typography>{game.description}</Typography>
    </CardContent>
  </Card>
);

//componente principal
const CarouselComponent = () => {
  //variable para tomar las imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);
  //variable para guardar la imagen que esta activa
  const [activeIndex, setActiveIndex] = useState(0);
  //detecta su la pantalla se redimensiona
  const isSmallerScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (games.length * 2)); // Duplicamos la longitud
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveIndex(currentIndex % games.length); // Solo consideramos la longitud original para el índice activo
  }, [currentIndex]);

  return (
    <Box sx={{ padding: '60px 50px' }}>
      <Typography variant="h2" sx={{ marginBottom: '48px', paddingBottom: '16px', fontSize: '20px', lineHeight: '28px', fontWeight: '700', position: 'relative', textTransform: 'capitalize', width: '400px', '&::before': { content: '""', position: 'absolute', bottom: 0, left: 0, height: '4px', borderRadius: '2px', width: '100%', background: '#f2f2f2' }, '&::after': { content: '""', position: 'absolute', bottom: 0, left: 0, height: '4px', borderRadius: '2px', width: '32px', background: '#e73700' } }}>
        trending games
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
        }}
        ref={containerRef}
      >
        {[...games, ...games].map((game, index) => ( // Duplicamos el array
          <Box
            key={index}
            sx={{
              minWidth: '320px',
              flexShrink: 0,
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 320}px)`,
            }}
          >
            <GameCard game={game} active={index % games.length === activeIndex} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarouselComponent;
