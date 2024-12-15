import { createBrowserRouter, RouterProvider } from 'react-router';
import { paths } from '../config/paths';
import { Suspense } from 'react';
import React from 'react';

const Landing = React.lazy(() => import('./routes/landing'));
const NotFound = React.lazy(() => import('./routes/not-found'));

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <Landing />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

export const AppRouter = () => {
  return <RouterProvider router={createAppRouter()} />;
};
