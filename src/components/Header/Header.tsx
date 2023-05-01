import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="header container">
        <h1 className="header__logo"></h1>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
