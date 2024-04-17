import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const QUIZ_TAG = 'QUIZ_TAG';

export const baseApi = createApi({
  tagTypes: [QUIZ_TAG],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
  endpoints: () => ({}),
});
