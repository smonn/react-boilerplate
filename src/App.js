import React from 'react';
import { css } from 'emotion';

const styles = {
  container: css({
    padding: '1.5rem'
  })
};

export default function App() {
  return <div className={styles.container}>Hello, World!</div>;
}
