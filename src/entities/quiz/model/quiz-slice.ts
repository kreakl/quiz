import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistor } from '@/app/redux/app-store.ts';
import { QuizQuestionType, QuizResults, QuizSliceState } from './types';
import { quizApi, QuizSubmitBodyDto } from '@/entities/quiz';

const initialState: QuizSliceState = {
  id: 0,
  steps: [],
  currentStepIndex: 0,
  status: 'idle',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    quizSubmitted(_, action: PayloadAction<QuizResults | undefined>) {
      return {
        ...initialState,
        results: action.payload,
        status: 'finished',
      };
    },
    quizStarted(state) {
      state.started = Date.now();
      state.status = 'in-progress';
    },
    stepSubmitted(state, action: PayloadAction<{ step: number; answer: string | string[] }>) {
      const { answer, step } = action.payload;
      const quizStep = state.steps[state.currentStepIndex];

      if (quizStep) {
        state.currentStepIndex = step === state.steps.length - 1 ? step : step + 1;
        quizStep.answer = answer;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(quizApi.endpoints.getQuizById.matchFulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.steps = payload.steps.map((step, i) => ({
        ...step,
        type: step.type as QuizQuestionType,
        answer: state.steps[i]?.answer,
      }));
    });
  },
});

export const {
  actions: { stepSubmitted, quizStarted, quizSubmitted },
} = quizSlice;

export const submitQuiz = createAsyncThunk('quiz/submit', async (_, { dispatch, getState }) => {
  try {
    const { id, steps } = (getState() as RootState).quiz;
    const body: QuizSubmitBodyDto = { id, answers: steps.map((step) => step.answer) };
    const result = await dispatch(quizApi.endpoints.submitQuiz.initiate(body)).unwrap();

    dispatch(quizSubmitted(result));
  } catch (e) {
    dispatch(quizSubmitted());
    throw e;
  } finally {
    await persistor.purge();
  }
});

export const selectQuizSteps = (state: RootState) => state.quiz.steps;

export const selectQuizCurrentStepIndex = (state: RootState) => state.quiz.currentStepIndex;

export const selectCurrentQuizStep = createSelector(
  selectQuizSteps,
  selectQuizCurrentStepIndex,
  (steps, currentStep) => steps[currentStep]
);

export const selectQuizStepsLength = (state: RootState) => state.quiz.steps.length;

export const selectIsLastStep = createSelector(
  selectQuizStepsLength,
  selectQuizCurrentStepIndex,
  (length, currentStep) => length - 1 === currentStep
);

export const selectQuizStatus = (state: RootState) => state.quiz.status;

export const selectQuizStartedTime = (state: RootState) => state.quiz.started;
