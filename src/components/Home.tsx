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
  Toolbar,
  Paper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TicTacToe from '../games/TicTacToe';
import MemoryGame from '../games/MemoryGame';
import TicTacToeIcon from '../assets/ticTacToe.png';
import MemoryCardIcon from '../assets/memoryCard.png';
import AvianaIcon from '../assets/avianaa.png';
import LoginPage from './Login';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Calculator from '../games/Calculator';
import SpinnerIcon from '../assets/spinner.png';
import EmojiGame from '../games/EmojiGame';
import EmojiIcon from '../assets/emojj.png';
import Hangman from '../games/HangMan';
import HangmanIcon from '../assets/hangman.png';
import DigitalClock from './DigitalClock';
import RatingComponent from './RatingComponent';
import RockPaper from '../games/RockPaper';
import RockPaperIcon from '../assets/rockpapers.png';
import WordHintIcon from '../assets/wordHint.png';
import ChattingGame from '../games/ChattingGame';
import Trivia from '../games/Trivia';
import TriviaIcon from '../assets/trivia.png';
import Survey from '../games/Survey';
import SurveyIcon from '../assets/survey.png';
import AIPuzzleMaster from '../games/AiPuzzleMaster';
import AiPuzzleIcon from '../assets/aipuzzle.png'
import SpinnerGame from '../games/SpinnerGame';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedGame = useSelector((state: RootState) => state.game.selectedGame);
  const leftGames = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const rightGames = ['Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'];
  //const about = ['home', 'about', 'product', 'login', 'calculator'];
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
        return <Trivia />;
      case 'Game 4':
        return <EmojiGame />;
      case 'Game 5':
        return <Hangman />;
        case 'Game 6':
          return <AIPuzzleMaster />;
      case 'Game 7':
        return <ChattingGame />;
      case 'Game 8':
          return <SpinnerGame />;
        case 'Game 9':
            return <RockPaper />;
      case 'Game 10':
        return <Survey />;
      case 'home':
        return <LandingPage />;
      case 'login':
        return <LoginPage />;
        case 'calculator':
        return <Calculator />;
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
              onClick={() => dispatch(selectGame('home'))}
            />
            <Grid container justifyContent="center" display='flex' flexDirection="row">
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => handleNavigation('/match')}
                  sx={{ cursor: 'pointer', fontSize: '12px', fontWeight:'bold', ml:'10px'}}
                >
                  Special
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => handleNavigation('/portfolio')}
                  sx={{ cursor: 'pointer', fontSize: '12px', fontWeight:'bold', ml:'10px'}}
                >
                  Portfolio
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => dispatch(selectGame('login'))}
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
                          alt="trivia"
                          image={TriviaIcon}
                          title="Trivia Game"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 4' ? (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          alt="spinner"
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
                        alt="trivia"
                        image={TriviaIcon}
                        title="Trivia Game"
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
            <Box sx={{ width: '100%', minHeight: '38vh' }}>
              <CardContent>{renderGame()}</CardContent>
            </Box>
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
                        alt="ai"
                        image={AiPuzzleIcon}
                        title="ai"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 7' ? (
                      <CardMedia
                        component="img"
                        alt="wordhint"
                        image={WordHintIcon}
                        title="word count"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 8' ? (
                      <CardMedia
                        component="img"
                        alt="spinner"
                        image={SpinnerIcon}
                        title="spinner"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 9' ? (
                      <CardMedia
                        component="img"
                        alt="rockpaper"
                        image={RockPaperIcon}
                        title="Rock paper"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) : game === 'Game 10' ? (
                      <CardMedia
                        component="img"
                        alt="survey"
                        image={SurveyIcon}
                        title="Survey"
                        sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                      />
                    ) :(
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
                          alt="ai"
                          width="50"
                          height="50"
                          image={AiPuzzleIcon}
                          title="ai"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 7' ? (
                        <CardMedia
                          component="img"
                          alt="word"
                          image={WordHintIcon}
                          title="Rock paper"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 8' ? (
                        <CardMedia
                          component="img"
                          alt="Chese"
                          image={SpinnerIcon}
                          title="spinner"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 9' ? (
                        <CardMedia
                          component="img"
                          alt="rock"
                          image={RockPaperIcon}
                          title="Rock paper"
                          sx={game === selectedGame ? { ...gameCardStyles, ...selectedGameCardStyles } : gameCardStyles}
                        />
                      ) : game === 'Game 10' ? (
                        <CardMedia
                          component="img"
                          alt="survey"
                          image={SurveyIcon}
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
        <Divider />
             <Box sx={{m: 2, alignContent: 'center'}}>
             <Typography textAlign='center'>Extra Project:</Typography>
                <Button
                  variant="text"
                  onClick={() => dispatch(selectGame('calculator'))}
                  sx={{ cursor: 'pointer', fontSize: '12px',fontWeight:'bold'}}
                >
                  Calculator
                </Button>
                <Button
                  variant="text"
                  onClick={() => dispatch(selectGame('calculator'))}
                  sx={{ cursor: 'pointer', fontSize: '12px',fontWeight:'bold'}}
                >
                  More coming soon...
                </Button>
              </Box>
        <RatingComponent />
        <Divider />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Home;