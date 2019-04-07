import React from "react";

// css module
import classes from "./Navigation.module.css";

// components
import NavItems from "./NavIgationItems/NavigationItems";

const navigation = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <NavItems path="/" active>
          Builder Burger
        </NavItems>
        <NavItems path="/">Checkout</NavItems>
      </ul>
    </nav>
  );
};

export default navigation;
