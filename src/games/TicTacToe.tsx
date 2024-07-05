import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
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

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" gutterBottom >
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
      <Button variant="contained" color="error" onClick={handleReset} style={{ marginTop: '20px', width:'50%' }}>
        Reset Game
      </Button>
    </Box>
  );
};

export default TicTacToe;
