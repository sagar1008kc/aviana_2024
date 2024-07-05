// src/components/Login.tsx
import React from 'react';
import { Button, Container, Box, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { signInWithPopup } from 'firebase/auth';

const LoginPage: React.FC = () => {
  const handleGoogleLogin = async () => {
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
