import React from 'react';
import { Container, Typography, Box, Paper, Stack, Avatar, Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, CircularProgress } from '@mui/material';
import SagarIcon from '../assets/sagar.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const About: React.FC = () => {
  const borderGradient = 'linear-gradient(45deg, blue, black, red)';
  return (
    <Container maxWidth="md">
      <Box display='flex' pb='2'>
      <Stack direction="row" spacing={1}>
        <Avatar
        alt="Sagar"
        src={SagarIcon}
        sx={{
          width: 90,
          height: 90,
          border: '5px solid transparent',
          borderRadius: '50%',
          backgroundImage: borderGradient,
          backgroundClip: 'border-box',
          backgroundOrigin: 'border-box',
        }}
      />
      </Stack>
      <Box p="5px" width="100%">
        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <Typography variant='body2' fontFamily={'monospace'}> About ME</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Sagar Khatri</p>
          <span>Software Engineer | AI & Cloud Enthusiast</span>
        </AccordionDetails>
        <Box paddingInline={2} paddingBottom={2}>
        <a href="https://skcreation.org/">
        <Button> SKcreation.ORG</Button>
           
          </a>
          <a color="#F8F8F8" href="https://www.youtube.com/@Digitalaitrends">
          <Button> Youtube Channel</Button>
          </a>
          </Box>
        </Accordion>
     </Box>
      </Box>

          <Typography variant='h4' component='h3' gutterBottom textAlign='center' fontFamily={'fantasy'}>
            About Our App
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our application! Our react/redux app features a collection of cool games designed to enhance your critical thinking and problem-solving skills. Each game is crafted to challenge your mind and help you learn React by developing engaging and interactive gameplay experiences.
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
