// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="subtitle2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {'.'}
          <Link color="inherit" href="https://avianaa.com/">
            Avianaa.com
          </Link>{' '}
          All right reserved.
         
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
