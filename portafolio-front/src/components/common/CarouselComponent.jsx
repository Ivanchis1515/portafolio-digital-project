import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, useMediaQuery } from '@mui/material';

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

const GameCard = ({ game, active }) => (
  <Card
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

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
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
