import React, { ReactNode, useState } from 'react';
import PersonCard from './PersonCard/PersonCard';
import UserCard from './UserCard/UserCard';
import Modal from '../Modal/Modal';
import { Person, User } from '../../types';

import style from './ItemList.module.scss';

interface ItemListProps {
  persons?: Person[];
  users?: User[];
  children?: ReactNode;
}

const ItemList = (props: ItemListProps) => {
  const { children, persons, users } = props;

  const [modalShow, setModalShow] = useState(false);
  const [person, setPerson] = useState<Person | null>(null);

  const handleClick = (id: number) => {
    if (id) {
      getCharacter(id);
      setModalShow(true);
    }
  };

  const modalClose = () => {
    setModalShow(false);
    setPerson(null);
  };

  const url = 'https://rickandmortyapi.com/api/character/';

  const getCharacter = (id: number) => {
    fetch(`${url}${id}`).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        setPerson(data);
      }
    });
  };

  return (
    <section className={style.itemList}>
      <Modal isOpen={modalShow} modalClose={modalClose} person={person} />
      {children}
      <div className={style.itemList__wrapper}>
        {persons?.map((item) => (
          <PersonCard onClick={() => handleClick(item.id)} key={item.id} person={item} />
        ))}
        {users?.map((item) => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>
    </section>
  );
};

export default ItemList;
