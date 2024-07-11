import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const emojiData = [
  { emoji: '😀', value: 0 },
  { emoji: '🎉', value: 1 },
  { emoji: '❤️', value: 2 },
  { emoji: '👍', value: 3 },
  { emoji: '🚀', value: 4 },
  { emoji: '🌟', value: 5 },
  { emoji: '🐱', value: 6 },
  { emoji: '🎵', value: 7 },
  { emoji: '🍀', value: 8 },
  { emoji: '🔥', value: 9 },
  { emoji: '💎', value: 10 },
];

const EmojiGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [displayedEmojis, setDisplayedEmojis] = useState(emojiData.slice(0, 6));
  const [gameActive, setGameActive] = useState(false);
  const [history, setHistory] = useState<{ score: number; time: string }[]>([]);

  const shuffleAndSelectEmojis = () => {
    const shuffledEmojis = [...emojiData].sort(() => Math.random() - 0.5);
    setDisplayedEmojis(shuffledEmojis.slice(0, 6));
  };

  const handleEmojiClick = (value: number) => {
    if (gameActive) {
      setScore(score + value);
      shuffleAndSelectEmojis();
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    shuffleAndSelectEmojis();
  };

  const endGame = () => {
    setGameActive(false);
    const currentTime = new Date().toLocaleTimeString();
    setHistory((prevHistory) => {
      const newHistory = [{ score, time: currentTime }, ...prevHistory];
      return newHistory.slice(0, 3);
    });
  };

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [gameActive, timeLeft]);

  useEffect(() => {
    if (!gameActive && score > highScore) {
      setHighScore(score);
    }
  }, [gameActive]);

  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography variant="h4" fontFamily={'fantasy'} >
        Emoji Game
      </Typography>
      <Typography variant="subtitle2" >
        Score: {score}
      </Typography>
      <Typography variant="subtitle2" >
        High Score: {highScore}
      </Typography>
      <Typography variant="subtitle2">
        Time Left: {timeLeft}s
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {displayedEmojis.map((emojiObj, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              onClick={() => handleEmojiClick(emojiObj.value)}
              sx={{ fontSize: '2rem', minWidth: '64px', minHeight: '64px' }}
            >
              {emojiObj.emoji}
            </Button>
          </Grid>
        ))}
      </Grid>
      {!gameActive && (
        <Button variant="contained" color="primary" onClick={startGame} sx={{ mt: 3 }}>
          Start Game
        </Button>
      )}
      <Box sx={{ mt: 5 }}>
        <Typography variant="subtitle2" >
          Game History (Last 3 Games)
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Score</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.score}</TableCell>
                <TableCell>{entry.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default EmojiGame;
