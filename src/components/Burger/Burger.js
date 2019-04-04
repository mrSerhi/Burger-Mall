import React from "react";

// styles module
import classes from "./Burger.module.css";
// components
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="salad" />
      <BurgerIngredients type="bacon" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
