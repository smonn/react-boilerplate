import React from 'react';
import { hot } from 'react-hot-loader';
import { css } from 'emotion';
import { Switch, Route } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';

const styles = {
  app: css({}),
  content: css({
    marginTop: 'calc(21px + 1.2rem)',
    padding: 10,
  }),
};

const App = () => (
  <div className={styles.app}>
    <Header />

    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </div>
);

export default hot(module)(App);
