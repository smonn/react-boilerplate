import React from 'react';
import { css } from 'emotion';
import { hot } from 'react-hot-loader';

const styles = {
  container: css({
    padding: '1.5rem',
  }),
};

const App = () => <div className={styles.container}>Hello, Simon!</div>;

export default hot(module)(App);
