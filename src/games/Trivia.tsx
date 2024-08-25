import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  CircularProgress,
  MenuItem,
  TextField,
  Grid,
} from '@mui/material';

// Mapping category codes to category names
const categoryMap: Record<string, string> = {
  '9': 'General Knowledge',
  '10': 'Books',
  '11': 'Film',
  '12': 'Music',
  '17': 'Science & Nature',
  '18': 'Computers',
  // Add more categories as needed
};

const Trivia: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [difficulty, setDifficulty] = useState('medium');
  const [category, setCategory] = useState('9'); // General Knowledge Category
  const [gameStarted, setGameStarted] = useState(false); // New state to control game start

  // Fetch trivia questions from the API
  useEffect(() => {
    if (gameStarted) {
      setIsLoading(true);
      axios
        .get(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        )
        .then((response) => {
          setQuestions(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => console.error('Error fetching trivia questions', error));
    }
  }, [difficulty, category, gameStarted]);

  // Handle timer countdown
  useEffect(() => {
    if (timeLeft > 0 && gameStarted) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && gameStarted) {
      handleNextQuestion();
    }
  }, [timeLeft, gameStarted]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestionIndex]?.correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimeLeft(30);
  };

  const handleResetGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setGameStarted(false); // Reset gameStarted state
  };

  const handleStartGame = () => {
    setGameStarted(true); // Start the game when the button is clicked
  };

  if (!gameStarted) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Typography variant="h4" gutterBottom fontFamily={'cursive'}>
          Welcome to Trivia Game
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 4, width: '100%', maxWidth: '600px' }}>
          <Typography variant="body1" gutterBottom textAlign="center" pb='16px'>
            Select Difficulty & Category
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                fullWidth
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
              >
                <MenuItem value="9">General Knowledge</MenuItem>
                <MenuItem value="10">Books</MenuItem>
                <MenuItem value="11">Film</MenuItem>
                <MenuItem value="12">Music</MenuItem>
                <MenuItem value="17">Science & Nature</MenuItem>
                <MenuItem value="18">Computers</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>
        <Button variant="contained" color="primary" onClick={handleStartGame}>
          Play
        </Button>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Trivia Completed!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your Final Score: {score}/{questions.length}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleResetGame}>
          Play Again
        </Button>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Typography variant="h6" color='GrayText'>
        Trivia - {categoryMap[category]} ({difficulty})
      </Typography>
      {/* Question Section */}
      <Paper elevation={3} sx={{ p: 2, width: '100%', maxWidth: '600px' }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestionIndex + 1} / {questions.length}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {/* Decode HTML entities using dangerouslySetInnerHTML */}
          <span dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        </Typography>
        <RadioGroup value={selectedAnswer} onChange={(e) => handleAnswerSelect(e.target.value)}>
          {answers.map((answer) => (
            <FormControlLabel
              key={answer}
              value={answer}
              control={<Radio />}
              label={<span dangerouslySetInnerHTML={{ __html: answer }} />}
            />
          ))}
        </RadioGroup>
        <Box mt={1} display="flex" justifyContent="space-between">
          <Typography variant="body1">Time Left: {timeLeft}s</Typography>
          <Typography variant="body1">Score: {score}</Typography>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next Question
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Trivia;
