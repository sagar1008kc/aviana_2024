import React, { useState } from 'react';
import { Stack, Rating, Typography, Box } from '@mui/material';

const RatingComponent: React.FC = () => {
  const [value, setValue] = useState<number | null>(0);
  const [message, setMessage] = useState<string>("");

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);

    switch (newValue) {
      case 1:
        setMessage("1 star: Oh no! What did we do wrong?");
        break;
      case 2:
        setMessage("2 stars: Could have been better!");
        break;
      case 3:
        setMessage("3 stars: Average, we can do better!");
        break;
      case 4:
        setMessage("4 stars: Good, but not perfect!");
        break;
      case 5:
        setMessage("5 stars: Great review! You are so generous!");
        break;
      default:
        setMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
       <Typography variant='subtitle1'>Rate our app:</Typography>
      <Stack spacing={1}>
     
        <Rating
          name="size-small"
          value={value}
          onChange={handleRatingChange}
          size="large"
        />
      </Stack>
      {message && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default RatingComponent;
