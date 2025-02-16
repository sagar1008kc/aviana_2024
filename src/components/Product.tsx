import React from 'react';
import { 
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import {
  Code,
  Cloud,
  School,
  Build,
  People,
  Public
} from '@mui/icons-material';

const services = [
  { 
    id: 1, 
    title: 'Website Development', 
    icon: <Code fontSize="large" />, 
    description: 'Custom web development solutions using modern technologies like React, Node.js, and Next.js' 
  },
  { 
    id: 2, 
    title: 'Cloud Hosting', 
    icon: <Cloud fontSize="large" />, 
    description: 'Reliable cloud hosting solutions with 99.9% uptime guarantee and 24/7 support' 
  },
  { 
    id: 3, 
    title: 'IT Training', 
    icon: <School fontSize="large" />, 
    description: 'Comprehensive training programs in web development, cloud technologies, and DevOps' 
  },
  { 
    id: 4, 
    title: 'Maintenance & Support', 
    icon: <Build fontSize="large" />, 
    description: 'Ongoing maintenance, updates, and technical support for your digital solutions' 
  },
  { 
    id: 5, 
    title: 'Consulting', 
    icon: <People fontSize="large" />, 
    description: 'Expert technology consulting to optimize your digital strategy and infrastructure' 
  },
  { 
    id: 6, 
    title: 'Domain Services', 
    icon: <Public fontSize="large" />, 
    description: 'Domain registration, management, and DNS configuration services' 
  },
];

const HoverCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[8],
  },
}));

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={10}>
        <Typography 
          variant={isMobile ? 'h4' : 'h2'} 
          gutterBottom 
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          Our Digital Solutions
        </Typography>
        <Typography 
          variant="h6" 
          color="textSecondary" 
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          From concept to deployment - full-cycle digital services for your business
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <HoverCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: theme.palette.primary.light,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  {React.cloneElement(service.icon, { sx: { color: theme.palette.primary.main } })}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Button 
                variant="text" 
                sx={{ mt: 'auto', mb: 2, mx: 'auto' }}
                color="primary"
              >
                Explore Service
              </Button>
            </HoverCard>
          </Grid>
        ))}
      </Grid>

      {/* CTA Section */}
      <Box 
        textAlign="center" 
        mt={10} 
        p={6} 
        borderRadius={4}
        sx={{ 
          bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'primary.light',
          boxShadow: theme.shadows[2]
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Start Your Digital Transformation
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Whether you need a new website, hosting solution, or training program - we've got you covered
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            px: 6, 
            py: 1.5, 
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem'
          }}
        >
          Get Started Today
        </Button>
      </Box>
    </Container>
  );
};

export default Services;