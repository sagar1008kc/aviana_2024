import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { Container, Typography, Button } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

const ChessGame: React.FC = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (game.isGameOver()) {
      setGameOver(true);
      if (game.isCheckmate()) {
        setWinner(game.turn() === 'w' ? 'Black' : 'White');
      } else {
        setWinner('Draw');
      }
    }
  }, [fen, game]);

  const handleMove = (sourceSquare: string, targetSquare: string) => {
    const move = game.move({ from: sourceSquare, to: targetSquare });
    if (move) {
      setFen(game.fen());
      setIsPlayerTurn(false);
      setTimeout(() => {
        makeComputerMove();
      }, 1000);
      return true;
    } else {
      enqueueSnackbar('Invalid move!', { variant: 'error' });
      return false;
    }
  };

  const makeComputerMove = () => {
    const possibleMoves = game.moves();
    if (possibleMoves.length > 0) {
      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      game.move(randomMove);
      setFen(game.fen());
      setIsPlayerTurn(true);
    }
  };

  const handleReset = () => {
    game.reset();
    setFen(game.fen());
    setGameOver(false);
    setWinner(null);
    setIsPlayerTurn(true);
  };

  return (
    <SnackbarProvider maxSnack={1}>
      <Container>
        <Typography variant="h4" align="center" fontFamily="cursive">
          Chess Game
        </Typography>
        <Typography variant="body1" align="center">
          {gameOver ? `${winner} Wins!` : isPlayerTurn ? 'Your Turn' : 'AI Turn'}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Chessboard position={fen} onPieceDrop={handleMove} />
        </div>
        {gameOver && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              Restart Game
            </Button>
          </div>
        )}
      </Container>
    </SnackbarProvider>
  );
};

export default ChessGame;
