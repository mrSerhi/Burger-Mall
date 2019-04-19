import React from "react";

// css module
import classes from "./Navigation.module.css";

// components
import NavItems from "./NavIgationItems/NavigationItems";

const navigation = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <NavItems exact path="/">
          <i className="fas fa-hamburger" /> Burger
        </NavItems>
        <NavItems path="/orders/checkout">
          Checkout <i className="fas fa-clipboard-check" />
        </NavItems>
        <NavItems path="/orders/orders_busket">
          Busket <i className="fas fa-shopping-bag" />
        </NavItems>
      </ul>
    </nav>
  );
};

export default navigation;
