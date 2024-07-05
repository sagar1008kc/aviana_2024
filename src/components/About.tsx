import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
          <Typography variant='h4' component='h3' gutterBottom textAlign='center' fontFamily={'fantasy'}>
            About Our App
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our application! Our app features a collection of cool games designed to enhance your critical thinking and problem-solving skills. Each game is crafted to challenge your mind and help you learn React by developing engaging and interactive gameplay experiences.
          </Typography>
          <Typography variant="body1" paragraph>
            Our primary goal is to create a fun and educational platform where users can improve their cognitive abilities while learning modern web development techniques. Whether you're a seasoned developer or just starting, our games offer a unique way to practice and enhance your React skills.
          </Typography>
          <Typography variant="body1" paragraph>
            Dive into our games, enjoy the challenges, and watch your problem-solving abilities grow. We are constantly updating our app with new games and features, so stay tuned for more exciting content!
          </Typography>

    </Container>
  );
};

export default About;
