import React from 'react';
import { Outlet } from 'react-router-dom';
import './Main.css';
import bg from '../../assets/images/header_bg.png';

const Main = (): JSX.Element => {
  return (
    <>
      <main className="main container">
        <img className="bg" src={bg} />
        <Outlet />
      </main>
    </>
  );
};

export default Main;
