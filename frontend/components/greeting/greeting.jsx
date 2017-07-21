import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link className="login" to="/login">Demo Login</Link>
    <Link className="login" to="/login">Sign In</Link>
    <div className="join-free">
      <h3>See what’s next.</h3>
      <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
      <Link className="signup" to="/signup">JOIN FREE FOR A MONTH</Link>
    </div>
  </nav>
);


const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <Link className="logout-button" to="/" onClick={logout}>Log Out</Link>
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
