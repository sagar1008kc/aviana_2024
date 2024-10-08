import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Container } from '@mui/material';
import { Height } from '@mui/icons-material';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <Box sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        
      }}>
        <Typography variant="h5" align="center" fontFamily={'fantasy'} >
          Calculator
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          InputProps={{
            readOnly: true,
            style: { textAlign: 'right', fontSize: '.8rem' }
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          value={result}
          margin="normal"
          InputProps={{
            readOnly: true,
            style: { textAlign: 'right', fontSize: '.8rem' }
          }}
        />
        <Grid container spacing={1}>
          {['7', '8', '9', '/'].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(value)}
                sx={{ height: '40px', fontSize: '1.2rem' }}
              >
                {value}
              </Button>
            </Grid>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(value)}
                sx={{ height: '40px', fontSize: '1.2rem' }}
              >
                {value}
              </Button>
            </Grid>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleButtonClick(value)}
                sx={{ height: '40px', fontSize: '1.2rem' }}
              >
                {value}
              </Button>
            </Grid>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}
                sx={{ height: '40px', fontSize: '1.2rem' }}
              >
                {value}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              color="error"
              onClick={handleClear}
              sx={{ height: '40px', fontSize: '1rem' }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Calculator;
