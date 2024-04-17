import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitQuiz, useGetQuizByIdQuery } from '@/entities/quiz';
import { QuizCountdown } from './quiz-countdown.tsx';
import { QuizStep, QuizStepSkeleton } from './quiz-step.tsx';
import { QuizStepper } from './quiz-stepper.tsx';
import { useAppDispatch } from '@/shared/model';

export function Quiz() {
  const { data, isLoading } = useGetQuizByIdQuery(1); // hardcoded quiz id
  const { name, duration = 0 } = data || {};
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(submitQuiz())
      .unwrap()
      .then(() => {
        navigate('/quiz/results');
      })
      .catch(() => navigate('/'));
  }, []);

  return (
    <Stack gap={6}>
      <Flex direction={['column', null, 'row']} align={['start', null, 'center']} gap={4}>
        <Heading size="lg">{name}</Heading>
        {!isLoading && <QuizCountdown duration={duration} onCountdown={handleSubmit} />}
      </Flex>
      <QuizStepper />
      {isLoading ? <QuizStepSkeleton /> : <QuizStep handleQuizSubmit={handleSubmit} />}
    </Stack>
  );
}
