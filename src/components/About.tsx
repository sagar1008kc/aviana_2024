import React from 'react';
import { Container, Typography, Box, Paper, Stack, Avatar, Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import SagarIcon from '../assets/sagar.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box display='flex' pb='2'>
      <Stack direction="row" spacing={1}>
        <Avatar
        alt="Sagar"
        src={SagarIcon}
        sx={{ width: 100, height: 100 }}
      />
      </Stack>
      <div>
        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          About ME
        </AccordionSummary>
        <AccordionDetails>

          <p>Sagar Khatri</p>
          <span>React Developer</span>
          <span></span>
        </AccordionDetails>
        
        <a color="inherit" href="https://skcreation.org/">
            SKcreation
          </a>{' '}
          <a color="inherit" href="https://www.youtube.com/@Digitalaitrends">
            Youtube
          </a>{' '}
        
        </Accordion>
     </div>
      </Box>

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
