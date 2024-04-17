import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SkeletonText,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { quizStarted, selectQuizStatus, useGetQuizByIdQuery } from '@/entities/quiz';
import { useAppDispatch, useAppSelector } from '@/shared/model';

export function QuizCardSkeleton() {
  return (
    <Box px="1rem" py="1rem" bg="white" boxShadow="lg" gap="2rem">
      <SkeletonText mt="4" noOfLines={8} spacing="4" skeletonHeight="3" />
    </Box>
  );
}

export function QuizCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectQuizStatus);

  const { data, isFetching } = useGetQuizByIdQuery(1); // hardcoded quiz id
  const { name, description } = data || {};

  const onStart = () => {
    if (status !== 'in-progress') {
      dispatch(quizStarted());
    }
    navigate('quiz');
  };

  if (isFetching) {
    return <QuizCardSkeleton />;
  }

  return (
    <Card borderTop="1rem solid" borderTopColor="red.600">
      <CardHeader as="h2" fontSize="lg" fontWeight="bold">
        {name}
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <Button onClick={onStart}>
          {status === 'idle'
            ? 'Начать тест'
            : status === 'finished'
              ? 'Пройти заново'
              : 'Продолжить тест'}
        </Button>
      </CardFooter>
    </Card>
  );
}
