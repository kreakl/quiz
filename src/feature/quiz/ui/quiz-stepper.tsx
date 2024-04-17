import { Step, StepIndicator, Stepper } from '@chakra-ui/react';
import { selectQuizCurrentStepIndex, selectQuizSteps } from '@/entities/quiz';
import { useAppSelector } from '@/shared/model';

export function QuizStepper() {
  const currentStep = useAppSelector(selectQuizCurrentStepIndex);
  const steps = useAppSelector(selectQuizSteps);

  return (
    <Stepper index={currentStep} gap={4} justifyContent="start" showLastSeparator>
      {steps.map(({ question }) => (
        <Step key={question}>
          <StepIndicator />
        </Step>
      ))}
    </Stepper>
  );
}
