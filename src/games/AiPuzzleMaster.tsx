import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, CircularProgress, Paper, Divider } from '@mui/material';

type Puzzle = {
  question: string;
  answer: number;
  difficulty: number;
};

const generatePuzzle = (difficulty: number): Puzzle => {
  const num1 = Math.floor(Math.random() * difficulty * 10);
  const num2 = Math.floor(Math.random() * difficulty * 10);
  const answer = num1 + num2;

  return {
    question: `${num1} + ${num2} = ?`,
    answer,
    difficulty,
  };
};

const AIPuzzleMaster: React.FC = () => {
  const [puzzle, setPuzzle] = useState<Puzzle>(generatePuzzle(1));
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [hintsUsed, setHintsUsed] = useState<number>(0);

  useEffect(() => {
    // Adjust difficulty based on performance (score)
    const newDifficulty = Math.max(1, Math.floor(score / 3) + 1);
    setPuzzle(generatePuzzle(newDifficulty));
  }, [score]);

  const handleSubmit = () => {
    setIsLoading(true);
    const playerAnswer = parseInt(input);

    if (!isNaN(playerAnswer)) {
      if (playerAnswer === puzzle.answer) {
        setScore(score + 1);
        setMessage('Correct! Well done!');
      } else {
        setMessage('Incorrect. Try again.');
      }
    } else {
      setMessage('Please enter a valid number.');
    }

    setInput('');
    setIsLoading(false);
  };

  const handleHint = () => {
    setHintsUsed(hintsUsed + 1);
    setMessage(`Hint: The answer is between ${puzzle.answer - 3} and ${puzzle.answer + 3}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Paper elevation={4} sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom fontFamily={'cursive'}>
          AI Puzzle Master
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom >
          Solve the puzzle :<b>{puzzle.question}</b>
        </Typography>
        <TextField
          label="Your Answer"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isLoading}>
          Submit
        </Button>
        {isLoading && <CircularProgress sx={{ ml: 2 }} />}
        <Button variant="text" color="secondary" onClick={handleHint} sx={{ m: 2, fontSize:'11px' }}>
          Get a Hint
        </Button>
        {message && <Typography variant="subtitle1" sx={{ mt: 2 }}>{message}</Typography>}
        <Typography variant="body1" sx={{ mt: 2 }}>Score: {score}</Typography>
        <Typography variant="subtitle2">Hints Used: {hintsUsed}</Typography>
      </Paper>
    </Box>
  );
};

export default AIPuzzleMaster;