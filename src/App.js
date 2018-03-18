import React from 'react';
import { hot } from 'react-hot-loader';
import { css } from 'emotion';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

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
    color: '#333',

    ':hover': {
      color: 'black',
    },

    ':not(:first-child)': {
      marginLeft: 10,
    },

    '&.active': {
      color: '#666',
      textDecoration: 'none',
    },
  }),

  content: css({
    marginTop: 'calc(21px + 1.5rem)',
    padding: 10,
  }),
};

const App = () => (
  <Router>
    <div>
      <nav className={styles.nav}>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
      </nav>

      <div className={styles.content}>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
