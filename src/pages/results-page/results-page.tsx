import { Link, Navigate } from 'react-router-dom';
import { Button, Stack } from '@chakra-ui/react';
import { useAppSelector } from '@/shared/model';
import { selectQuizResults, selectQuizStatus } from '@/entities/quiz';

export function ResultsPage() {
  const status = useAppSelector(selectQuizStatus);
  const { total, totalCorrectAnswers } = useAppSelector(selectQuizResults) || {};

  if (status !== 'finished') return <Navigate to="/" />;

  return (
    <Stack
      fontSize="6xl"
      color="red.600"
      fontWeight="bold"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={20}
      height="100vh"
      margin={0}
    >
      <p>{`Ваш результат: ${totalCorrectAnswers} / ${total}`}</p>
      <Button variant="primary" size="lg">
        <Link to="/">Вернуться назад</Link>
      </Button>
    </Stack>
  );
}
