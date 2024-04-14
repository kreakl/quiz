import { createHashRouter } from 'react-router-dom';
import { MainPage } from '@/pages/main';

export const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
