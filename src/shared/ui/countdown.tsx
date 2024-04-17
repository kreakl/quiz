import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useInterval } from '@/shared/lib';

export type CountdownProps = {
  duration: number;
  onCountdown: () => void;
};

export function Countdown({ duration, onCountdown }: CountdownProps) {
  const [time, setTime] = useState(duration);

  useInterval(() => {
    if (time > 0) {
      setTime(time - 1);
      return;
    }

    onCountdown();
    setTime(0);
  }, 1000);

  return (
    <Box fontSize="lg" px={6} py={2} border="1px solid black" borderRadius="md">
      {`${Math.floor(time / 60)}`.padStart(2, '0')}:{`${time % 60}`.padStart(2, '0')}
    </Box>
  );
}
