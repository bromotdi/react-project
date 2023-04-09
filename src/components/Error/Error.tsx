import React from 'react';

import style from './Error.module.scss';

interface ErrorProps {
  error: string;
}

const Error = (props: ErrorProps) => {
  const { error } = props;
  return <h1 className={style.error}>{error}</h1>;
};

export default Error;
