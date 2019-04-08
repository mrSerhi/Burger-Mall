import React from "react";

// css modules
import classes from "./NavBar.module.css";

// components
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavBarMenuBtn from "../NavBarMenuBtn/NavBarMenuBtn";

const navBar = ({ openPhase, onToggleMenu }) => {
  return (
    <div className={classes.NavBar}>
      <NavBarMenuBtn nextView={openPhase} onToggle={onToggleMenu} />

      <Logo />

      <div className={classes.HideNavOnModile}>
        <Navigation />
      </div>
    </div>
  );
};

export default navBar;
