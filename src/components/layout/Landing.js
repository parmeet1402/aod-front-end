import React, { Component } from "react";
import Logo from "../../img/logo.png";
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img src={Logo} alt="logo" className="landing__logo" />
        <h1 className="heading__primary">A social network for developers</h1>
        <div>
          <button className="btn btn--dark">Sign Up</button>
          <button className="btn btn--light">Log In</button>
        </div>
      </div>
    );
  }
}
export default Landing;
