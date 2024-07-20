
import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

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

  return (
      <Typography variant="subtitle2" fontSize="12px">
        {currentTime}
      </Typography>
  );
};

export default DigitalClock;
