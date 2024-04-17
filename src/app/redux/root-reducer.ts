import { combineReducers } from '@reduxjs/toolkit';
import { quizSlice } from '@/entities/quiz';
import { baseApi } from '@/shared/api';

export const rootReducer = combineReducers({
  [quizSlice.name]: quizSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
