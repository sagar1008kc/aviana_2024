import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, selectGame } from '../store';
import { useNavigate } from 'react-router-dom';
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
  CssBaseline,
  AppBar,
  Toolbar
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
import CalculatorIcon from '../assets/calculator.png';
import ChessIcon from '../assets/chess.png';
import EmojiGame from '../games/EmojiGame';
import EmojiIcon from '../assets/emojj.png';
import Hangman from '../games/HangMan';
import HangmanIcon from '../assets/hangman.png';
import ChessGame from '../games/ChessGame';
import DigitalClock from './DigitalClock';
import RatingComponent from './RatingComponent';
import RockPaper from '../games/RockPaper';
import RockPaperIcon from '../assets/rockpapers.png';
import Product from './Product';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedGame = useSelector((state: RootState) => state.game.selectedGame);
  const leftGames = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const rightGames = ['Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'];
  const about = ['home', 'about', 'product', 'login'];
  const borderGradient = 'linear-gradient(45deg, blue, black, red)';
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

  const handleNavigation = (path: string) => {
    navigate(path);
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
        return <RockPaper />;
      case 'Game 10':
        return <Calculator />;
      case 'home':
        return <LandingPage />;
      case 'product':
        return <Product />;
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
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: themeMode.palette.background.default, boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <img
              src={AvianaIcon}
              alt="Avianaa"
              style={{ height: '60px', width: '60px', borderRadius: '50%' }}
              onClick={() => handleNavigation('/')}
            />
            <Grid container justifyContent="center" display='flex' flexDirection="row">
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => handleNavigation('/product')}
                  sx={{ cursor: 'pointer', fontSize: '12px', fontWeight:'bold', ml:'10px'}}
                >
                  Product
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => handleNavigation('/about')}
                  sx={{ cursor: 'pointer', fontSize: '12px',fontWeight:'bold'}}
                >
                  About
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => handleNavigation('/login')}
                  sx={{ cursor: 'pointer', fontSize: '12px', fontWeight:'bold'}}
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
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ height: '100%', backgroundColor: themeMode.palette.background.default, overflow: 'auto' }}>
        <Divider>
          <Chip label="GAMES" size="small" />
        </Divider>
        <DigitalClock />
        <Divider
          sx={{
            height: 1.5,
            border: 'none',
            backgroundImage: borderGradient,
          }}
        />
        <Grid container spacing={1} sx={{ flex: 1 }} mt="8px">
          {isSmallScreen && (
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                {leftGames.map((game, index) => (
                  <Card
                    key={game}
                    onClick={() => dispatch(selectGame(game))}
                    sx={{ cursor: 'pointer', flex: 1, mr: '10px' }}
                  >
                    <CardContent sx={{ p: '4px', height: '58px' }}>
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
                      ) : (
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
                  sx={{ margin: '5px', cursor: 'pointer', height: '100px', width: '110px' }}
                >
                  <CardContent sx={{ p: '5px', width: '100%' }}>
                    {index === 0 ? (
                      <CardMedia
                        component="img"
                        alt="Tic-Tac-Toe"
                        image={TicTacToeIcon}
                        title="Tic-Tac-Toe"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 2' ? (
                      <CardMedia
                        component="img"
                        alt="Memory Game"
                        image={MemoryCardIcon}
                        title="Memory Game"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 3' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
                        image={ChessIcon}
                        title="Memory Game"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 4' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
                        image={EmojiIcon}
                        title="emoji"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 5' ? (
                      <CardMedia
                        component="img"
                        alt="Chase"
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
            <Card sx={{ width: '100%', minHeight: '38vh' }}>
              <CardContent>{renderGame()}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ height: isSmallScreen ? 'auto' : '100%' }}>
            {!isSmallScreen &&
              rightGames.map((game, index) => (
                <Card
                  key={game}
                  onClick={() => dispatch(selectGame(game))}
                  sx={{ marginBottom: '10px', cursor: 'pointer', height: '90px', width: '110px' }}
                >
                  <CardContent sx={{ p: '4px', height: '80px', width: '105px' }}>
                    {index === 0 ? (
                      <CardMedia
                        component="img"
                        alt="Rock"
                        image={RockPaperIcon}
                        title="Rock"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 10' ? (
                      <CardMedia
                        component="img"
                        alt="Calculator"
                        image={CalculatorIcon}
                        title="Rock paper"
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
                    sx={{ cursor: 'pointer', flex: 1, mr: '10px' }}
                  >
                    <CardContent sx={{ p: '4px', height: '58px' }}>
                      {index === 0 ? (
                        <CardMedia
                          component="img"
                          alt="Rock"
                          width="50"
                          height="50"
                          image={RockPaperIcon}
                          title="Rock"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 10' ? (
                        <CardMedia
                          component="img"
                          alt="Calculator"
                          image={CalculatorIcon}
                          title="Rock paper"
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
        <RatingComponent />
        <Divider />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
