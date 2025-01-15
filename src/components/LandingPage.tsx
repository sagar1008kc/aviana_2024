import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import GameIcon from '@mui/icons-material/SportsEsports'; 

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #2196F3, #E91E63)', // Gradient from blue to pink
          height: '50vh',
          width: '100%', // Full width
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '0',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 -10px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on top and bottom
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'fantasy',
            textAlign: 'center',
            paddingBottom: '18px',
            animation: 'fadeIn 2s ease-in-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          Welcome to Aviana Games!
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          maxWidth="600px"
          sx={{
            padding: '0 20px',
          }}
        >
          A world of exciting challenges awaits. Play, learn, and grow with every game!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: '30px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textTransform: 'none',
            padding: '10px 30px',
          }}
        >
          Play now by clicking game icon
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
