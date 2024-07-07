// src/components/HomePage.tsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GameIcon from '@mui/icons-material/SportsEsports'; // Import an appropriate icon

const LandingPage: React.FC = () => {
  return (
    <Box maxHeight='50vh' justifyContent='center' marginTop='12%' paddingInline={4}>
        <Typography variant="h4" component="h1" gutterBottom textAlign='center' fontFamily={'fantasy'}>
        Welcome to Avianaa Games App!
        </Typography>
        <Typography variant="body1" paragraph>
        Our app features a collection of cool games designed to enhance your critical thinking and problem-solving skills. Click on the game icon around to start playing and improving your skills!
        </Typography>
        <Grid container spacing={3} justifyContent="center">
        <Grid item>
            <span>
            Yay!! Play & Learn.
            </span>
        </Grid>
          </Grid>
    </Box>
  );
};

export default LandingPage;
