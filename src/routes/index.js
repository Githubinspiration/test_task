import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './public';

const AppRoutes = () => (
  <Routes>
    <Route 
      path="/" 
      element={<PublicRoutes />} 
    />
  </Routes>
);

export default AppRoutes;
