import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Layout from './Layout.jsx';

import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Unauthorized from './pages/NotFound/Unauthorized.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', Component: Home },
      { path: '/unauthorized', Component: Unauthorized },
      { path: '*', Component: NotFound },
    ],
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
