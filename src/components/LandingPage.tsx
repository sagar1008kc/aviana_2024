// src/components/HomePage.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GameIcon from '@mui/icons-material/SportsEsports'; 
import ExploreIcon from '@mui/icons-material/Explore';
import BackGroundImage from '../assets/background.png';
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${BackGroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '60vh', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          padding: '0',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'fantasy',
            textAlign: 'center',
            paddingBottom: '18px',
            animation: 'fadeIn 2s ease-in-out, slideIn 2s ease-in-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
            '@keyframes slideIn': {
              '0%': { transform: 'translateY(-50px)' },
              '100%': { transform: 'translateY(0)' },
            },
          }}
        >
          Welcome to Aviana Games App!
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          maxWidth="600px"
          sx={{
            animation: 'fadeIn 3s ease-in-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          Dive into a world of exciting games designed to enhance your skills and fun!
        </Typography>
        <Button
          variant="text"
          color="inherit"
          size="medium"
          sx={{mt: '100px', fontWeight: 'bold', fontSize: '1.5rem', color: 'red'}}
        >
          ~ Click Game Icon To Play ~
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2"  textAlign="center">
          Why Play with Aviana?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <GameIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="h3" gutterBottom>
                Fun & Engaging
              </Typography>
              <Typography variant="body1">
                Enjoy games that are not only fun but also challenge your mind and creativity.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <ExploreIcon fontSize="large" color="success" />
              <Typography variant="h6" component="h3" gutterBottom>
                Explore & Learn
              </Typography>
              <Typography variant="body1">
                Discover new challenges and enhance your critical thinking with every game.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
