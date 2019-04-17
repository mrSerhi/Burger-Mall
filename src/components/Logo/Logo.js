import React from "react";
import { Link } from "react-router-dom";

// css modules
import classes from "./Logo.module.css";

// import image
import BurgerLogo from "../../assets/images/Logo/burger.svg";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={BurgerLogo} alt="Burger-logo" />
      </Link>
    </div>
  );
};

export default logo;
