import React from 'react';
import { Box, Button, TextField, Typography, IconButton, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: '8px',
  textTransform: 'none',
  padding: theme.spacing(1, 3),
  '&:hover': {
    backgroundColor: '#333',
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#333',
    },
    '&:hover fieldset': {
      borderColor: '#555',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#777',
    },
  },
}));

const ContactFooter  = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 4, textAlign: 'center', borderRadius: '8px', mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Trabajemos juntos
        </Typography>
        <CustomButton startIcon={<PlayArrowIcon />} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
          Contactar
        </CustomButton>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexDirection: isMobile ? 'column' : 'row' }}>
        <Box>
          <img src="/path-to-your-logo.png" alt="Logo" style={{ width: 50, height: 50 }} />
          <Typography variant="h4" sx={{ mt: 2 }}>Contacto</Typography>
        </Box>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: isMobile ? '100%' : '50%' }}>
          <CustomTextField
            label="Correo Electronico"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            placeholder="Ingresa tu correo electronico"
          />
          <CustomTextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            placeholder="Ingresa tu nombre"
          />
          <CustomTextField
            label="Asunto"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            placeholder="Ingresar Asunto"
          />
          <CustomTextField
            label="Mensaje"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={4}
            placeholder="Escribe tu mensaje aquí"
          />
          <Box sx={{ mt: 2, textAlign: 'right' }}>
            <CustomButton>
              Enviar
            </CustomButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#fff' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactFooter ;