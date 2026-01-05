
import React from 'react';
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
  Divider,
  Chip,
  Paper,
} from '@mui/material';

import TicTacToe from '../games/TicTacToe';
import MemoryGame from '../games/MemoryGame';
import TicTacToeIcon from '../assets/ticTacToe.png';
import MemoryCardIcon from '../assets/memoryCard.png';
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
import AiPuzzleIcon from '../assets/aipuzzle.png';
import SpinnerGame from '../games/SpinnerGame';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state: RootState) => state.game.selectedGame);
  const leftGames = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const rightGames = ['Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'];
  const borderGradient = 'linear-gradient(45deg, blue, black, red)';
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      case 'login':
      case 'calculator':
        return <Calculator />;
      default:
        return (
          <Typography variant="h6" align="center" paddingTop="100px">
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
    <Container
      maxWidth="lg"
      sx={{
        height: '100%',
        backgroundColor: theme.palette.background.default,
        overflow: 'auto',
        pb: 4,
      }}
    >
      {/* Simple header for games page (not nav) */}
      <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={1}>
        <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
          Aviana Mini Games
        </Typography>
      </Box>

      <Divider>
        <Chip label="GAMES" size="small" />
      </Divider>

      <DigitalClock />

<Typography textAlign="center" bgcolor="darkgray" p="4px">Ready to play? Click an icon and dive in!</Typography>
      <Grid container spacing={1} sx={{ flex: 1 }} mt="8px">
        {/* MOBILE LEFT GAMES */}
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
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 2' ? (
                      <CardMedia
                        component="img"
                        width="50"
                        height="50"
                        alt="MemoryGame"
                        image={MemoryCardIcon}
                        title="Memory Game"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 3' ? (
                      <CardMedia
                        component="img"
                        width="50"
                        height="50"
                        alt="trivia"
                        image={TriviaIcon}
                        title="Trivia Game"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 4' ? (
                      <CardMedia
                        component="img"
                        width="50"
                        height="50"
                        alt="emoji"
                        image={EmojiIcon}
                        title="Emoji game"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 5' ? (
                      <CardMedia
                        component="img"
                        width="50"
                        height="50"
                        alt="hangman"
                        image={HangmanIcon}
                        title="Hangman"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
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

        {/* DESKTOP LEFT GAMES */}
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
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 2' ? (
                    <CardMedia
                      component="img"
                      alt="Memory Game"
                      image={MemoryCardIcon}
                      title="Memory Game"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 3' ? (
                    <CardMedia
                      component="img"
                      alt="trivia"
                      image={TriviaIcon}
                      title="Trivia Game"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 4' ? (
                    <CardMedia
                      component="img"
                      alt="Emoji"
                      image={EmojiIcon}
                      title="Emoji"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 5' ? (
                    <CardMedia
                      component="img"
                      alt="Hangman"
                      image={HangmanIcon}
                      title="Hangman"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
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

        {/* CENTER GAME AREA */}
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box sx={{ width: '100%', minHeight: '38vh' }}>
            <Paper elevation={3} sx={{ p: 2, minHeight: '36vh' }}>
              <CardContent>{renderGame()}</CardContent>
            </Paper>
          </Box>
        </Grid>

        {/* DESKTOP RIGHT GAMES */}
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
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 7' ? (
                    <CardMedia
                      component="img"
                      alt="wordhint"
                      image={WordHintIcon}
                      title="word count"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 8' ? (
                    <CardMedia
                      component="img"
                      alt="spinner"
                      image={SpinnerIcon}
                      title="spinner"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 9' ? (
                    <CardMedia
                      component="img"
                      alt="rockpaper"
                      image={RockPaperIcon}
                      title="Rock paper"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
                    />
                  ) : game === 'Game 10' ? (
                    <CardMedia
                      component="img"
                      alt="survey"
                      image={SurveyIcon}
                      title="Survey"
                      sx={
                        game === selectedGame
                          ? { ...gameCardStyles, ...selectedGameCardStyles }
                          : gameCardStyles
                      }
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

        {/* MOBILE RIGHT GAMES */}
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
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 7' ? (
                      <CardMedia
                        component="img"
                        alt="word"
                        image={WordHintIcon}
                        title="word"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 8' ? (
                      <CardMedia
                        component="img"
                        alt="spinner"
                        image={SpinnerIcon}
                        title="spinner"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 9' ? (
                      <CardMedia
                        component="img"
                        alt="rock"
                        image={RockPaperIcon}
                        title="Rock paper"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
                      />
                    ) : game === 'Game 10' ? (
                      <CardMedia
                        component="img"
                        alt="survey"
                        image={SurveyIcon}
                        title="Survey"
                        sx={
                          game === selectedGame
                            ? { ...gameCardStyles, ...selectedGameCardStyles }
                            : gameCardStyles
                        }
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

      <Divider sx={{ mt: 3 }} />
      <Box sx={{ m: 2, textAlign: 'center' }}>
        <Typography>Extra Project:</Typography>
        <Button
          variant="text"
          onClick={() => dispatch(selectGame('calculator'))}
          sx={{ cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
        >
          Calculator
        </Button>
        <Button
          variant="text"
          sx={{ cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
        >
          More coming soon...
        </Button>
      </Box>

      <RatingComponent />
      <Divider />
    </Container>
  );
};

export default Game;
