import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/videos");
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
    this.props.processForm({user}).then(() => {
      this.props.history.push("/videos");
    });
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: "WillDavis@willdemos.net",
      password: "password"
    };
    this.props.processForm({user}).then(() => {
      this.props.history.push("/videos");
    });
  }

  demoLogin() {
    if (this.props.formType === "login") {
      return (
        <button className="demo-login" onClick={this.handleDemo}>Demo Login</button>
      );
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (<div className="navLink">New to DanceFlix? <Link to="/signup">Sign up now</Link></div>);
    } else {
      return (<div className="navLink">Already Have an Account? <br/> Or want to view a Demo? <Link to="/login">Please Login</Link></div>);
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
        <div className="login-form-box">
        <div id="sign-in">{this.renderSubmit()}</div>
        {this.demoLogin()}
        <form>
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
        <button id="signin" onClick={this.handleSubmit}>{this.renderSubmit()}</button>
        <br/>
        {this.navLink()}
      </div>
    </form>
    </div>
  </div>
);
}
}

export default withRouter(SessionForm);
