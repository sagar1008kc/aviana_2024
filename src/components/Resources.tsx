import React from 'react';
import { Grid, Typography, Card, CardContent, Button, IconButton, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Resources: React.FC = () => {
  const navigate = useNavigate();


  return (
    <Container maxWidth="lg" style={{ marginTop: '32px' }}>
      {/* Back Button */}
      <IconButton color="inherit" onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom>
        Resources and Tutorials
      </Typography>

      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Explore our collection of resources and tutorials to enhance your learning experience.
      </Typography>

      {/* Resources and Tutorials Grid */}
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '32px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Resource 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A brief description of the first resource or tutorial. You can include details about its content and how it benefits the user.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                View Resource --coming soon...
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Resource 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A brief description of the second resource or tutorial. Provide valuable information to draw attention.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                View Resource
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Resource 3
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A brief description of the third resource or tutorial. Add more relevant details about what it covers.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                View Resource
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
