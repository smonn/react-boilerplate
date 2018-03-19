import React from 'react';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { mount } from 'enzyme';

import App from './App';
import Header from './components/Header';

describe('App', () => {
  let mountedApp;
  let props;

  const mountApp = () => {
    if (mountedApp) {
      return mountedApp;
    }

    mountedApp = mount(
      <Router>
        <App {...props} />
      </Router>,
    );
    return mountedApp;
  };

  beforeEach(() => {
    mountedApp = undefined;
    props = {};
  });

  it('renders without crashing', () => {
    mountApp();
  });

  it('renders Header', () => {
    expect(mountApp().find(Header)).toHaveLength(1);
  });

  it('renders Switch', () => {
    expect(mountApp().find(Switch)).toHaveLength(1);
  });
});
