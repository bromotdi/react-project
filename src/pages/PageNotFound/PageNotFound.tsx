import React from 'react';
import './PageNotFound.css';
import notFound from '../../assets/images/404.gif';

const PageNotFound = (): JSX.Element => {
  return (
    <>
      <p className="notFoundPage__text">Sorry, page not found :(</p>
      <img className="notFoundPage__img" src={notFound} alt="page not found" />
    </>
  );
};

export default PageNotFound;
