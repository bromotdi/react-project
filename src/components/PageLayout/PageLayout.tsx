import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import style from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <div className={style.pageWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
