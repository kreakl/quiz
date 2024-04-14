import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appStore } from './redux/app-store.ts';
import { router } from './router.tsx';
import { theme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReduxProvider store={appStore}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
