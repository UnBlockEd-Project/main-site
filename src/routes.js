/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';
// import OverviewView from './views/Overview';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/home' />,
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('./views/Desktop0')),
      },
      {
        path: '/map',
        exact: true,
        component: lazy(() => import('./views/Desktop1')),
      },
      {
        component: () => <Redirect to='/errors/error-404' />,
      },
    ],
  },
];
