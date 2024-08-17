import React from 'react';
import { Grid, Typography, Card, CardContent, Button, IconButton, Container, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Resources: React.FC = () => {
  const navigate = useNavigate();

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
      <Typography variant="h3" align="center" gutterBottom>
        Resources and Tutorials
      </Typography>

      <Typography variant="h6" align="center" color="textSecondary" paragraph>
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

        {/* Resource Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/logo.png"
              alt="Material UI Official Documentation"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Material UI Documentation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Material UI's comprehensive guide to building beautiful UIs with React using the Material Design framework.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                href="https://mui.com/getting-started/installation/"
                target="_blank"
              >
                Visit
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Resource Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image=""
              alt="Frontend Masters"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Frontend Masters
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Frontend Masters offers premium courses on front-end development, including React, JavaScript, and more.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                href="https:/"
                target="_blank"
              >
                Visit
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* YouTube Videos Section */}
      <Typography variant="h4" gutterBottom>
        YouTube Tutorials
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* YouTube Video 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="iframe"
              height="250"
              src=""
              title="React JS Crash Course"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                React JS Crash Course
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A complete beginner's guide to learning React.js, featuring practical examples and real-world projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* YouTube Video 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="iframe"
              height="250"
              src=""
              title="Material UI Tutorial"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Material UI Tutorial
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Learn how to style React applications using Material UI, one of the most popular UI libraries for React.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* YouTube Video 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="iframe"
              height="250"
              src=""
              title="Complete React Developer in 2024"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Complete React Developer in 2023
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Master React in 2023 by following this comprehensive and advanced tutorial, covering all modern React features.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
