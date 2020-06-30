import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { jwt } from '../../common/auth-helper';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        jwt() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
