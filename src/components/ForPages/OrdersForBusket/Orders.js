import React from "react";
import PropTypes from "prop-types";

import classes from "./Orders.module.css";

const OrdersForBusket = ({ ingredients, price, orderNum }) => {
  const mapIngredients = Object.keys(ingredients).map(key => {
    return (
      <li key={key}>
        {key}
        <span>{ingredients[key]}</span>
      </li>
    );
  });

  return (
    <div className={classes.Orders}>
      <h3>
        Order <span>№{orderNum}</span>
      </h3>

      <div className={classes.Ingredients}>
        <h4>Ingredients: </h4>

        <ul>{mapIngredients}</ul>
      </div>

      <p className={classes.Price}>
        Price: &#36;<span>{parseFloat(price).toFixed(2)}</span>
      </p>
    </div>
  );
};

OrdersForBusket.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  orderNum: PropTypes.number.isRequired
};

export default OrdersForBusket;
