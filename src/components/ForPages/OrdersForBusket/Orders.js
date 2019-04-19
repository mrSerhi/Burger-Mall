import React from "react";

import classes from "./Orders.module.css";

const OrdersForBusket = () => {
  return (
    <div className={classes.Orders}>
      <h3>
        Order <span>№1</span>
      </h3>
      <div className={classes.Ingredients}>
        <h4>Ingredients: </h4>

        <ul>
          <li>
            Salad <span>4</span>
          </li>
          <li>
            Becon <span>4</span>
          </li>
          <li>
            Cheese <span>1</span>
          </li>
          <li>
            Meat <span>2</span>
          </li>
        </ul>
      </div>

      <p className={classes.Price}>
        Price: &#36;<span>2.44</span>
      </p>
    </div>
  );
};

export default OrdersForBusket;
