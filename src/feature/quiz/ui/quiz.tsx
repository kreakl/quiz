import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useGetQuizByIdQuery } from '@/entities/quiz';
import { QuizCountdown } from './quiz-countdown.tsx';
import { QuizStep, QuizStepSkeleton } from './quiz-step.tsx';
import { QuizStepper } from './quiz-stepper.tsx';

export function Quiz() {
  const { data, isLoading } = useGetQuizByIdQuery(1); // hardcoded quiz id
  const { name, duration = 0 } = data || {};

  return (
    <Stack gap={6}>
      <Flex direction={['column', null, 'row']} align={['start', null, 'center']} gap={4}>
        <Heading size="lg">{name}</Heading>
        {!isLoading && <QuizCountdown duration={duration} />}
      </Flex>
      <QuizStepper />
      {isLoading ? <QuizStepSkeleton /> : <QuizStep />}
    </Stack>
  );
}
