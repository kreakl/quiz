const answers = [
  'HTML, CSS и JavaScript',
  'Нет',
  ['git log', 'git commit'],
  ['number', 'string', 'Symbol'],
  `
  <!doctype html>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  `,
  'Map',
  'React',
  'React',
  'Создатель Redux',
  ['Bootstrap', 'Tailwind'],
];

const validateArray = (answer: string[], idx: number) => {
  const correctAnswer = answers[idx] as string[];
  const len = correctAnswer.length;

  if (answer.length !== len) {
    return false;
  }

  return answer.sort().join(',') === correctAnswer.sort().join(',');
};

export const validateQuiz = (submittedAswers: Array<string | string[] | undefined>) => {
  const totalCorrectAnswers = submittedAswers.reduce((total, answer, idx) => {
    const result = Array.isArray(answer) ? validateArray(answer, idx) : answer === answers[idx];

    return result ? total + 1 : total;
  }, 0);

  return {
    total: answers.length,
    totalCorrectAnswers,
  };
};
