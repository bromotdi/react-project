import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Layout.css';
import Footer from '../Footer/Footer';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
