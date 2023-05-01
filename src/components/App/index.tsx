import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import CardPage from '../../pages/CardPage/CardPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import FormPage from '../../pages/FormPage/FormPage';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="characters/:id" element={<CardPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
