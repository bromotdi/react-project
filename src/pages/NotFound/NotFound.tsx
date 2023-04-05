import React from 'react';
import styles from './NotFound.module.css';
import Logo404 from '../../img/404.png';
import {Footer} from "../../components/Footer";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <p>404</p>
      <h2>Sorry,pages Not Found ...</h2>
      <img className={styles.Logo404} src={Logo404} alt="GitHub logo" />
      <Footer />
    </div>
  );
}

export default NotFound;
