import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winnerHistory, setWinnerHistory] = useState<string[]>([]);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board) || !isXNext) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
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
      const winOrBlockMove = findWinningMove('O') || findWinningMove('X');
      if (winOrBlockMove !== null) {
        moveIndex = winOrBlockMove;
      } else {
        moveIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      }

      const newBoard = board.slice();
      newBoard[moveIndex] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
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
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        makeComputerMove();
      }, 500);
      return () => clearTimeout(timer);
    } else if (winner) {
      const winnerText = winner === 'X' ? 'You (X)' : 'AI (O)';
      setWinnerHistory(prev => [winnerText, ...prev].slice(0, 2));
    }
  }, [isXNext, board]);

  const winner = calculateWinner(board);
  const status = winner ? `Winner is: ${winner === 'X' ? 'You (X)!' : 'AI (O)!'}` : isXNext ? 'Your turn' : 'AI turn';

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
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
      <Grid container spacing={1} style={{ width: '300px' }}>
        {board.map((value, index) => (
          <Grid item xs={4} key={index}>
            <Paper
              onClick={() => handleClick(index)}
              style={{
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#465abd',
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
      <Button variant="contained" color="error" onClick={handleReset} style={{ marginTop: '20px', width: '50%' }}>
        Reset Game
      </Button>
      <Box mt={2}>
        <Typography variant="h6">Latest Winners</Typography>
        {winnerHistory.map((winner, index) => (
          <Typography key={index}>
            {winner}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TicTacToe;
