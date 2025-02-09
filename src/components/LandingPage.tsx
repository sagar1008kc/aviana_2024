import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import GameIcon from '@mui/icons-material/SportsEsports';

const LandingPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E3C72, #2A5298, #E91E63)', // Smooth gradient
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '20px',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
          animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: '"Merriweather", serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 3px 6px rgba(0,0,0,0.3)',
          }}
        >
          Welcome to Aviana Games
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mt: 3,
            fontWeight: 'bold',
            fontSize: '.75rem',
            padding: '12px 36px',
            borderRadius: '30px',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: '#D81B60',
            },
          }}
        >
          <GameIcon sx={{ fontSize: 28 }} />
          Play Now--click on game icon
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
