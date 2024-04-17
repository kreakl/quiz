import { QuizDto, QuizResultsDto, QuizSubmitBodyDto } from './dtos.ts';
import { QUIZ_TAG, baseApi } from '@/shared/api';

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizById: builder.query<QuizDto, number>({
      query: (id) => ({
        url: `/quiz/${id}`,
      }),
      providesTags: [QUIZ_TAG],
    }),
    submitQuiz: builder.mutation<QuizResultsDto, QuizSubmitBodyDto>({
      query: ({ id, ...body }) => ({
        url: `/quiz/${id}`,
        body,
        method: 'POST',
      }),
      invalidatesTags: [QUIZ_TAG],
    }),
  }),
});

export const { useGetQuizByIdQuery } = quizApi;
