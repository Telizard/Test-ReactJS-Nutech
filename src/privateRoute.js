import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAccessToken } from './utils/LocalStorage';

const isAuthenticated = !!getAccessToken();

const PrivateRoute = ({ element: Component, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
