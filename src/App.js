import React from 'react';
import { hot } from 'react-hot-loader';
import { css } from 'emotion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

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

  content: css({
    marginTop: 'calc(21px + 1.2rem)',
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

      <Switch>
        <div className={styles.content}>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Switch>
    </div>
  </Router>
);

export default hot(module)(App);
