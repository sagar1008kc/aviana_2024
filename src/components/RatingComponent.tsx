import React, { useState } from 'react';
import { Stack, Rating, Typography, Box, Fab, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        maxWidth: 800,
        mx: 'auto',
        mb: '12px',
      }}
    >
      <Box sx={{ width: '100%', pb: '10px' }}>
        <Divider />
      </Box>
      <FavoriteIcon sx={{ m: 1, color: 'purple' }} />
      <Typography variant='body1' textTransform="capitalize" sx={{ mb: 2 }}>
        Please rate our app
      </Typography>
          <Stack >
            <Rating
              name="app-rating"
              value={value}
              onChange={handleRatingChange}
              size="large"
            />
          </Stack>
      {message && (
        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default RatingComponent;
