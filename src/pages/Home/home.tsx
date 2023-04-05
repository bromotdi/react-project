import React from 'react';
import styles from './home.module.css';
import InputComponent from '../../components/search/search';
import ProductCards from '../../components/cards/cards';
import ghLogo from '../../img/header_bg.png';
import { Footer } from '../../components/Footer';

const home = () => {
  return (
    <>
      <div className={styles.home}>
        <img className={styles.Logo} src={ghLogo} alt="logo" />
        <h2>Home Page</h2>
        <InputComponent />
        <ProductCards />
        <Footer />
      </div>
    </>
  );
};

export default home;
