import { http, delay, HttpResponse } from 'msw';
import quiz from './quiz.json';
import { QuizResultsDto, QuizSubmitBodyDto, validateQuiz } from '@/entities/quiz';

export const quizHandlers = [
  http.get('/quiz/:id', async () => {
    await delay(500);

    return HttpResponse.json(quiz);
  }),
  http.post<{ id: string }, Pick<QuizSubmitBodyDto, 'answers'>, QuizResultsDto>(
    '/quiz/:id',
    async ({ request }) => {
      const answers = await request.json();
      const result = validateQuiz(answers.answers);

      return HttpResponse.json(result);
    }
  ),
];
