import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Layout from './Layout.jsx';

import NotFound from './pages/NotFound/NotFound.jsx';
import ProtectedRoute from './contexts/ProtectedRoute.jsx';
import Login from './pages/Login/Login.jsx';
import Mailbox from './pages/Mailbox/Mailbox.jsx';
import MailDetailed from './pages/MailDetailed/MailDetailed.jsx';

const router = createBrowserRouter([
  {
    element: <div><Outlet /></div>,
    children: [
      { path: '/login', Component: Login },
      { path: '*', Component: NotFound },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: '/', Component: Mailbox },
          { path: '/:id', Component: MailDetailed },
        ],
      },
    ],
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
