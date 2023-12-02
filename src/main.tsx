import './styles/fonts.css';
import './styles/global.css';
import './styles/normalize.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './config/routes';
import { Home } from './pages/home/home';
import { WalletDetails } from './pages/wallet-details/wallet-details';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: ROUTES['/'],
    element: <Home />,
  },
  {
    path: ROUTES['/wallet/:id'],
    element: <WalletDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
