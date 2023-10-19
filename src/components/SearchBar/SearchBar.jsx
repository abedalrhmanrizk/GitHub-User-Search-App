/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icon-search.svg';
function SearchBar({ setQuarry }) {
  const [username, setUsername] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (username !== '') setQuarry(username);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <div>
        <img src={searchIcon} />
        <input
          type='text'
          placeholder='Search GitHub username…'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className={styles.button}>Search</button>
    </form>
  );
}

export default SearchBar;
