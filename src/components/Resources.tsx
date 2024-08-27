import React from 'react';
import { Grid, Typography, Card, CardContent, Button, IconButton, Container, CardMedia, Box, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import CodeGame from '../games/CodeGame';

const Resources: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Access firstName and lastName from the state passed via navigate
  const { firstName, lastName } = location.state || { firstName: 'Guest', lastName: '' };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '32px' }}>
      {/* Back Button */}
      <IconButton
        onClick={handleBackClick}
        style={{ position: 'absolute', top: '16px', left: '16px' }}
        color="primary"
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Header */}
      <Box sx={{backgroundColor: 'lightgrey', p: 4, borderRadius:'15px'}}>
      <Typography variant="h5" align="center" gutterBottom>
        Hello, {firstName} {lastName} !
      </Typography>
      <Typography variant='subtitle1'>Welcome to the Resources and Tutorials page! Here, you’ll find a curated selection of articles, guides, and tools designed to help you deepen your knowledge and enhance your skills. Dive in and explore the best resources tailored to support your learning journey</Typography>
      
      </Box>
     
      <Typography variant="h5" align="center" marginBlock="20px">
        Resources and Tutorials
      </Typography>
      <Divider ></Divider>
      <CodeGame />
      <Typography> In progress..</Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Explore our collection of resources and tutorials to enhance your learning experience.
      </Typography>

      {/* Resources Section */}
      <Typography variant="h4" gutterBottom>
        Best Resources for Learning Front-end Technologies
      </Typography>
      <Grid container spacing={4} justifyContent="center" style={{ marginBottom: '32px' }}>
        {/* Resource Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://reactjs.org/logo-og.png"
              alt="React Official Documentation"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                React Official Documentation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The official React documentation provides a comprehensive overview of all things React. A must-read for any developer.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
              >
                Visit
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Other resource cards */}
        {/* Add the rest of the resource cards here */}
      </Grid>
    </Container>
  );
};

export default Resources;