import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter, } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to="/" />
        )
      )} />
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
);

const Logo = ({component: path, loggedIn, value}) => (
  <Route path={path} render={() => (
      loggedIn? (
        <Link className="logo" to="/videos">{value}</Link>
      ) : (
        <Link className="logo" to="/">{value}</Link>
        )
    )}/>
);


const Splash = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
        ) : (
        <Link className="login" to="/login">Sign In</Link>
        )
      )} />
);



const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const LogoRoute = withRouter(connect(mapStateToProps, null)(Logo));

export const SplashRoute = withRouter(connect(mapStateToProps, null)(Splash));
