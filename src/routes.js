/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';
import LandingPage from './views/LandingPage';
import Desktop1 from './views/Desktop1';
import Desktop2 from './views/Desktop2';

export default [
  //   {
  //     path: '/',
  //     exact: true,
  //     component: () => <Redirect to='/home' />,
  //   },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('./views/LandingPage')),
      },
      {
        path: '/map',
        exact: true,
        component: lazy(() => import('./views/Desktop1')),
      },
      {
        path: '/transfer',
        exact: true,
        component: lazy(() => import('./views/Desktop2')),
      },
      {
        component: () => <Redirect to='/errors/error-404' />,
      },
    ],
  },
];
