// src/layout/MainLayout.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  FormControlLabel,
  Switch,
  CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import AvianaIcon from '../assets/avianaa.png';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const themeMode = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#000000' : '#f2f3f4',
      },
    },
  });

  const handleThemeToggle = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />

      {/* Shared navigation bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: themeMode.palette.background.default,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {/* Logo + title (click → home) */}
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <img
                src={AvianaIcon}
                alt="Avianaa"
                style={{ height: '70px', width: '70px', borderRadius: '10%' }}
              />
            </Box>

            {/* Center nav buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: 1,
                gap: 2,
              }}
            >
              <Button
                variant="text"
                onClick={() => navigate('/')}
                sx={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                Home
              </Button>
              <Button
                variant="text"
                onClick={() => navigate('/home')}
                sx={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                Games
              </Button>
            </Box>

            {/* Theme switch on the right */}
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleThemeToggle}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'white',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#f8f8f8',
                    },
                    '& .MuiSwitch-switchBase': {
                      color: 'black',
                    },
                    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                      backgroundColor: '#373840',
                    },
                  }}
                />
              }
              label={undefined}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* All child pages render here */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: themeMode.palette.background.default,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
