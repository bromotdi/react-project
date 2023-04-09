import React, { useState, useEffect } from 'react';

import style from './Search.module.scss';

interface SearchProps {
  onClick: (name: string) => void;
}

const Search = ({ onClick }: SearchProps) => {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    localStorage.setItem('searchValue', searchInput);
  }, [searchInput]);

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onClick(searchInput);
  };

  return (
    <div className={style.search}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={style.form__input}
          placeholder="search"
          onChange={inputHandle}
          value={searchInput}
        />
        <button onClick={handleSubmit} className={style.form__btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
