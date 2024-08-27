import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Snackbar, Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '');
    // Format as (XXX)-(XXX)-(XXXX)
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
    }
    return value;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation for email and phone
    if (!emailRegex.test(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    if (phone.length < 12) {
      setSnackbarMessage('Please enter a valid phone number.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    if (firstName && lastName && email && phone) {
      // Success case
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      // Redirect to resources page with firstName and lastName as state
      setTimeout(() => {
        navigate('/resources', { state: { firstName, lastName } });
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
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
            placeholder="123-456-7890"
            inputProps={{ maxLength: 12 }}
            required
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