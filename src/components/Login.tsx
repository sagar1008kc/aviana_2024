import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Snackbar, Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple form validation
    if (name && email && phone) {
      // Success case
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      // After a delay, redirect the user to /resource
      setTimeout(() => {
        navigate('/resources');
      }, 1500);
    } else {
      // Failure case
      setSnackbarMessage('Please fill in all fields.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom fontFamily={'fantasy'}>
          Login
        </Typography>
        <Typography variant='subtitle1'>Please login for resources and tutorials</Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        <Box>
          <Typography >
OR
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            style={{ marginTop: '16px' }}
          >
            Google Login
          </Button>
          </Box>
          
        </form>

        {/* Snackbar for success/failure messages */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Grid>
    </Container>
  );
};

export default Login;
