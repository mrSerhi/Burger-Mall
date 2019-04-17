import React from "react";
import PropTypes from "prop-types";

// styles module
import classes from "./Burger.module.css";
// components
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = ({ ingredients }) => {
  // rendering ingredients
  const render = Object.keys(ingredients).map(key => {
    const arraysOfValuesInArray = [...Array(+ingredients[key])]; // ex: [[undefined], [undefined], [undefined, undefined], ...]

    // _ no lodash, it's set to _ because not used
    const transforms = arraysOfValuesInArray.map((_, index) => {
      return <BurgerIngredients key={key + index} type={key} />;
    });

    return transforms;
  });

  // if render hes array of empty arrays -> returns [],
  // else -> array of react elements [{...}, {...}]
  const checkOnEmpty = render.reduce((acc, curr) => [...acc, ...curr], []);

  const renderElements = () => {
    if (checkOnEmpty.length === 0) {
      return <p>You can add ingredients...</p>;
    }
    return checkOnEmpty;
  };

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {renderElements()}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
