import React, { Component } from "react";
import PropTypes from "prop-types";

// styles module
import classes from "./BuildControls.module.css";

// components
import BuildControl from "./BuildControl/BuildControl";

class BuildControls extends Component {
  options = [
    { title: "Salad", type: "salad" },
    { title: "Bacon", type: "bacon" },
    { title: "Cheese", type: "cheese" },
    { title: "Meat", type: "meat" }
  ];

  renderControls = () => {
    const { disabling, onAddIngredients, onDeleteIngredients } = this.props;

    if (this.options) {
      return this.options.map((control, i) => {
        const { title, type } = control;

        return (
          <BuildControl
            key={type + i}
            title={title}
            onAdd={() => onAddIngredients(type)}
            onDelete={() => onDeleteIngredients(type)}
            btnDisable={disabling[type]}
          />
        );
      });
    }
    return null;
  };

  renderPrice = () => {
    const { price } = this.props;

    if (price > 0) {
      return (
        <h4 className={classes.Price}>
          Total Price:{" "}
          <span className={classes.PriceNumber}>&#36;{price.toFixed(2)}</span>
        </h4>
      );
    }
    return (
      <h4 className={classes.Price}>
        Total Price: <span className={classes.PriceNumber}>&#36;0</span>
      </h4>
    );
  };

  render() {
    return (
      <div className={classes.BuildControls}>
        {this.renderPrice()}
        {this.renderControls()}
      </div>
    );
  }
}

BuildControls.propTypes = {
  onAddIngredients: PropTypes.func.isRequired,
  onDeleteIngredients: PropTypes.func.isRequired,
  disabling: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
};

export default BuildControls;
