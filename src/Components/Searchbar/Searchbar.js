import React, { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onClick }) {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (value.trim() !== '') {
      onClick(value);
      setValue('');
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          onChange={onChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
      </form>
    </header>
  );
}
