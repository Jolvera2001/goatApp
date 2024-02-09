import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';

import App from './App.jsx';
import Sidebar from './components/Sidebar.jsx';
import Homepage from './pages/Homepage.jsx';
import Account from './pages/Account.jsx';
import MapPage from './pages/MapPage.jsx';
import LandingPageRedone from './pages/LandingPageRedone';
import CreatePost from './pages/CreatePost'



const AppLayout = () => (
  <>
    {/* Conditionally render Sidebar based on route */}
    {window.location.pathname !== '/' && <Sidebar />}
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPageRedone />,
      },
      {
        path: 'homepage',
        element: <Homepage />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'map',
        element: <MapPage />,
      },
      {
        path: 'create-post',
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
