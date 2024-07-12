//importaciones de react
import React, { useState, useEffect } from 'react';

//componentes de estilo MUI
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';

//recursos
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const games = [
  {
    title: 'Dota 2',
    description: 'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg',
  },
  {
    title: 'The Witcher 3',
    description: 'The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg',
  },
  {
    title: 'RDR 2',
    description: 'RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg',
  },
  {
    title: 'PUBG Mobile',
    description: 'PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg',
  },
  {
    title: 'Fortnite',
    description: 'Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg',
  },
  {
    title: 'Far Cry 5',
    description: 'Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg',
  }
];

//componente personalizado card desplegable
const GameCard = ({ game, active, onClick }) => (
  <Card
    sx={{
      margin: '0 15px 60px',
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
      '@media (max-width: 768px)': {
        width: active ? '270px' : '200px',
        height: '280px',
      },
    }}
    onClick={onClick}
  >
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

//funcion principal
const CarouselComponent = () => {
  //retoma la tarjeta desplegada
  const [activeIndex, setActiveIndex] = useState(0);

  //abre la tarjeta
  const handleCardClick = (index) => {
    //actualiza el valor de la tarjeta seleccionada
    setActiveIndex(index);
  };

  //retoma la siguiente tarjeta
  const handleNext = () => {
    // si se da click aumenta 1 la cantidad entre el numero de elementos totales
    setActiveIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  //retoma la anterior tarjeta
  const handlePrev = () => {
    //actualiza el valor tomando el indice restandole uno entre el numero de elementos totales
    setActiveIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  // useEffect(() => {
  //   const interval = setInterval(handleNext, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Box sx={{ padding: '60px 50px', position: 'relative' }}>
      {/* <Typography variant="h2" sx={{
        marginBottom: '48px',
        paddingBottom: '16px',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '700',
        position: 'relative',
        textTransform: 'capitalize',
        width: '400px',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '4px',
          borderRadius: '2px',
        },
        '&::before': {
          width: '100%',
          background: '#f2f2f2',
        },
        '&::after': {
          width: '32px',
          background: '#e73700',
        }
      }}>
        trending games
      </Typography> */}
      <Box sx={{ display: 'flex', overflow: 'hidden', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, zIndex: 10 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ display: 'flex', transition: 'transform 0.4s ease-in-out', transform: `translateX(-${activeIndex * 320}px)` }}>
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              active={index === activeIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </Box>
        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, zIndex: 10 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
