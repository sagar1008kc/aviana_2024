import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Paper, List, ListItem, ListItemText } from '@mui/material';

const predefinedAnswers = [
  { answer: 'elephant', hints: ['It is a large mammal.', 'It has a trunk.', 'It is the largest land animal.'] },
  { answer: 'sun', hints: ['It is a star.', 'It rises in the east.', 'It provides light and heat.'] },
  { answer: 'pizza', hints: ['It is a popular Italian dish.', 'It is often circular.', 'It is topped with cheese and various ingredients.'] },
  { answer: 'computer', hints: ['It is an electronic device.', 'It can process data.', 'It has a CPU.'] },
  { answer: 'banana', hints: ['It is a fruit.', 'It is yellow when ripe.', 'Monkeys love it.'] },
  { answer: 'ocean', hints: ['It is a large body of water.', 'It covers most of the Earth’s surface.', 'It is salty.'] },
  { answer: 'mountain', hints: ['It is a landform.', 'It is elevated.', 'It has a peak.'] },
  { answer: 'car', hints: ['It is a vehicle.', 'It has four wheels.', 'It runs on fuel.'] },
  { answer: 'book', hints: ['It is a source of knowledge.', 'It has pages.', 'You read it.'] },
  { answer: 'clock', hints: ['It shows time.', 'It has hands.', 'It ticks.'] },
];

const getRandomAnswer = () => predefinedAnswers[Math.floor(Math.random() * predefinedAnswers.length)];

const ChattingGame: React.FC = () => {
  const initialAnswer = getRandomAnswer();
  const [currentAnswer, setCurrentAnswer] = useState(initialAnswer.answer);
  const [hints, setHints] = useState(initialAnswer.hints);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [userGuess, setUserGuess] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string, isHint?: boolean }[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === currentAnswer.toLowerCase()) {
      setMessages([...messages, { text: `Correct! The answer is "${currentAnswer}".` }]);
      setGameOver(true);
    } else {
      if (currentHintIndex < hints.length) {
        setMessages([...messages, { text: `Hint: ${hints[currentHintIndex]}`, isHint: true }]);
        setCurrentHintIndex(currentHintIndex + 1);
      } else {
        setMessages([...messages, { text: `Incorrect! The correct answer was "${currentAnswer}".` }]);
        setGameOver(true);
      }
    }
    setUserGuess('');
  };

  const handleRestart = () => {
    const newAnswer = getRandomAnswer();
    setCurrentAnswer(newAnswer.answer);
    setHints(newAnswer.hints);
    setCurrentHintIndex(0);
    setUserGuess('');
    setMessages([]);
    setGameOver(false);
  };

  return (
  <>
      <Typography variant="h4" gutterBottom fontFamily={'fantasy'}>
        Word Guessing Game
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={msg.text}
                style={{ color: msg.isHint ? 'blue' : 'black' }}
              />
            </ListItem>
          ))}
        </List>
        {!gameOver && (
          <>
            <TextField
              variant="outlined"
              fullWidth
              value={userGuess}
              onChange={handleChange}
              placeholder="Inter your guess"
              style={{ marginBottom: '20px' }}
            />
            <Button variant="contained" color="primary" onClick={handleGuess}>
              Submit
            </Button>
          </>
        )}
        {gameOver && (
          <Button variant="outlined" color="secondary" onClick={handleRestart} style={{ marginTop: '20px' }}>
            Restart
          </Button>
        )}
      </Paper>
    </>
  );
};

export default ChattingGame;
