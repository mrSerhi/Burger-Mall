import React, { Component } from "react";

// HOC
import Aux from "../hoc/Aux";
// components
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UIelements/Modal/Modal";
import OrderTotal from "../components/Burger/OrderTotal/OrderTotal";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    allowToBuy: false,
    ordered: false
  };

  _INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.4,
    cheese: 0.7,
    meat: 1.2
  };
  // ingredients we should get then call add or delete handlers
  UpdateAllowToBuyState = ingredients => {
    // loop keys -> return value of each ingr and sum that
    const sumOfingredients = Object.keys(ingredients)
      .map(ing => ingredients[ing])
      .reduce((acc, num) => acc + num, 0);

    // set if 0 -> false, 1, 2 ... -> true
    this.setState({ allowToBuy: !!sumOfingredients });
  };

  handleAddingIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    const totalPrice = this.state.totalPrice;
    const updatedPrice = parseFloat(
      (totalPrice + this._INGREDIENT_PRICES[type]).toFixed(2)
    );
    ingredients[type] = ingredients[type] + 1;
    // updating
    this.UpdateAllowToBuyState(ingredients);

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
      // updating
      this.UpdateAllowToBuyState(ingredients);

      this.setState({ ingredients, totalPrice: updatedPrice });
    }
    return;
  };

  handleDisplayModal = () => this.setState({ ordered: true });
  handleHideModal = e => {
    e.preventDefault();
    this.setState({ ordered: false });
  };
  handleContinueModal = () => alert("You will continue");

  setUpBtnDisabling = () => {
    const ingredients = { ...this.state.ingredients };
    // loop each value and set true / false
    for (const key in ingredients) {
      ingredients[key] = ingredients[key] <= 0;
    }
    return ingredients;
  };

  render() {
    const { ingredients, totalPrice, allowToBuy, ordered } = this.state;

    return (
      <Aux>
        <Modal onHide={this.handleHideModal} display={ordered}>
          <OrderTotal
            onHideElem={this.handleHideModal}
            onContinue={this.handleContinueModal}
            orders={ingredients}
            price={totalPrice}
          />
        </Modal>

        <Burger ingredients={ingredients} />

        <BuildControls
          onAddIngredients={this.handleAddingIngredients}
          onDeleteIngredients={this.handleRemovingIngredients}
          disabling={this.setUpBtnDisabling()}
          disablingBuyBtn={allowToBuy}
          price={totalPrice}
          ordered={this.handleDisplayModal}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
