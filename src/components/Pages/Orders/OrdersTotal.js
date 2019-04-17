import React from "react";

// components
import Burger from "../../Burger/Burger";
import Button from "../../UIelements/Button/Button";
// css module
import classes from "./OrdersTotal.module.css";

const OrdersTotal = ({ ingredients, onCansel }) => {
  return (
    <div className={classes.OrdersTotal}>
      <h1>Bon appetit!</h1>
      <div className={classes.Burger}>
        <Burger ingredients={ingredients} />
      </div>

      <Button btnType="Danger" onClicked={onCansel}>
        Cansel
      </Button>
      <Button btnType="Success" onClicked={() => alert("Buy!")}>
        Buy!
      </Button>
    </div>
  );
};

export default OrdersTotal;
