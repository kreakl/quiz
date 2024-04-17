import { Box } from '@chakra-ui/react';
import { Quiz } from '@/feature/quiz/ui/quiz.tsx';

export function QuizPage() {
  return (
    <Box ml={['1rem', null]} mt={['1rem', null, '10vh']} mx="auto" width="70%">
      <Quiz />
    </Box>
  );
}
