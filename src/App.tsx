import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UsersPage from './pages/UsersPage/UsersPage';

import './App.module.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
