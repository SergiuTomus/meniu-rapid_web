import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest }) => { //...rest - (in ES6 destructuring) all unspecified properties
  return (
    <Route
      {...rest}
      render={props =>
        auth.authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  )
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
