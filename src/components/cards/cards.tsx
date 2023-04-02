import React, { useState, useEffect } from 'react';
import {Data} from '../type/types';
import styles from './cards.module.css';
import Card from '../card/card';
import {Character} from '../type/types';

const ProductCards = () => {
  const [products, setProducts] = useState<Character[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (Data.length) {
      setProducts(Data);
    } else {
      setErrorMessage('Failed to retrieve the list of products.');
    }
  }, []);

  return (
    <div className={styles.wrap}>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <h2 className={styles.title_prod}>Cards</h2>
          <div className={styles.container}>
            <div className={styles.row}>
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCards;
