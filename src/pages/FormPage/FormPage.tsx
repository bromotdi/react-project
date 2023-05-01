import React from 'react';
import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';

const FormPage = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      <h2 className="main__title">Here you can create your own character</h2>
      <Form />
      <CardList />
    </div>
  );
};

export default FormPage;
