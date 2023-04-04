import React from 'react';
import { Items } from 'components/type/types';
import styles from './formCard.module.css';

const FormCards = ({ items }: { items: Items[] }) => {
    return (
        <div className={styles.formCards}>
            {items.map((item) => (
                <div className={styles.formCard} key={item.id}>
                    <img className={styles.imgCard} src={item.inputImg} />
                    <h2>Name : {item.inputName}</h2>
                    <h2>Birthday : {item.inputDate}</h2>
                    <h2>From : {item.inputCountry}</h2>
                    <h2>Age : {item.inputYear ? 'adult ' : 'minor '}</h2>
                    <h2>Gender : {item.inputGender ? 'Female' : 'Male'}</h2>
                </div>
            ))}
        </div>
    );
};

export default FormCards;
