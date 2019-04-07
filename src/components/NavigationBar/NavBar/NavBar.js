import React from "react";

// css modules
import classes from "./NavBar.module.css";

const navBar = props => {
  return (
    <div className={classes.NavBar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>nav items...</nav>
    </div>
  );
};

export default navBar;
