'use client';

import { useEffect, useState } from 'react';

const LocationTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      let berlinTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/Berlin',
      });
      berlinTime = berlinTime.replace(' ', '\u00A0'); // Replace space with non-breaking space
      setCurrentTime(berlinTime);
    };

    updateCurrentTime();
    const timerId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(timerId);
  }, []);

  return <>{currentTime || ''}</>;
};

export default LocationTime;
