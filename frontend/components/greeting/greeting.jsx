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

const personalGreeting = (currentUser, logout) => {
  const name = currentUser.username.slice(0, currentUser.username.indexOf("@"));
  return (
    <nav>
      <Link className="favorites-button" to="/favorites">Favorites</Link>
      <hgroup className="dropdown">{name}
        <nav className="dropdown-content">
          <h6 className="header-name">{name}</h6>
          <h6 className="header-name">Favorites</h6>
          <h6 className="header-name">Most Viewed</h6>
          <Link className="logout" to="/" onClick={logout}>Sign out of DanceFlix</Link>
        </nav>
      </hgroup>
    </nav>
  );
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
