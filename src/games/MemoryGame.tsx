import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const cards = [
  { id: 1, name: 'Ant' }, { id: 2, name: 'Ant' },
  { id: 3, name: 'Bug' }, { id: 4, name: 'Bug' },
  { id: 5, name: 'Cat' }, { id: 6, name: 'Cat' },
  { id: 7, name: 'Dog' }, { id: 8, name: 'Dog' },
  { id: 9, name: 'Eel' }, { id: 10, name: 'Eel' },
  { id: 11, name: 'Fox' }, { id: 12, name: 'Fox' },
];

const shuffleCards = () => {
  let shuffled = cards.sort(() => Math.random() - 0.5);
  return shuffled.map(card => ({ ...card, flipped: false, matched: false }));
};

const MemoryGame: React.FC = () => {
  const [gameCards, setGameCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = gameCards[firstIndex];
      const secondCard = gameCards[secondIndex];

      if (firstCard.name === secondCard.name) {
        setGameCards(prevCards =>
          prevCards.map(card =>
            card.name === firstCard.name ? { ...card, matched: true } : card
          )
        );
      } else {
        setTimeout(() => {
          setGameCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex ? { ...card, flipped: false } : card
            )
          );
        }, 1000);
      }

      setMoves(prevMoves => prevMoves + 1);
      setFlippedCards([]);
    }
  }, [flippedCards, gameCards]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !gameCards[index].flipped) {
      setGameCards(prevCards =>
        prevCards.map((card, i) =>
          i === index ? { ...card, flipped: true } : card
        )
      );
      setFlippedCards(prevFlipped => [...prevFlipped, index]);
    }
  };

  const handleRestart = () => {
    setGameCards(shuffleCards());
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h4" fontFamily={'cursive'}>Memory Game</Typography>
      <Typography variant="h6" gutterBottom>Moves: {moves}</Typography>
      <Grid container spacing={2} justifyContent="center" style={{ maxWidth: 600 }}>
        {gameCards.map((card, index) => (
          <Grid item xs={3} key={index}>
            <Card
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: card.flipped || card.matched ? '#fcfcfc' : '#172416',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <CardContent>
                <Typography variant="h5" color={card.flipped || card.matched ? 'GrayText' : 'white'}>
                  {card.flipped || card.matched ? card.name : '?'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleRestart} style={{ marginTop: 20 }}>
        Restart Game
      </Button>
    </Box>
  );
};

export default MemoryGame;
