// @flow

import React from 'react';

type Props = {
  location: {
    pathname: string,
  },
};

export default function NotFoundPage(props: Props) {
  return <div>Not Found: {props.location.pathname}</div>;
}
