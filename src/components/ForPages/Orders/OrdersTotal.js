import React from "react";
import PropTypes from "prop-types";

// components
import Burger from "../../Burger/Burger";
import Button from "../../UIelements/Button/Button";
// css module
import classes from "./OrdersTotal.module.css";

const OrdersTotal = ({ ingredients, onCansel, onOrder }) => {
  return (
    <div className={classes.OrdersTotal}>
      <h1>Bon appetit!</h1>
      <div className={classes.Burger}>
        <Burger ingredients={ingredients} />
      </div>

      <Button btnType="Danger" onClicked={onCansel}>
        Cansel
      </Button>
      <Button btnType="Success" onClicked={onOrder}>
        Ok
      </Button>
    </div>
  );
};

OrdersTotal.propTypes = {
  ingredients: PropTypes.object.isRequired,
  onCansel: PropTypes.func.isRequired,
  onOrder: PropTypes.func.isRequired
};

export default OrdersTotal;
