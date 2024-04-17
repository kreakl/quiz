import { setupWorker } from 'msw/browser';
import { quizHandlers } from '@/entities/quiz/api/__mocks__/quiz-handler.ts';

export const apiMockWorker = setupWorker(...quizHandlers);
