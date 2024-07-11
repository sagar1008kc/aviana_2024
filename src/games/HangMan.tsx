import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';

const words = ['apple', 'brain', 'beautiful', 'banana', 'sunsine', 'cool', 'yes', 'congratulations'];

const Hangman: React.FC = () => {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) setWrongGuesses(wrongGuesses + 1);
  };

  const renderWord = () => {
    return word.split('').map((letter, index) =>
      guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');
  };

  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuesses >= maxWrongGuesses;

  return (
    <Container>
      <Typography variant="h3" align="center" fontFamily={'cursive'}>
        Hangman
      </Typography>
      <Typography variant="h4" align="center" >
        {renderWord()}
      </Typography>
      <Typography variant="body1" align="center" >
        Wrong Guesses: {wrongGuesses}
      </Typography>
      <Typography variant="body1" align="center" >
        {isGameWon ? 'You Win!' : isGameLost ? 'Game Over!' : 'Keep Guessing'}
      </Typography>
      {!isGameWon && !isGameLost && (
        <div style={{ textAlign: 'center' }}>
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <Button
              key={letter}
              variant="outlined"
              onClick={() => handleGuess(letter)}
              disabled={guessedLetters.includes(letter)}
              style={{ margin: '5px' }}
            >
              {letter}
            </Button>
          ))}
        </div>
      )}
      {(isGameWon || isGameLost) && (
        <div style={{ textAlign: 'center' }}>
          <Button variant="contained" onClick={() => {
            setWord(words[Math.floor(Math.random() * words.length)]);
            setGuessedLetters([]);
            setWrongGuesses(0);
          }}>
            Play Again
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Hangman;
