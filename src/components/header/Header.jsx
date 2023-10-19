import React from 'react';
import styles from './Header.module.css';
import sunIcon from '../../assets/icon-sun.svg';
import moonIcon from '../../assets/icon-moon.svg';

function Header() {
  const [isDark, setIsDark] = React.useState(
    () => JSON.parse(localStorage.getItem('THEME')) ?? false
  );

  React.useEffect(() => {
    localStorage.setItem('THEME', JSON.stringify(isDark));
    isDark
      ? document.querySelector('html').classList.add('dark')
      : document.querySelector('html').classList.remove('dark');
  }, [isDark]);

  return (
    <header>
      <h1>devfinder</h1>
      <button onClick={() => setIsDark(!isDark)}>
        <span>{isDark ? 'LIGHT' : 'DARK'}</span>
        <img src={isDark ? sunIcon : moonIcon} />
      </button>
    </header>
  );
}

export default Header;
