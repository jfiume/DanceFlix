import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <div className="join-free">
      <h3>See what’s next.</h3>
      <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
      <Link className="signup" to="/signup">JOIN FREE FOR A MONTH</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => {
  const name = currentUser.username.includes("@") ?
    currentUser.username.slice(0, currentUser.username.indexOf("@")) :
      currentUser.username;
  return (
    <hgroup className="dropdown"><img src="http://res.cloudinary.com/pancake/image/upload/v1501112677/PICON_026_tvd3pr.png"></img><span>{name}</span>
      <nav className="dropdown-content">
        <p><Link className="dropdown-links" to="/favorites">Favorites</Link></p>
        <p><Link className="dropdown-links" to="/videos">All Videos</Link></p>
        <p><Link className="dropdown-links" to="/views">Most Viewed</Link></p>
        <p><Link className="logout" to="/" onClick={logout}>Sign Out</Link></p>
      </nav>
    </hgroup>
  );
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
