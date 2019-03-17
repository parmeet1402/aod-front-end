import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

class Header extends Component {
  constructor(props) {
    super();
    this.onHeaderButtonClick = this.onHeaderButtonClick.bind(this);
  }
  onHeaderButtonClick() {
    const navigation = document.querySelector(".navigation");
    navigation.style.opacity = navigation.style.opacity == 1 ? 0 : 1;
    navigation.style.visibility =
      navigation.style.visibility == "visible" ? "hidden" : "visible";
  }
  render() {
    return (
      <header className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <div className="header__button" onClick={this.onHeaderButtonClick}>
          <div className="header__button--top">&nbsp;</div>
          <div className="header__button--middle">&nbsp;</div>
          <div className="header__button--bottom">&nbsp;</div>
        </div>
      </header>
    );
  }
}
export default Header;
