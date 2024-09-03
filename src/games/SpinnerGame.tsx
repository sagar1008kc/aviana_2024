import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Grid, Box, Paper } from '@mui/material';

const emojis = ["🍒", "🍋", "🍉", "💎", "⭐", "🍀", "🍇", "🍎", "🥝", "🍍"];
const SPIN_INTERVAL = 100; // Interval in milliseconds between each emoji change
const MAX_HISTORY = 10; // Maximum number of spins to keep in history

const EmojiSpinner: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [row, setRow] = useState<number[]>([0, 1, 2]);
  const [highlightRow, setHighlightRow] = useState(false);
  const [points, setPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [history, setHistory] = useState<{ result: string[]; points: number }[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (spinning) {
      intervalId = setInterval(() => {
        setRow(row.map(() => getRandomEmojiIndex()));
      }, SPIN_INTERVAL);
    } 

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [spinning]);

  const getRandomEmojiIndex = () => {
    return Math.floor(Math.random() * emojis.length);
  };

  const startSpinning = () => {
    setSpinning(true);
    setHighlightRow(false);
    setPoints(0); // Reset points on each spin
  };

  const stopSpinning = () => {
    setSpinning(false);
    setHighlightRow(true);
    calculatePoints();
  };

  const calculatePoints = () => {
    const leftEmoji = emojis[row[0]];
    const middleEmoji = emojis[row[1]];
    const rightEmoji = emojis[row[2]];

    let spinPoints = 0;

    // Define point logic based on combinations
    if (leftEmoji === middleEmoji && middleEmoji === rightEmoji) {
      if (middleEmoji === "💎") {
        spinPoints = 1000; // 3 diamonds give the maximum points
      } else {
        spinPoints = 200; // 3 matching emojis give high points
      }
    } else if (leftEmoji === middleEmoji || middleEmoji === rightEmoji || leftEmoji === rightEmoji) {
      if (middleEmoji === "💎" || leftEmoji === "💎" || rightEmoji === "💎") {
        spinPoints = 100; // 2 diamonds give higher points
      } else {
        spinPoints = 50; // 2 matching emojis give some points
      }
    } else {
      spinPoints = 0; // No matches, no points
    }

    setPoints(spinPoints);
    setTotalPoints(prevTotal => prevTotal + spinPoints);

    const newHistory = [
      ...history,
      { result: row.map(index => emojis[index]), points: spinPoints }
    ];

    if (newHistory.length > MAX_HISTORY) {
      setHistory(newHistory.slice(-MAX_HISTORY));
    } else {
      setHistory(newHistory);
    }
  };

  const renderRow = (emojiIndex: number, rowIndex: number) => (
    <Box
      key={rowIndex}
      sx={{
        fontSize: 64,
        backgroundColor: highlightRow ? '#f0f0f0' : 'transparent',
        paddingInline: '12px',
        margin: '5px',
        border: '4px solid grey', // Bold grey border for rows
        borderRadius: '10px',
        transition: 'background-color 0.3s ease',
      }}
    >
      {emojis[emojiIndex]}
    </Box>
  );

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#2c2c54', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
        Emoji Spinner Game
      </Typography>
      <Typography variant="h6" color="textSecondary" style={{ color: '#666', marginBottom: '20px' }}>
        Try to land on a diamond to score the most points!
      </Typography>
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {row.map(renderRow)}
        </Grid>
      </Box>
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          onClick={startSpinning}
          disabled={spinning}
          sx={{ borderRadius: '50%', width: 60, height: 60, backgroundColor: '#e74c3c', color: '#fff', fontSize: '16px', fontWeight: 'bold' }}
        >
          Spin
        </Button>
        <Button
          variant="contained"
          onClick={stopSpinning}
          disabled={!spinning}
          sx={{ borderRadius: '50%', width: 60, height: 60, backgroundColor: '#2ecc71', color: '#fff', fontSize: '16px', fontWeight: 'bold' }}
        >
          Stop
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant="h5" style={{ color: '#2c2c54', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Points: {points}
        </Typography>
        <Typography variant="h6" style={{ color: '#2c2c54', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Total Points: {totalPoints}
        </Typography>
      </Box>
      <Box mt={4} sx={{ maxHeight: 200, overflowY: 'auto' }}>
        <Typography variant="h6" style={{ color: '#2c2c54', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          History (Last 10 Spins):
        </Typography>
        {history.map((entry, index) => (
          <Paper key={index} sx={{ backgroundColor: '#f0f0f0', color: '#2c2c54', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
            <Typography variant="body1">
              Spin {index + 1}: {entry.result.join(' ')} - {entry.points} points
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default EmojiSpinner;
