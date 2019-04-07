import React from "react";

// css modules
import classes from "./Logo.module.css";

// import image
import BurgerLogo from "../../assets/images/Logo/burger.svg";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="Burger-logo" />
    </div>
  );
};

export default logo;
