import React, { useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';
import { User } from '../../types';
import style from './UsersPage.module.scss';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (data: User): void => {
    const id = users.length + 1;
    const user = { ...data, id };
    setUsers([...users, user]);
  };

  return (
    <div className={style.usersPage}>
      <Form addUser={addUser} />
      {users.length !== 0 && <ItemList users={users}>{<Title text="Users" />}</ItemList>}
    </div>
  );
};

export default UsersPage;
