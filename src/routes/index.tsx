import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blog';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  );
};

export default Router;
