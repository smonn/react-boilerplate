import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router, NavLink } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  let mountedHeader;
  let props;

  const mountHeader = () => {
    if (mountedHeader) {
      return mountedHeader;
    }

    mountedHeader = mount(
      <Router>
        <Header {...props} />
      </Router>,
    );
    return mountedHeader;
  };

  beforeEach(() => {
    mountedHeader = undefined;
    props = {};
  });

  it('mounts without crashing', () => {
    mountHeader();
  });

  it('renders nav', () => {
    expect(mountHeader().find('nav')).toHaveLength(1);
  });

  it('renders NavLinks', () => {
    expect(mountHeader().find(NavLink)).toHaveLength(2);
  });
});
