import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, selectGame } from '../store';
import { Container, Box, Card, Button, Grid, useMediaQuery, useTheme, Typography, CardContent, CardMedia, Switch, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TicTacToe from '../games/TicTacToe';
import MemoryGame from '../games/MemoryGame';
import TicTacToeIcon from '../assets/ticTacToe.png';
import MemoryCardIcon from '../assets/memoryCard.png';
import AvianaIcon from '../assets/avianaa.png'; 
import LoginPage from './Login';
import About from './About';
import LandingPage from './LandingPage';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state: RootState) => state.game.selectedGame);
  const leftGames = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const rightGames = ['Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'];
  const about = ['home', 'about', 'login']

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [darkMode, setDarkMode] = useState(false);

  const themeMode = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? 'black' : '#f2f3f4',
      },
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'Game 1':
        return <TicTacToe />;
      case 'Game 6':
        return <MemoryGame />;
        case 'home':
          return <LandingPage />;
        case 'about':
          return <About />;
          case 'login':
            return <LoginPage />;
      default:
        return <Typography variant="h4" align="center">{selectedGame}</Typography>;
    }
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Container maxWidth="lg" sx={{ height: '100vh', backgroundColor: themeMode.palette.background.default }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <img src={AvianaIcon} alt="Avianaa" style={{ height: '60px', width: '60px', borderRadius: '50%' }}   onClick={() => dispatch(selectGame('home'))}/>
          <Grid container justifyContent="center" spacing={2} sx={{ }}>
          <Grid item>
            <Button
              variant="text"
              onClick={() => dispatch(selectGame('about'))}
              size={isSmallScreen ? 'small' : 'medium'} 
            >
              About
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              onClick={() => dispatch(selectGame('login'))}
              size={isSmallScreen ? 'small' : 'medium'}
            >
              Login
            </Button>
          </Grid>
          
        </Grid>
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

        <Grid container spacing={1} sx={{ flex: 1 }}>
          {isSmallScreen && (
            <Grid item xs={12}>
              <Box display="flex" justifyContent='center'>
                {leftGames.map((game, index) => (
                  <Card
                    key={game}
                    onClick={() => dispatch(selectGame(game))}
                    sx={{ cursor: 'pointer', flex: 1, paddingBottom: '0px'}}
                  >
                    <CardContent sx={{p:'4px', height: '35px' }}>
                      {index === 0 ? (
                        <CardMedia
                          component="img"
                          width='100%'
                          alt="Tic-Tac-Toe"
                          image={TicTacToeIcon}
                          title="Tic-Tac-Toe"
                        />
                      ) : (
                        <Typography variant="body2" align="center" pt='10px' >
                          {game}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={2} sx={{ height: isSmallScreen ? 'auto' : '100%' }}>
            {!isSmallScreen && leftGames.map((game, index) => (
              <Card
                key={game}
                onClick={() => dispatch(selectGame(game))}
                sx={{ marginBottom: '10px', cursor: 'pointer', boxShadow: 'none' }}
              >
                <CardContent>
                  {index === 0 ? (
                    <CardMedia
                      component="img"
                      alt="Tic-Tac-Toe"
                      height="100"
                      image={TicTacToeIcon}
                      title="Tic-Tac-Toe"
                    />
                  ) : (
                    <Typography variant="body1" align="center">
                      {game}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} sm={8} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                {renderGame()}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ height: isSmallScreen ? 'auto' : '100%' }}>
            {!isSmallScreen && rightGames.map((game, index) => (
              <Card
                key={game}
                onClick={() => dispatch(selectGame(game))}
                sx={{ marginBottom: '10px', cursor: 'pointer', boxShadow: 'none' }}
              >
                <CardContent>
                  {index === 0 ? (
                    <CardMedia
                      component="img"
                      alt="Memory Game"
                      height="100"
                      image={MemoryCardIcon}
                      title="Memory Game"
                    />
                  ) : (
                    <Typography variant="body1" align="center">
                      {game}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Grid>
          {isSmallScreen && (
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                {rightGames.map((game, index) => (
                  <Card
                    key={game}
                    onClick={() => dispatch(selectGame(game))}
                    sx={{ margin: '5px', cursor: 'pointer', flex: 1, boxShadow: 'none', padding: '0' }}
                  >
                    <CardContent sx={{ p: '0', m: '0'}}>
                      {index === 0 ? (
                        <CardMedia
                          component="img"
                          alt="Memory Game"
                          height="50"
                          width="50"
                          image={MemoryCardIcon}
                          title="Memory Game"
                        />
                      ) : (
                        <Typography variant="body2" align="center">
                          {game}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;

export {};
