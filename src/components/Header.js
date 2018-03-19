import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

const styles = {
  nav: css({
    display: 'flex',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #f0f0f0',
    padding: 10,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  }),

  link: css({
    color: '#888',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 200ms',

    ':hover': {
      color: '#444',
    },

    ':not(:first-child)': {
      marginLeft: 10,
    },

    '&.active': {
      color: '#000',
    },
  }),
};

const Header = () => (
  <nav className={styles.nav}>
    <NavLink className={styles.link} exact to="/">
      Home
    </NavLink>
    <NavLink className={styles.link} to="/about">
      About
    </NavLink>
  </nav>
);

export default Header;
