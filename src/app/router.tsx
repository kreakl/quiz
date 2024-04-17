import { createHashRouter } from 'react-router-dom';
import { QuizGuard, QuizPage } from '@/pages/quiz';
import { MainPage } from '@/pages/main-page/main-page.tsx';

export const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/quiz',
        element: (
          <QuizGuard>
            <QuizPage />,
          </QuizGuard>
        ),
      },
    ],
  },
]);
