import { selectQuizStartedTime, submitQuiz } from '@/entities/quiz';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Countdown } from '@/shared/ui';

export type QuizCountdownProps = {
  duration: number;
};

export function QuizCountdown({ duration }: QuizCountdownProps) {
  const dispatch = useAppDispatch();

  const started = useAppSelector(selectQuizStartedTime) || Date.now();
  const elapsed = Math.floor((Date.now() - started) / 1000);
  const currentDuration = duration - elapsed;
  const onCountdown = () => {
    dispatch(submitQuiz());
  };

  return <Countdown duration={currentDuration} onCountdown={onCountdown} />;
}
