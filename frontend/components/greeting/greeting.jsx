import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link id="login" to="/login">Sign In</Link>
    <div>
      <h3>See what’s next.</h3>
      <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
      <Link id="signup" to="/signup">JOIN FREE FOR A MONTH</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
