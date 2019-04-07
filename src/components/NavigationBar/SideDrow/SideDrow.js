import React from "react";

// css modules
import classes from "./SideDrow.module.css";

// components
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const sideDrower = () => {
  return (
    <div className={classes.SideDrow}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};

export default sideDrower;
