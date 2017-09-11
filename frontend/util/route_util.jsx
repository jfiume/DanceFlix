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
        <Redirect to="/" />
      )
    )} />
);

const Logo = ({component: path, loggedIn, value}) => (
  <Route path={path} render={() => (
      loggedIn? (
        <div>
          <Link className="logo" to="/videos">{value}</Link>
          <h2 className="logo-tag">Watch All Your Favorite Dance Videos</h2>
        </div>
      ) : (
        <div>
          <Link className="logo" to="/">{value}</Link>
          <h2 className="logo-tag">Watch All Your Favorite Dance Videos</h2>
        </div>
        )
    )}/>
);


const Splash = ({path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Link className="home" to="/videos">Home</Link>
        ) : (
        <Link className="login" to="/login">Sign In</Link>
        )
      )} />
);

const SplashVideo = ({path, loggedIn}) => (
  <Route path={path} render={(props) => (
      <div className="splash-video" >
        <h1>Watch La La Land now on DANCEFLIX</h1>
        <iframe src="https://www.youtube.com/embed/SKDnPGD8CIw" frameBorder="0"></iframe>
      </div>
      )} />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const LogoRoute = withRouter(connect(mapStateToProps, null)(Logo));

export const SplashRoute = withRouter(connect(mapStateToProps, null)(Splash));

export const SplashVideoRoute = withRouter(connect(mapStateToProps, null)(SplashVideo));
