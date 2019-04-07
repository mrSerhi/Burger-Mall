import React from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";

// css module
import classes from "./OrderTotal.module.css";
// components
import CloseBtn from "../../UIelements/CloseBtn/CloseBtn";
import Button from "../../UIelements/Button/Button";

const OrderTotal = ({ orders, onHideElem, onContinue }) => {
  const renderOrders = () => {
    if (orders) {
      const renderLi = Object.keys(orders).map(key => {
        const style = { textTransform: "capitalize" };
        return (
          <li key={key + Math.random() * 100}>
            <span style={style}>{key}: </span>
            <span>{orders[key]}</span>
          </li>
        );
      });

      return <ul>{renderLi}</ul>;
    }
    return null;
  };

  return (
    <Aux>
      <div className={classes.Wrapper}>
        <CloseBtn onClose={onHideElem} />
      </div>
      <h3>Total Order</h3>
      <p>Your Burger will consist of:</p>
      {renderOrders()}
      <p>You are satisfied with your ordered ingredients?</p>

      <Button onClicked={onHideElem} btnType="Danger">
        Cansel
      </Button>

      <Button onClicked={onContinue} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

OrderTotal.propTypes = {
  orders: PropTypes.object.isRequired,
  onHideElem: PropTypes.func.isRequired
};

export default OrderTotal;
