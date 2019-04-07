import React from "react";

// css modules
import classes from "./NavBar.module.css";

// components
import Logo from "../../Logo/Logo";

const navBar = props => {
  return (
    <div className={classes.NavBar}>
      <div>Menu</div>

      <Logo />

      <nav>nav items...</nav>
    </div>
  );
};

export default navBar;
