import React from 'react';
import { BrowserRouter, Routes, Route, RouteObject } from 'react-router-dom';
import ContactUsPage from '../pages/ContactUsPage';

export const getAppRoutes = (): RouteObject[] => [
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
];

export const AppRouter: React.FC = () => {
  const routes = getAppRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
