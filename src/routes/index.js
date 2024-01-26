import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notification from '../views/notification'
import PublicRoutes from './public';

const AppRoutes = () => (
  <Routes>
    <Route 
      path="/" 
      element={<PublicRoutes />} 
    />
    <Route 
      path="/notification" 
      element={<Notification />} 
    />
    <Route 
      path="/" 
      element={<PublicRoutes />} 
    />
    <Route 
      path="/" 
      element={<PublicRoutes />} 
    />
  </Routes>
);

export default AppRoutes;
