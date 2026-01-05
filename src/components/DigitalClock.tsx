
import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';;
const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long'
      };
      setCurrentTime(now.toLocaleDateString('en-CA', options));
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);
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
    <Grid mb="10px">
    <Typography variant="subtitle2" fontSize="12px"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingInline: '20px',
        letterSpacing: 5,
      }}
    >
        {currentTime}
      </Typography>
      </Grid>
  );
};

export default DigitalClock;
