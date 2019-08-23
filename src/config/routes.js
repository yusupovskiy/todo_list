import Loadable from 'react-loadable';
import React from 'react';

function Loading() {
  return "loading";
}

const loading = () => <Loading />;

export const tasks = {
  path: '/',
  component: Loadable({
    loader: () => import('../pages/tasks'),
    loading: loading
  }),
  exact: true
};

export const users = {
  path: '/users',
  component: Loadable({
    loader: () => import('../pages/users'),
    loading: loading
  }),
  exact: true
};
