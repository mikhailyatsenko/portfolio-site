'use client';

import { useEffect, useState } from 'react';

const LocationTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const berlinTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/Berlin',
      });
      setCurrentTime(berlinTime);
    };

    updateCurrentTime();
    const timerId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(timerId);
  }, []);

  return <>{currentTime || ''}</>;
};

export default LocationTime;
