import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  useTheme,
  Snackbar,
} from '@mui/material';
import Confetti from 'react-confetti';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isONext, setIsONext] = useState(true);
  const [winnerHistory, setWinnerHistory] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [latestWinner, setLatestWinner] = useState('');
  const theme = useTheme();

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board) || !isONext) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = 'O';
    setBoard(newBoard);
    setIsONext(false);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const makeComputerMove = () => {
    const availableIndexes = board
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null) as number[];

    if (availableIndexes.length > 0) {
      let moveIndex;

      // AI strategy to win or block
      const winOrBlockMove = findWinningMove('X') || findWinningMove('O');
      if (winOrBlockMove !== null) {
        moveIndex = winOrBlockMove;
      } else {
        moveIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      }

      const newBoard = board.slice();
      newBoard[moveIndex] = 'X';
      setBoard(newBoard);
      setIsONext(true);
    }
  };

  const findWinningMove = (player: string) => {
    for (let index of board.map((_, index) => index)) {
      const newBoard = board.slice();
      if (!newBoard[index]) {
        newBoard[index] = player;
        if (calculateWinner(newBoard) === player) {
          return index;
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (!isONext && !winner) {
      const timer = setTimeout(() => {
        makeComputerMove();
      }, 1000);
      return () => clearTimeout(timer);
    } else if (winner) {
      const winnerText = winner === 'O' ? 'You (O)' : 'AI (X)';
      setWinnerHistory(prev => {
        const newHistory = [winnerText, ...prev].slice(0, 10);
        if (newHistory.length === 10) {
          setLatestWinner(winnerText);
          setSnackbarOpen(true);
        }
        return newHistory;
      });
      if (winner === 'O') {
        setShowConfetti(true);
        const confettiTimer = setTimeout(() => {
          setShowConfetti(false);
        }, 2000); // Show confetti for 5 seconds
        return () => clearTimeout(confettiTimer);
      }
    }
  }, [isONext, board]);

  const winner = calculateWinner(board);
  const status = winner ? `Winner is: ${winner === 'O' ? 'You (O)!' : 'AI (X)!'}` : isONext ? 'Your turn' : 'AI turn';

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsONext(true);
    setShowConfetti(false);
    setWinnerHistory([]);
    setSnackbarOpen(false);
  };

  const calculateWinPercentages = () => {
    const totalGames = winnerHistory.slice(0, 10).length;
    const youWins = winnerHistory.slice(0, 10).filter(winner => winner === 'You (O)').length;
    const aiWins = winnerHistory.slice(0, 10).filter(winner => winner === 'AI (X)').length;

    const youPercentage = totalGames === 0 ? 0 : (youWins / 10) * 100;
    const aiPercentage = totalGames === 0 ? 0 : (aiWins / 10) * 100;

    return { youPercentage, aiPercentage };
  };

  const { youPercentage, aiPercentage } = calculateWinPercentages();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" align="center" fontFamily={'cursive'}>
        Tic-Tac-Toe
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: winner ? 'green' : 'red',
          fontWeight: winner ? 'bold' : 'normal',
        }}
      >
        {status}
      </Typography>
      <Grid container spacing={2} style={{ width: '300px' }}>
        {board.map((value, index) => (
          <Grid item xs={4} key={index}>
            <Paper
              onClick={() => handleClick(index)}
              style={{
                height: '55px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#ddd',
                color: theme.palette.text.primary,
                transition: 'box-shadow 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
            >
              {value}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="error" onClick={winnerHistory.length === 10 ? handleReset : () => setBoard(Array(9).fill(null))} style={{ marginTop: '20px', width: '50%' }}>
        {winnerHistory.length === 10 ? 'Reset' : 'Play Game'}
      </Button>
      <Box mt={2} width="100%" maxWidth="400px">
        <Typography variant="subtitle2" align="center">Can you win 10 game?</Typography>
        <Box position="relative" width="100%" height={20} mt={1} bgcolor="lightgrey" borderRadius={5}>
          <Box
            position="absolute"
            left={0}
            height="100%"
            width={`${youPercentage}%`}
            bgcolor="green"
            borderRadius={5}
          />
          <Box
            position="absolute"
            right={0}
            height="100%"
            width={`${aiPercentage}%`}
            bgcolor="red"
            borderRadius={5}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body2" color="green">You (O): {youPercentage.toFixed(2)}%</Typography>
          <Typography variant="body2" color="red">AI (X): {aiPercentage.toFixed(2)}%</Typography>
        </Box>
      </Box>
      {showConfetti && <Confetti />}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={`Winner of the last 10 games is: ${latestWinner}`}
      />
    </Box>
  );
};

export default TicTacToe;
