import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, selectGame } from '../store';
import {
  Container,
  Box,
  Card,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
  CardContent,
  CardMedia,
  Switch,
  FormControlLabel,
  Divider,
  Chip,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TicTacToe from '../games/TicTacToe';
import MemoryGame from '../games/MemoryGame';
import TicTacToeIcon from '../assets/ticTacToe.png';
import MemoryCardIcon from '../assets/memoryCard.png';
import AvianaIcon from '../assets/avianaa.png';
import LoginPage from './Login';
import About from './About';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Calculator from '../games/Calculator';
import CalculatorIcon from '../assets/calculator.png'; // Correctly import the calculator image
import ChessIcon from '../assets/chess.png';
import EmojiGame from '../games/EmojiGame';
import EmojiIcon from '../assets/emojj.png';
import Hangman from '../games/HangMan';
import HangmanIcon from '../assets/hangman.png';
import ChessGame from '../games/ChessGame';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state: RootState) => state.game.selectedGame);
  const leftGames = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const rightGames = ['Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'];
  const about = ['home', 'about', 'login'];

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
        case 'Game 2':
          return <MemoryGame />;
        case 'Game 3':
        return <ChessGame />;
        case 'Game 4':
          return <EmojiGame />;
          case 'Game 5':
          return <Hangman />;
            case 'Game 6':
          return <Calculator />;
      case 'home':
        return <LandingPage />;
      case 'about':
        return <About />;
      case 'login':
        return <LoginPage />;
      default:
        return (
          <Typography variant="h2" align="center">
            {selectedGame}
          </Typography>
        );
    }
  };

  const gameCardStyles = {
    cursor: 'pointer',
    flex: 1,
    paddingBottom: '0px',
    transition: 'border 0.3s ease-in-out',
  };

  const selectedGameCardStyles = {
    border: '2px solid orange',
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Container maxWidth="lg" sx={{ height: '100%', backgroundColor: themeMode.palette.background.default }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
          }}
        >
          <img
            src={AvianaIcon}
            alt="Avianaa"
            style={{ height: '60px', width: '60px', borderRadius: '50%' }}
            onClick={() => dispatch(selectGame('home'))}
          />
          <Grid container justifyContent="center" spacing={2}>
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
        <Divider>
          <Chip label="GAMES" size="small" />
        </Divider>
        <Grid container spacing={1} sx={{ flex: 1 }} mt="8px">
          {isSmallScreen && (
            <Grid item xs={12} >
              <Box display="flex" justifyContent="center" >
                {leftGames.map((game, index) => (
                  <Card
                    key={game}
                    onClick={() => dispatch(selectGame(game))}
                    sx={{ cursor: 'pointer', flex: 1, mr:'10px'}}
                  >
                    <CardContent sx={{ p: '4px', height: '30px'}}>
                      {index === 0 ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="Tic-Tac-Toe"
                          image={TicTacToeIcon}
                          title="Tic-Tac-Toe"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 2' ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="MemoryGame"
                          image={MemoryCardIcon}
                          title="Memory Game "
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 3' ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="chess"
                          image={ChessIcon}
                          title="Chess Game"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 4' ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="chess"
                          image={EmojiIcon}
                          title="Emoji game"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 5' ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="hangman"
                          image={HangmanIcon}
                          title="Emoji game"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) :(
                        <Typography variant="body2" align="center" pt="10px">
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
            {!isSmallScreen &&
              leftGames.map((game, index) => (
                <Card
                  key={game}
                  onClick={() => dispatch(selectGame(game))}
                  sx={{ margin: '10px', cursor: 'pointer', boxShadow: 'none' }}
                >
                  <CardContent>
                    {index === 0 ? (
                      <CardMedia
                        component="img"
                        alt="Tic-Tac-Toe"
                        height="80"
                        image={TicTacToeIcon}
                        title="Tic-Tac-Toe"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 2' ? (
                      <CardMedia
                        component="img"
                        alt="Memory Game"
                        height="100"
                        image={MemoryCardIcon}
                        title="Memory Game"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 3' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
                        height="100"
                        image={ChessIcon}
                        title="Memory Game"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 4' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
                        height="100"
                        image={EmojiIcon}
                        title="emoji"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) :game === 'Game 5' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
                        height="100"
                        image={HangmanIcon}
                        title="emoji"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
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
          <Grid
            item
            xs={12}
            sm={8}
            sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Card sx={{ width: '100%' }}>
              <CardContent>{renderGame()}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ height: isSmallScreen ? 'auto' : '100%' }}>
            {!isSmallScreen &&
              rightGames.map((game, index) => (
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
                        image={CalculatorIcon}
                        title="Calculator"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
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
                    sx={{ cursor: 'pointer', flex: 1, mr:'10px'}}
                  >
                    <CardContent sx={{ p: '4px', height: '30px' }}>
                      {index === 0 ? (
                        <CardMedia
                          component="img"
                          alt="Calculator"
                          width="50"
                          height="50"
                          image={CalculatorIcon}
                          title="Calculator"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
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
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
