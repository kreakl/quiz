import { Box } from '@chakra-ui/react';
import { QuizCard } from '@/entities/quiz';

export function MainPage() {
  return (
    <Box width={['90%', null, '30%']} mx="auto" mt={8}>
      <QuizCard />
    </Box>
  );
}
