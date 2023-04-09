import React from 'react';
import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div data-testid="loader" className={style.container}>
      <div className={style.loader}>
        <p>Progressing...</p>
      </div>
    </div>
  );
};

export default Loader;
