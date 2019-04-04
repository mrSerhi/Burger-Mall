import React, { Component } from "react";

// HOC
import Aux from "../hoc/Aux";
// components
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  };

  _INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.4,
    cheese: 0.7,
    meat: 1.2
  };

  handleAddingIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    const totalPrice = this.state.totalPrice;
    const updatedPrice = parseFloat(
      (totalPrice + this._INGREDIENT_PRICES[type]).toFixed(2)
    );
    ingredients[type] = ingredients[type] + 1;

    this.setState({ ingredients, totalPrice: updatedPrice });
  };

  handleRemovingIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    const totalPrice = this.state.totalPrice;

    if (totalPrice > 0) {
      const updatedPrice = parseFloat(
        (totalPrice - this._INGREDIENT_PRICES[type]).toFixed(2)
      );
      ingredients[type] = ingredients[type] > 0 ? ingredients[type] - 1 : 0;

      this.setState({ ingredients, totalPrice: updatedPrice });
    }
    return;
  };

  setUpBtnDisabling = () => {
    const ingredients = { ...this.state.ingredients };
    // loop each value and set true / false
    for (const key in ingredients) {
      ingredients[key] = ingredients[key] <= 0;
    }
    return ingredients;
  };

  render() {
    const { ingredients, totalPrice } = this.state;

    return (
      <Aux>
        <Burger ingredients={ingredients} />

        <BuildControls
          onAddIngredients={this.handleAddingIngredients}
          onDeleteIngredients={this.handleRemovingIngredients}
          disabling={this.setUpBtnDisabling()}
          price={totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
