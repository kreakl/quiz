export type QuizDto = {
  id: number;
  name: string;
  description: string;
  steps: QuizQuestionDto[];
  duration: number;
};

export type QuizQuestionDto = {
  required: boolean;
  question: string;
  type: string;
  options?: string[];
};

export type QuizSubmitBodyDto = {
  id: number;
  answers: Array<string | string[] | undefined>;
};

export type QuizResultsDto = {
  total: number;
  totalCorrectAnswers: number;
};
