import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import RockIcon from '../assets/rock.png';
import PaperIcon from '../assets/paper.png';
import ScissorIcon from '../assets/scissor.png';
import Confetti from 'react-confetti';

const choices = ['Rock', 'Paper', 'Scissors'];

const getWinner = (playerChoice: string, aiChoice: string): string => {
  if (playerChoice === aiChoice) return 'Draw';
  if (
    (playerChoice === 'Rock' && aiChoice === 'Scissors') ||
    (playerChoice === 'Paper' && aiChoice === 'Rock') ||
    (playerChoice === 'Scissors' && aiChoice === 'Paper')
  ) {
    return 'You';
  }
  return 'AI';
};

const getChoiceIcon = (choice: string) => {
  switch (choice) {
    case 'Rock':
      return <img src={RockIcon} alt="Rock" style={{ width: '60px', height: '60px' }} />;
    case 'Paper':
      return <img src={PaperIcon} alt="Paper" style={{ width: '60px', height: '60px'}} />;
    case 'Scissors':
      return <img src={ScissorIcon} alt="Scissors" style={{ width: '60px', height: '60px' }} />;
    default:
      return null;
  }
};

const getChoiceStyle = (playerChoice: string, aiChoice: string, winner: string | null) => {
  if (playerChoice === aiChoice) {
    return {
      color: 'green',
      fontWeight: 'bold',
    };
  } else if (winner === 'Draw') {
    return {
      color: 'orange',
      fontWeight: 'bold',
    };
  } else {
    return {
      color: 'red',
      fontWeight: 'bold',
    };
  }
};

const RockPaper: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [aiChoice, setAiChoice] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handlePlayerChoice = (choice: string) => {
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameWinner = getWinner(choice, aiChoice);
    setPlayerChoice(choice);
    setAiChoice(aiChoice);
    setWinner(gameWinner);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setAiChoice(null);
    setWinner(null);
    setShowConfetti(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (winner === 'You') {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  return (
    <Box sx={{ textAlign: 'center'}}>
      <Typography variant={isMobile ? 'h5' : 'h6'} fontFamily={'fantasy'} gutterBottom>
        Rock, Paper, Scissors
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {choices.map((choice) => (
          <Grid item key={choice}>
            <Button
            variant='contained'
              color="primary"
              onClick={() => handlePlayerChoice(choice)}
              sx={{
                width: isMobile ? 80 : 110,
                height: isMobile ? 80 : 110,   
              }}
            >
              {getChoiceIcon(choice)}
            </Button>
          </Grid>
        ))}
      </Grid>
      {playerChoice && aiChoice && (
        <Paper elevation={3} sx={{ mt: 2, p: 2, mx: 'auto' }}>
          <Typography variant="h6" sx={getChoiceStyle(playerChoice, aiChoice, winner)}>
            Your Choice: {getChoiceIcon(playerChoice)}
          </Typography>
          <Typography variant="h6" sx={getChoiceStyle(aiChoice, playerChoice, winner)}>
            AI Choice: {getChoiceIcon(aiChoice)}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
          </Typography>
          <Button variant="contained" color="secondary" onClick={resetGame} sx={{ mt: 1 }}>
            Play Again
          </Button>
        </Paper>
      )}
      {showConfetti && <Confetti />}
    </Box>
  );
};

export default RockPaper;
