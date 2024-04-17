import { selectQuizStartedTime } from '@/entities/quiz';
import { useAppSelector } from '@/shared/model';
import { Countdown } from '@/shared/ui';

export type QuizCountdownProps = {
  duration: number;
  onCountdown: () => void;
};

export function QuizCountdown({ duration, onCountdown }: QuizCountdownProps) {
  const started = useAppSelector(selectQuizStartedTime) || Date.now();
  const elapsed = Math.floor((Date.now() - started) / 1000);
  const currentDuration = duration - elapsed;

  return <Countdown duration={currentDuration} onCountdown={onCountdown} />;
}
