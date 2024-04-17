import { QuizQuestionDto, QuizResultsDto } from '@/entities/quiz';
import { Fields } from '@/shared/ui';

export type QuizResults = QuizResultsDto;

export interface QuizSliceState {
  id: number;
  started?: number;
  currentStepIndex: number;
  status: 'in-progress' | 'finished' | 'idle';
  results?: QuizResults;
  steps: QuizQuestion[];
}

export interface QuizQuestion extends QuizQuestionDto {
  type: QuizQuestionType;
  answer?: string | string[];
}

export type QuizQuestionType = Fields;
