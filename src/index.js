import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'emotion';

import App from './App';

injectGlobal({
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: '100%',
    lineHeight: 1.5,
    margin: 0,
    color: 'black',
    backgroundColor: 'white',
  },
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
