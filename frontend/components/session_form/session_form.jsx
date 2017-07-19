import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (<div className="navLink">New to DanceFlix? <Link to="/signup">Sign up now</Link></div>);
    } else {
      return (<div className="navLink">Already Have an Account? <Link to="/login">Please Login</Link></div>);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSubmit() {
    if (this.props.formType === "signup") {
      return "Sign Up!";
    } else {
      return "Sign In";
    }
  }

  render () {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>Sign In</h3>
          <div className="login-form">
            <br/>
            <label>Email <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.renderErrors()}
            <input type="submit" value={this.renderSubmit()} />
            <br/>
            {this.navLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
