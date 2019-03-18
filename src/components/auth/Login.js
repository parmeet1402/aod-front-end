import React, { Component } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import PasswordFieldGroup from "../commons/PasswordFieldGroup";
class Login extends Component {
  render() {
    return (
      <div className="login">
        <div>
          <h2 className="heading__primary">Welcome back!</h2>
          <p>
            Sign in to connect back with the awesome community of developers.
          </p>
        </div>
        <div>
          <TextFieldGroup type="email" placeholder="Email Address" />
          <PasswordFieldGroup placeholder="Password" />
        </div>
        <button className="btn btn--dark">Login</button>
      </div>
    );
  }
}
export default Login;
