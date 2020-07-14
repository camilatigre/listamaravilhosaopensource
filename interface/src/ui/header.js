import React, { Fragment } from "react";
import logo from "../img/logo.svg";
import "../styles/main.css";

const Header = () => {
  return (
    <div class="header">
      <img class="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
