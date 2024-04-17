import { Box, Heading, SkeletonText } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useCallback } from 'react';
import {
  selectCurrentQuizStep,
  selectIsLastStep,
  selectQuizCurrentStepIndex,
  stepSubmitted,
} from '@/entities/quiz';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Form, Field, SubmitButton } from '@/shared/ui';

export type QuizStepProps = {
  handleQuizSubmit: () => void;
};

export function QuizStep({ handleQuizSubmit }: QuizStepProps) {
  const currentStep = useAppSelector(selectQuizCurrentStepIndex);
  const isLastStep = useAppSelector(selectIsLastStep);
  const { required, question, type, options, answer } = useAppSelector(selectCurrentQuizStep) || {};

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (data: FieldValues) => {
      const selected = Object.values(data)[0];
      dispatch(stepSubmitted({ step: currentStep, answer: selected }));

      if (isLastStep) {
        handleQuizSubmit();
      }
    },
    [currentStep, dispatch, handleQuizSubmit, isLastStep]
  );

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
        <SubmitButton mt="2rem" disableIfInvalid />
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
