import React from 'react';
import styles from '../cards/cards.module.css';
import { Character } from '../type/types';

const Card = ({ product }: { product: Character }) => {
  return (
    <div className="cards" key={product.id}>
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={product.image}
          alt={`${product.name}, ${product.location}`}
        />
        <h5>Name: {product.name}</h5>
        <p>Status: {product.status}</p>
        <p>Species: {product.species}</p>
        <p>Gender: {product.gender}</p>
        <p>Location: {product.location}</p>
      </div>
    </div>
  );
};

export default Card;
