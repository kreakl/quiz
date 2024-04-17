import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { selectQuizStatus } from '@/entities/quiz';
import { useAppSelector } from '@/shared/model';

export function QuizGuard({ children }: PropsWithChildren) {
  const status = useAppSelector(selectQuizStatus);

  if (status !== 'in-progress') return <Navigate to="/" />;

  return children;
}
