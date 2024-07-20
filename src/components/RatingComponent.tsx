import React, { useState } from 'react';
import { Stack, Rating, Typography, Box, Fab, LinearProgress, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RatingComponent: React.FC = () => {
  const [value, setValue] = useState<number | null>(0);
  const [message, setMessage] = useState<string>("");
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const gradientColor = 'linear-gradient(90deg, red, blue, green, purple)';

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
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 1,
        p: 2,
        borderRadius: 2,
      }}
    >
    <Box sx={{ width: '100%' , pb:'10px'}}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
    <FavoriteIcon sx={{ m: 1 }} />
    <Typography variant='body1' textTransform="capitalize">Please rate our app</Typography>
    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex'}}>
      <Fab aria-label="like" variant="extended">
      <Stack spacing={2}>
        <Rating
          name="size-small"
          value={value}
          onChange={handleRatingChange}
          size="large"
        />
      </Stack>
      </Fab>
    </Box> 
      
      {message && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
    
  );
};

export default RatingComponent;
