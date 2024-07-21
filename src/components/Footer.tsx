// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Typography, Link, Fab } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 1,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="subtitle2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {'.'}
          <Link color="inherit" href="https://www.avianaa.com/">
            Avianaa.com
          </Link>{' '}
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
