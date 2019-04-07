import React from "react";

// css modules
import classes from "./NavBar.module.css";

// components
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const navBar = props => {
  return (
    <div className={classes.NavBar}>
      <div>Menu</div>

      <Logo />

      <Navigation />
    </div>
  );
};

export default navBar;
