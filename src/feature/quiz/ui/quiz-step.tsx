import { Box, Heading, SkeletonText } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  selectCurrentQuizStep,
  selectIsLastStep,
  selectQuizCurrentStepIndex,
  stepSubmitted,
  submitQuiz,
} from '@/entities/quiz';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Form, Field, SubmitButton } from '@/shared/ui';

export function QuizStep() {
  const [isLoading, setIsLoading] = useState(false);
  const currentStep = useAppSelector(selectQuizCurrentStepIndex);
  const isLastStep = useAppSelector(selectIsLastStep);
  const { required, question, type, options, answer } = useAppSelector(selectCurrentQuizStep) || {};

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    const selected = Object.values(data)[0];
    dispatch(stepSubmitted({ step: currentStep, answer: selected }));

    if (!isLastStep) {
      return;
    }

    setIsLoading(true);

    dispatch(submitQuiz())
      .unwrap()
      .then(() => {
        navigate('/quiz/results');
      })
      .catch(() => navigate('/'))
      .finally(() => setIsLoading(false));
  };

  return (
    <Box>
      <Box>
        <Heading as="h2" size="md" fontWeight="bold" mb={6}>
          {question}
        </Heading>
      </Box>
      <Form onSubmit={onSubmit} key={currentStep}>
        <Field
          rules={{ required: { value: required, message: 'Укажите ответ!' } }}
          type={type}
          options={options}
          value={answer}
          name={type}
        />
        <SubmitButton mt="2rem" isLoading={isLoading} disableIfInvalid />
      </Form>
    </Box>
  );
}

export function QuizStepSkeleton() {
  return (
    <Box bg="white" width={[null, null, '70%']} gap="2rem">
      <SkeletonText mt="4" noOfLines={5} spacing="4" skeletonHeight="4" />
    </Box>
  );
}
